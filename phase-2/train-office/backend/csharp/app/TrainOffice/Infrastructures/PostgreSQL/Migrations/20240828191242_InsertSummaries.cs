using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrainOffice.Migrations;

/// <inheritdoc />
public partial class InsertSummaries : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.InsertData(
            table: "Summaries",
            columns: new[] { "Content" },
            values: new object[,]
            {
            { "Mild" },
            { "Hot" },
            { "Cold" },
            { "Warm" },
            { "Freezing" },
            { "Cool" },
            }
        );
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DeleteData(
            table: "Summaries",
            keyColumn: "Content",
            keyValues: new object[] { "Mild", "Hot", "Cold", "Warm", "Freezing", "Cool" }
        );
    }
}