import { Grid } from './grid';

export class GameOfLife {
    private grid: Grid;

    constructor(rows: number, cols: number) {
        this.grid = new Grid(rows, cols);
    }

    public start(): void {
        this.grid.print();
        // Logic for game of life will go here
    }
}
