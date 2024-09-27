<?php
require __DIR__ . '/../vendor/autoload.php';

$printer = new GameOfLife\Game(5, 5);
$printer->setCell(1, 1);
$printer->generate();
$printer->print();
