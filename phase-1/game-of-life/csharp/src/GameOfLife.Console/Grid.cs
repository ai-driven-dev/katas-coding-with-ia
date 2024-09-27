namespace GameOfLifeConsole;

public class Grid
{
    private readonly int[,] grid;

    public Grid(int rows, int cols)
    {
        grid = new int[rows, cols];
    }

    public void Print()
    {
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                Console.Write(grid[i, j] + " ");
            }
            Console.WriteLine();
        }
    }
}