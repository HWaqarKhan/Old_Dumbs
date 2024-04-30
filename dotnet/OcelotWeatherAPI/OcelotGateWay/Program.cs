using Ocelot.DependencyInjection;
using Ocelot.Middleware;


IConfiguration configuration = new ConfigurationBuilder()
                            .AddJsonFile("configuration.json")
                            .Build();

var builder = WebApplication.CreateBuilder(args);
//var configuration = builder.Configuration.AddJsonFile("configuration.json", optional: false, reloadOnChange: true);

builder.Services.AddOcelot(configuration);

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapControllers();
//await app.UseOcelot();

app.Run();
