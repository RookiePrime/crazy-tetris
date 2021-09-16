import React from 'react';
import tetrominos from '../../utils/tetrominos';
import { generateBoard } from '../../utils/gameHelpers';

const Controls = ({ board, setBoard }) => {


    function clearBoard() {
        setBoard(generateBoard);
    };

    function createTetromino() {
        console.log('Tetromino created!');
        const startX = 0;
        const startY = 6;

        const randoTetro = Math.floor(Math.random() * tetrominos.length);

        const chosenTetromino = tetrominos[randoTetro];
        const { design, width, color } = chosenTetromino;
        const updatedBoard = generateBoard();

        for (let i = 0; i < design.length; i++) {
            for (let j = 0; j < design[i].length; j++) {
                if (design[i][j] !== 'clear') {
                    console.log(`${design[i][j]}block`);
                    updatedBoard[startX + j][startY - (Math.floor(width / 2))  + i].contents = `${design[i][j]}block ${color}`;
                }
            }
        }

        setBoard(updatedBoard);
    };

    function rotateTetromino() {
        console.log('Tetromino rotated!');
    };

    return (
        <div>
            <button id='create' onClick={createTetromino}>create</button>
            <button id='rotate' onClick={rotateTetromino}>rotate</button>
            <button id='clear' onClick={clearBoard}>clear</button>
        </div>
    );
};

export default Controls;