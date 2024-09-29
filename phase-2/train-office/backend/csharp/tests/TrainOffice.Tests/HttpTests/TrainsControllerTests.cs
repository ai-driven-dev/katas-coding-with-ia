using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using System.Net;
using System.Net.Http.Json;
using TrainOffice.Core.Api;
using TrainOffice.Features.Trains.UseCases;
using TrainOffice.Infrastructures.DataModels;
using TrainOffice.Infrastructures.PostgreSQL.Context;

namespace TrainOffice.Tests.HttpTests;

public class TrainsControllerWebFactory : BaseWebApplicationFactory<Program>
{
    protected override void SeedData(ApplicationDbContext context)
    {
        base.SeedData(context);

        var trains = new List<Train>
        {
            new Train
            {
                Name = "Train 1",
                DepartureStation = "Station 1",
                ArrivalStation = "Station 2",
                DepartureTime = DateTime.Now,
                ArrivalTime = DateTime.Now.AddHours(1),
                Coaches = new List<Coach>
                {
                    new Coach
                    {
                        Name = "Coach 1",
                        Type = CoachType.FirstClass,
                        Seats = new List<Seat>
                        {
                            new Seat
                            {
                                SeatNumber = "1A",
                                IsOccupied = false
                            },
                            new Seat
                            {
                                SeatNumber = "1B",
                                IsOccupied = false
                            }
                        }
                    }
                }
            }
        };

        context.Trains.AddRange(trains);
        context.SaveChanges();
    }
}

public class TrainsControllerTests : IClassFixture<TrainsControllerWebFactory>
{
    private readonly TrainsControllerWebFactory factory;
    private readonly LinkGenerator linkGenerator;

    public TrainsControllerTests(TrainsControllerWebFactory factory)
    {
        this.factory = factory;
        this.linkGenerator = factory.Services.GetRequiredService<LinkGenerator>();
    }

    [Fact]
    public async Task GetTrains_ReturnsOkResponseWithTrainsList()
    {
        // Arrange
        var client = factory.CreateClient();
        var url = linkGenerator.GetPathByName("GetTrains", values: null);

        // Act
        var response = await client.GetAsync(url);

        // Assert
        response.EnsureSuccessStatusCode(); // Status Code 200-299
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);

        var apiResponse = await response.Content.ReadFromJsonAsync<ApiResponse<IEnumerable<GetTrainsDto>>>();
        Assert.NotNull(apiResponse);
        Assert.NotNull(apiResponse.Data);
        Assert.NotEmpty(apiResponse.Data);
    }
}