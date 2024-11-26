namespace TrainOffice.Infrastructures.DataModels;

public class Train
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string DepartureStation { get; set; }
    public string ArrivalStation { get; set; }
    public DateTime DepartureTime { get; set; }
    public DateTime ArrivalTime { get; set; }
    public List<Coach> Coaches { get; set; }
}

public class Coach
{
    public int Id { get; set; }
    public string Name { get; set; }
    public CoachType Type { get; set; }
    public int TrainId { get; set; }
    public Train Train { get; set; }
    public List<Seat> Seats { get; set; }
}

public enum CoachType
{
    FirstClass,
    SecondClass,
    DiningCar,
}

public class Seat
{
    public int Id { get; set; }
    public string SeatNumber { get; set; }
    public bool IsOccupied { get; set; }
    public int CoachId { get; set; }
    public Coach Coach { get; set; }
}

public class Speed
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Value { get; set; }
    public List<Train> Trains { get; set; }
}

public class Weather
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Value { get; set; }
    public List<Train> Trains { get; set; }
}
