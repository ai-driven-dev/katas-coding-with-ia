using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrainOffice.Migrations
{
    /// <inheritdoc />
    public partial class SeedFakeTrainsData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Add fake data of trains
            migrationBuilder.InsertData(
                table: "Trains",
                columns: new[] { "Name", "DepartureStation", "ArrivalStation", "DepartureTime", "ArrivalTime" },
                values: new object[,]
                {
                    { "Train 1", "Station 1", "Station 2", DateTime.UtcNow, DateTime.UtcNow.AddHours(1) },
                    { "Train 2", "Station 2", "Station 3", DateTime.UtcNow.AddHours(1), DateTime.UtcNow.AddHours(2) }
                }
            );

            // Add fake data of coaches
            migrationBuilder.InsertData(
                table: "Coach",
                columns: new[] { "Name", "Type", "TrainId" },
                values: new object[,]
                {
                    { "Coach 1", 1, 1 },
                    { "Coach 2", 2, 1 },
                    { "Coach 3", 1, 2 }
                }
            );

            // Add fake data of seats
            migrationBuilder.InsertData(
                table: "Seat",
                columns: new[] { "SeatNumber", "IsOccupied", "CoachId" },
                values: new object[,]
                {
                    { "1A", false, 1 },
                    { "1B", true, 1 },
                    { "2A", false, 2 },
                    { "2B", true, 2 },
                    { "3A", false, 3 },
                    { "3B", true, 3 }
                }
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Seat",
                keyColumn: "Id",
                keyValues: new object[] { 1, 2, 3, 4, 5, 6 }
            );

            migrationBuilder.DeleteData(
                table: "Coach",
                keyColumn: "Id",
                keyValues: new object[] { 1, 2, 3 }
            );

            migrationBuilder.DeleteData(
                table: "Trains",
                keyColumn: "Id",
                keyValues: new object[] { 1, 2 }
            );
        }
    }
}