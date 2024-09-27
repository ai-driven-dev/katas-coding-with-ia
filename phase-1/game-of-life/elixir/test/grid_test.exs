defmodule GameOfLife.GridTest do
  use ExUnit.Case
  alias GameOfLife.Grid

  @tag :initialization
  test "grid initializes correctly" do
    rows = 5
    cols = 5
    grid = Grid.new(rows, cols)
    assert length(grid.grid) == rows
    assert length(List.first(grid.grid)) == cols
  end
end
