using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using System.Net;
using System.Net.Http.Json;
using TrainOffice.Core.Api;
using TrainOffice.Features.WeatherForecasts.UseCases;

namespace TrainOffice.Tests.HttpTests;

public class WeatherForecastControllerTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> factory;
    private readonly LinkGenerator linkGenerator;

    public WeatherForecastControllerTests(WebApplicationFactory<Program> factory)
    {
        this.factory = factory;
        this.linkGenerator = factory.Services.GetRequiredService<LinkGenerator>();
    }

    [Fact]
    public async Task GetWeatherForecastJson_ReturnsOkResponse()
    {
        // Arrange
        var client = factory.CreateClient();
        var url = linkGenerator.GetPathByName("GetWeatherForecast", values: null);

        // Act
        var response = await client.GetAsync(url);

        // Assert
        response.EnsureSuccessStatusCode(); // Status Code 200-299
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);

        var apiResponse = await response.Content.ReadFromJsonAsync<ApiResponse<IEnumerable<WeatherForecast>>>();
        Assert.NotNull(apiResponse);
        Assert.NotEmpty(apiResponse.Data);
    }
}