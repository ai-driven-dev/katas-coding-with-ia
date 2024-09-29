using TrainOffice.Features.Trains.UseCases;
using TrainOffice.Features.WeatherForecasts.UseCases;

namespace TrainOffice.Core.Configurations;

public static class ConfigureApplications
{
    public static void AddApplications(this IServiceCollection services)
    {
        services.AddScoped<IGetWeatherForecast, GetWeatherForecast>();
        services.AddScoped<IGetTrainsQuery, GetTrains>();
    }
}