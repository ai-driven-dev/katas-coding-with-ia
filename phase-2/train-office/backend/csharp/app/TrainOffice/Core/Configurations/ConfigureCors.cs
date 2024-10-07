namespace TrainOffice.Core.Configurations;

public static class ConfigureCors
{
    public static void AddTrainOfficeCors(this IServiceCollection services, ConfigurationManager configuration)
    {
        var origin = configuration["CORS:Origins"]?.Split(',') ?? throw new ArgumentException("Origin not configured");
        var name = configuration["CORS:PolicyName"] ?? throw new ArgumentException("PolicyName not configured");

        services.AddCors(options =>
        {
            options.AddPolicy(name: name,
                              policy =>
                              {
                                  policy.WithOrigins(origin)
                                  .AllowAnyMethod()
                                  .AllowAnyOrigin();
                              });
        });
    }
}