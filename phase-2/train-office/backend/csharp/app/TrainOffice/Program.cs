using Serilog;
using TrainOffice.Core.Configurations;
using TrainOffice.Core.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
    .CreateLogger();

builder.Host.UseSerilog();

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument(config =>
{
    config.Title = "My API";
    config.Version = "v1";
});

var configuration = builder.Configuration;

builder.Services.AddPersistences(configuration);
builder.Services.AddApplications();
builder.Services.AddControllers();
builder.Services.AddTrainOfficeCors(configuration);

builder.Services.AddHttpContextAccessor();

var app = builder.Build();

app.SeedInMemoryDb(configuration);
app.MigrateDatabase(configuration);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Serve the OpenAPI/Swagger documents
    app.UseOpenApi(); // Serves the registered OpenAPI/Swagger documents by default on /swagger/v1/swagger.json
    app.UseSwaggerUi(); // Serves the Swagger UI on /swagger
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseCustomMiddlewares();

app.MapControllers();
app.UseCors(configuration["CORS:PolicyName"]);
app.Run();

// needed for use WebApplicationFactory in http tests
public partial class Program
{ }