using Microsoft.AspNetCore.Mvc;
using TrainOffice.Core.Api;
using TrainOffice.Features.WeatherForecasts.UseCases;

namespace TrainOffice.Features.WeatherForecasts.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController(IGetWeatherForecast weatherForecastApplication) : ControllerBase
{
    /// <summary>
    /// Gets the weather forecast
    /// </summary>
    /// <returns>An array of WeatherForecast entities.</returns>
    [HttpGet(Name = "GetWeatherForecast")]
    [ProducesResponseType(typeof(ApiResponse<IEnumerable<WeatherForecast>>), 200)]
    [ProducesResponseType(typeof(ApiResponse<ErrorResponse>), 500)]
    public async Task<IActionResult> GetWeatherForecast()
    {
        var forecast = await weatherForecastApplication.GetWeatherForecastAsync();

        return Ok(forecast);
    }
}