using LondonAPI;
using LondonAPI.Filters;
using LondonAPI.Infrastructure;
using LondonAPI.Models;
using LondonAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using LandonAPI.Services;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#region Registrations
builder.Services.AddDbContext<HotelApiContext>(opt => opt.UseInMemoryDatabase("LondonAPI"));
builder.Services.AddTransient<DataSeeder>();
builder.Services.AddScoped<IRoomService, DefaultRoomService>();
builder.Services.AddScoped<IOpeningService, DefaultOpeningService>();
builder.Services.AddScoped<IDateLogicService, DefaultDateLogicService>();
builder.Services.AddScoped<IBookingService, DefaultBookingService>();
//---------AutoMapper
//builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies()); // Project Scoped (not sure)
builder.Services.AddAutoMapper(typeof(Program).Assembly); //Solution Scoped (not sure)
//----------

#endregion

builder.Services.AddRouting(opt => opt.LowercaseUrls = true);
#region API Versioning
builder.Services.AddApiVersioning(opt => {
    opt.ApiVersionReader = new MediaTypeApiVersionReader();
    opt.AssumeDefaultVersionWhenUnspecified = true;
    opt.ReportApiVersions = true;
    opt.DefaultApiVersion = new ApiVersion(1, 0);
    opt.ApiVersionSelector = new CurrentImplementationApiVersionSelector(opt);
});
#endregion

#region Getting Property from appsetting.json
var infoSection = builder.Configuration.GetSection("Info");
builder.Services.Configure<HotelInfo>(infoSection);
#endregion

#region Code to change the content-type in response JSON to ION
/*builder.Services.AddMvc(opt => {
    var jsonFormatter = opt.OutputFormatters.OfType<NewtonsoftJsonOutputFormatter>().Single();
    opt.OutputFormatters.Remove(jsonFormatter);
    opt.OutputFormatters.Add(new IonOutputFormatter(jsonFormatter));
});*/
#endregion

builder.Services.AddMvc(opt => {
    opt.Filters.Add(typeof(JsonExceptionFilter));
    opt.Filters.Add(typeof(LinkRewritingFilter));
    opt.Filters.Add(typeof(RequireHttpsAttribute));
});

var app = builder.Build();

#region Data Seeding
SeedData(app);
void SeedData(IHost app) {
    var scopedFacotry = app.Services.GetService<IServiceScopeFactory>();
    using (var scope = scopedFacotry.CreateScope()) {
        var service = scope.ServiceProvider.GetService<DataSeeder>();
        service.Seed();
    }
}
#endregion

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
#region Hsts
app.UseHsts(opt => {
    opt.MaxAge(days: 180);
    opt.IncludeSubdomains();
    opt.Preload();
});

//app.ApplicationService.GetRequiredService<HotelApiContext>();

#endregion
app.Run();
