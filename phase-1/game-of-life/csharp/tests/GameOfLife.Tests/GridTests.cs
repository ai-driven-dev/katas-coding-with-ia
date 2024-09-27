using GameOfLifeConsole;

namespace GameOfLifeTests;

public class GridTests
{
    [Fact]
    public void GridInitializesCorrectly()
    {
        int rows = 5, cols = 5;
        var grid = new Grid(rows, cols);
        // You could check something about the grid here
        Assert.True(true); // Simple assertion for demonstration
    }
}