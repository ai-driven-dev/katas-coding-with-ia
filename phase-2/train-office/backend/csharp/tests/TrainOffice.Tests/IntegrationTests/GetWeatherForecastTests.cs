using Microsoft.EntityFrameworkCore;
using TrainOffice.Features.WeatherForecasts.UseCases;
using TrainOffice.Infrastructures.DataModels;
using TrainOffice.Infrastructures.PostgreSQL.Context;
using TrainOffice.Infrastructures.PostgreSQL.Repositories;

namespace TrainOffice.Tests;

public class GetWeatherForecastTests
{
    private readonly ApplicationDbContext _context;
    private readonly IGetWeatherForecast _forecastService;

    public GetWeatherForecastTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: "InMemoryDb")
            .Options;

        _context = new ApplicationDbContext(options);
        SeedTestData(_context);

        var summaryRepository = new SummaryRepository(_context);
        _forecastService = new GetWeatherForecast(summaryRepository);
    }

    [Fact]
    public async Task GetWeatherForecast_ReturnsCorrectForecast()
    {
        // Act
        var result = await _forecastService.GetWeatherForecastAsync();

        // Assert
        Assert.NotNull(result);
        Assert.Equal(5, result.Length);
        Assert.Contains(result, forecast => forecast.Summary == "Mild" || forecast.Summary == "Hot");
    }

    private void SeedTestData(ApplicationDbContext context)
    {
        var summaries = new List<Summary>
        {
            new() { Content = "Mild" },
            new() { Content = "Hot" },
        };
        context.Summaries.AddRange(summaries);
        context.SaveChanges();
    }
}