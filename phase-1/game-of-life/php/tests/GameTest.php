<?php

require 'vendor/autoload.php';

use PHPUnit\Framework\TestCase;
use GameOfLife\Game;

class GameTest extends TestCase
{
    public function testPrintEmptyGrid()
    {
        $expectedOutput = [
            ". . . . . ",
            ". . . . . ",
            ". . . . . ",
            ". . . . . ",
            ". . . . . "
        ];

        // Capture the output of the function
        ob_start();
        $game = new Game(5, 5);
        $game->print();
        $actualOutput = ob_get_clean();

        $actualOutputLines = explode(PHP_EOL, $actualOutput);

        foreach ($expectedOutput as $index => $expectedLine) {
            $this->assertEquals($expectedLine, $actualOutputLines[$index]);
        }
    }

    public function testPrintGridWithLiveAndDeadCells()
    {
        $expectedOutput = [
            ". . . . . ",
            ". X . . . ",
            ". . X . . ",
            ". . . X . ",
            ". . . . X "
        ];

        // Capture the output of the function
        ob_start();
        $game = new Game(5, 5);
        $game->setCell(1, 1);
        $game->setCell(2, 2);
        $game->setCell(3, 3);
        $game->setCell(4, 4);
        $game->print();
        $actualOutput = ob_get_clean();

        $actualOutputLines = explode(PHP_EOL, $actualOutput);

        foreach ($expectedOutput as $index => $expectedLine) {
            $this->assertEquals($expectedLine, $actualOutputLines[$index]);
        }
    }
}
