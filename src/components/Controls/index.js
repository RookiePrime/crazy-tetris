import React from 'react';
import tetrominos from '../../utils/tetrominos';
import { generateBoard } from '../../utils/gameHelpers';

const Controls = ({ board, setBoard, piece, setPiece }) => {


    function clearBoard() {
        setBoard(generateBoard);
        setPiece({});
    };

    function createTetromino() {
        console.log('Tetromino created!');
        const startY = 0;
        const startX = 6;

        const randoTetro = Math.floor(Math.random() * tetrominos.length);

        const chosenTetromino = tetrominos[randoTetro];
        const { design, width, color } = chosenTetromino;
        const updatedBoard = generateBoard();

        const position = [];

        for (let i = 0; i < design.length; i++) {
            for (let j = 0; j < design[i].length; j++) {
                if (design[i][j] !== 'clear') {
                    const y = startY + j;
                    const x = startX - (Math.floor(width / 2))  + i;
                    const pos = [y, x];
                    updatedBoard[startY + j][startX - (Math.floor(width / 2))  + i].contents = `${design[i][j]}block ${color}`;

                    position.push(pos);
                }
            }
        }
        setPiece({
            ...chosenTetromino,
            position
        });
        setBoard(updatedBoard);
    };

    function rotateTetromino() {
        console.log('Tetromino rotated!');
    };

    function startGame() {
        console.log('Start!');
    };

    function moveDown() {
        console.log('Down!');

        const newPos = [...(piece.position.map(pos => {
            pos[0]++;
            return pos;
        }))];
        const updatedBoard = [...board];
        console.log(newPos);
        for (let i = 0; i < newPos.length; i++) {
            console.log(piece.position[i][0], piece.position[i][0]);
            updatedBoard[piece.position[i][0]][piece.position[i][0]].contents = 'clear';
            updatedBoard[newPos[i][0]][newPos[i][1]].contents = `${piece.name}block ${piece.color}`;
        }
        setPiece({
            ...piece,
            position: newPos
        });
        setBoard(updatedBoard);
    };

    return (
        <div>
            <button id='create' onClick={createTetromino}>create</button>
            <button id='rotate' onClick={rotateTetromino}>rotate</button>
            <button id='clear' onClick={clearBoard}>clear</button>
            <button id='start' onClick={startGame}>start</button>
            <button id='down' onClick={moveDown}>down</button>
        </div>
    );
};

export default Controls;