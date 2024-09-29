using Microsoft.EntityFrameworkCore;
using TrainOffice.Features.Trains.UseCases;
using TrainOffice.Infrastructures.DataModels;
using TrainOffice.Infrastructures.PostgreSQL.Context;

namespace TrainOffice.Tests.IntegrationTests;

public class GetTrainsTests
{
    [Fact]
    public async Task GetTrains_ReturnsListOfTrainsWithCoachesAndSeats()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: "GetTrains_ReturnsListOfTrainsWithCoachesAndSeats")
            .Options;

        using (var context = new ApplicationDbContext(options))
        {
            context.Trains.Add(new Train
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
            });
            context.SaveChanges();
        }

        using (var context = new ApplicationDbContext(options))
        {
            var getTrains = new GetTrains(context);
            var trains = await getTrains.Execute();

            Assert.Equal(1, trains.Count);
            Assert.Equal("Train 1", trains[0].Name);
            Assert.Equal("Station 1", trains[0].DepartureStation);
            Assert.Equal("Station 2", trains[0].ArrivalStation);
            Assert.Equal(1, trains[0].Coaches.Count);
            Assert.Equal("Coach 1", trains[0].Coaches[0].Name);
            Assert.Equal(CoachType.FirstClass, trains[0].Coaches[0].Type);
            Assert.Equal(2, trains[0].Coaches[0].Seats.Count);
            Assert.Equal("1A", trains[0].Coaches[0].Seats[0].SeatNumber);
            Assert.False(trains[0].Coaches[0].Seats[0].IsOccupied);
            Assert.Equal("1B", trains[0].Coaches[0].Seats[1].SeatNumber);
            Assert.False(trains[0].Coaches[0].Seats[1].IsOccupied);
        }
    }
}