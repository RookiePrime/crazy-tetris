import React from 'react';
import GridSquare from './GridSquare';
import { useSelector } from 'react-redux';
import { shapes } from '../utils';

export default function GridBoard(props) {
    const game = useSelector((state) => state.game);
    const { grid, shape, rotation, x, y } = game;

    const block = shapes[shape][rotation];
    const blockColor = shape

    //map rows
    const gridSquares = grid.map((rowArray, row) => {
        //map columns
        return rowArray.map((square, col) => {
            //find block x and y on the shape grid
            const blockX = col - x;
            const blockY = row - y;
            let color = square;

            //map falling block to grid
            if(blockX >=0 && blockX < block.length && blockY >=0 && blockY < block.length) {
                color = block[blockY][blockX] === 0 ? color : blockColor
            }

            //generate unique key for every block
            const k = row * grid[0].length + col;
            //generate a grid square
            return <GridSquare key={k} color={color}/>
        })
    }) 

    return (
        <div className='grid-board'>
            {gridSquares}
        </div>
    )
}