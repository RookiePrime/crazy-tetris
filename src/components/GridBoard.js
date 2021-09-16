import React from 'react';
import GridSquare from './GridSquare';

export default function GridBoard(props) {
    // create 18x10 grid of grid squares
    const grid = [];

    for (let row = 0; row < 18; row++) {
        grid.push([]);

        for (let col = 0; col < 10; col++) {
            grid[row].push( <GridSquare key={`${col}${row}`} color='1'/> );
        }
    };

    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}