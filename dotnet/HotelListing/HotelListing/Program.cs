using Serilog;
using Serilog.Events;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Host.UseSerilog((hostContext, services, configuration) => {
    configuration.WriteTo.File(
        path: @"a:\Work\Stack\BackEnd\DotNet\DUMB\HotelListing\HotelListing\logs\log-.txt",
        outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj} {NewLine} {Exception}",
        rollingInterval: RollingInterval.Day,
        restrictedToMinimumLevel: LogEventLevel.Information);
}); ;

builder.Services.AddControllers();

builder.Services.AddCors(o => {
    o.AddPolicy("AllowAll", builder =>
    builder.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); //c=> c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title="HotelListing", Version="v1"})

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI(); //c=>c.SwaggerEndpoint("/swagger/v1/sawgger.json", "HotelListing v1")
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("AllowAll");

 app.MapControllers();
try {
    Log.Information("Application Is Starting");
    app.Run();
} catch (Exception ex) {
    Log.Fatal(ex, "Application Failed to Start");
} finally {
    Log.CloseAndFlush();
}
