using Microsoft.EntityFrameworkCore;
using TrainOffice.Infrastructures.DataModels;
using TrainOffice.Infrastructures.PostgreSQL.Context;

namespace TrainOffice.Features.Trains.UseCases;

public interface IGetTrainsQuery
{
    Task<List<GetTrainsDto>> Execute();
}

public class GetTrains : IGetTrainsQuery
{
    private readonly ApplicationDbContext _context;

    public GetTrains(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<GetTrainsDto>> Execute()
    {
        return await _context.Trains
            .Include(t => t.Coaches)
            .ThenInclude(c => c.Seats)
            .Select(t => new GetTrainsDto
            {
                Id = t.Id,
                Name = t.Name,
                DepartureStation = t.DepartureStation,
                ArrivalStation = t.ArrivalStation,
                DepartureTime = t.DepartureTime,
                ArrivalTime = t.ArrivalTime,
                Coaches = t.Coaches.Select(c => new GetTrainsDto.CoachDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Type = c.Type,
                    Seats = c.Seats.Select(s => new GetTrainsDto.SeatDto
                    {
                        Id = s.Id,
                        SeatNumber = s.SeatNumber,
                        IsOccupied = s.IsOccupied
                    }).ToList()
                }).ToList()
            })
            .ToListAsync();
    }
}

public class GetTrainsDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string DepartureStation { get; set; }
    public string ArrivalStation { get; set; }
    public DateTime DepartureTime { get; set; }
    public DateTime ArrivalTime { get; set; }
    public List<CoachDto> Coaches { get; set; }

    public class CoachDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public CoachType Type { get; set; }
        public List<SeatDto> Seats { get; set; }
    }

    public class SeatDto
    {
        public int Id { get; set; }
        public string SeatNumber { get; set; }
        public bool IsOccupied { get; set; }
    }
}