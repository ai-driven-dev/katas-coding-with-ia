<?php

namespace GameOfLife;

class Game
{
    private $grid;

    public function __construct($rows, $cols)
    {
        $this->grid = array_fill(0, $rows, array_fill(0, $cols, false));
    }

    public function setCell($row, $col)
    {
        $this->grid[$row][$col] = true;
    }

    public function generate()
    {
        //todo: add logic to generate the next generation + unit tests
    }

    public function print()
    {
        foreach ($this->grid as $row) {
            foreach ($row as $cell) {
                echo $cell ? "X " : ". ";
            }
            echo PHP_EOL;
        }
    }
}
