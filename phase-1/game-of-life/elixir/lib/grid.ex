defmodule GameOfLife.Grid do
  @moduledoc """
  Module to handle the grid for the Game of Life.
  """

  defstruct grid: []

  @doc """
  Initializes a new grid with the given rows and columns.
  """
  def new(rows, cols) do
    %GameOfLife.Grid{
      grid: List.duplicate(List.duplicate(0, cols), rows)
    }
  end

  @doc """
  Prints the current state of the grid.
  """
  def print(%GameOfLife.Grid{grid: grid}) do
    for row <- grid do
      row
      |> Enum.map(&Integer.to_string/1)
      |> Enum.join(" ")
      |> IO.puts()
    end
  end
end
