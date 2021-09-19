import React, {useEffect, useRef} from 'react';
import GridSquare from './GridSquare';
import { useSelector, useDispatch } from 'react-redux';
import { moveDown } from '../actions';
import { shapes } from '../utils';

export default function GridBoard(props) {
    const requestRef = useRef();
    const lastUpdateTimeRef = useRef(0);
    const progressTimeRef = useRef(0);
    const dispatch = useDispatch();

    const game = useSelector((state) => state.game);
    const { grid, shape, rotation, x, y, isRunning, speed } = game;
    const block = shapes[shape][rotation];
    const blockColor = shape

    //get the blocks to move down the screen
    const update = (time) => {
        requestRef.current = requestAnimationFrame(update)
        if (!isRunning) {
            return;
        }
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time;
        }

        const updatedTime = time - lastUpdateTimeRef.current
        progressTimeRef.current += updatedTime

        if(progressTimeRef.current > speed) {
            dispatch(moveDown())
            progressTimeRef.current = 0;
        }
        lastUpdateTimeRef.current = time;
    }
    
    useEffect(() => {
        requestRef.current = requestAnimationFrame(update);
        return () => cancelAnimationFrame(requestRef.current)
    }, [isRunning]);

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
    });

    return (
            <div className='grid-board'>
                {gridSquares}
            </div>
    )
}