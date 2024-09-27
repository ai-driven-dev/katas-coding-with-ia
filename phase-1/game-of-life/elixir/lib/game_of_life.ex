defmodule GameOfLife do
  @moduledoc """
  Module to start and run the Game of Life.
  """

  def start(rows, cols) do
    grid = GameOfLife.Grid.new(rows, cols)
    GameOfLife.Grid.print(grid)
    # Add the logic for the Game of Life rules here
  end
end
