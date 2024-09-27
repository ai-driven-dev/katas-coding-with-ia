defmodule Main do
  use Application

  def start(_type, _args) do
    GameOfLife.start(5, 5)
    :ok
  end
end
