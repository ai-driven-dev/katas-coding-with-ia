namespace GameOfLifeConsole;

public class GameOfLife
{
    private readonly Grid grid;

    public GameOfLife(int rows, int cols)
    {
        grid = new Grid(rows, cols);
    }

    public void Start()
    {
        grid.Print();
        // Add the logic for the Game of Life rules here
    }
}