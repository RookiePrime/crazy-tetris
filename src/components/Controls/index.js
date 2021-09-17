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
        const updatedBoard = [...board];

        const position = [];

        // Loops through the array and applies styling to the correct cells to create a tetris block in position
        for (let i = 0; i < design.length; i++) {
            for (let j = 0; j < design[i].length; j++) {
                if (design[i][j] !== 'clear') {
                    const y = startY + j;
                    const x = startX - (Math.floor(width / 2))  + i;
                    const pos = [y, x];
                    updatedBoard[startY + j][startX - (Math.floor(width / 2))  + i].contents = `${design[i][j]}block ${color}`;
                    updatedBoard[startY + j][startX - (Math.floor(width / 2))  + i].player = true;

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

    function removeOldPlayer(updatedBoard, i) {
        const oldSquare = [piece.position[i][0], piece.position[i][1]];
        updatedBoard[oldSquare[0]][oldSquare[1]].player = false;
    };

    function eraseBlock(updatedBoard) {
        // Takes the old position and removes the styling from the old squares one by one
        for (let i = 0; i < piece.position.length; i++) {
            const oldSquare = [piece.position[i][0], piece.position[i][1]];
            updatedBoard[oldSquare[0]][oldSquare[1]].contents = 'clear';
            removeOldPlayer(updatedBoard, i);
        }
    };

    function drawBlock(updatedBoard, newPos) {
        // Takes the new position and applies the styling to the new squares one by one
        for (let i = 0; i < newPos.length; i++) {
            const newSquare = [newPos[i][0], newPos[i][1]];
            
            updatedBoard[newSquare[0]][newSquare[1]].contents = `${piece.name}block ${piece.color}`;
            updatedBoard[newSquare[0]][newSquare[1]].player = true;
        }
    };

    function canGoThere(newPos) {
        // If the new position isn't below or above the board
        if (newPos.find(pos => pos[0] > 19 || pos[0] < 0)) {
            return false
        }
        // If the new position isn't too far left or right
        if (newPos.find(pos => pos[1] < 0 || pos[1] > 11)) {
            return false;
        }

        for (let i = 0; i < newPos.length; i++) {
            const pos = newPos[i];
            const square = board[pos[0]][pos[1]];
            // If the next square isn't the player's own square and if it's not a clear square, it's an obstacle!
            if (!square.player && square.contents !== 'clear') {
                return false;
            }
        }

        
        // If none of the above apply, it's good!
        return true;
    };

    function moveDown() {
        console.log('Down!');

        const newPos = piece.position.map(pos => [pos[0] + 1, pos[1]]);
        const updatedBoard = [...board];



        if (canGoThere(newPos)) {
            eraseBlock(updatedBoard);
            drawBlock(updatedBoard, newPos);
            setPiece({
                ...piece,
                position: newPos
            });
            setBoard(updatedBoard);
        } else {
            for (let i = 0; i < newPos.length; i++) {
                removeOldPlayer(updatedBoard, i);
            }
            setBoard(updatedBoard);
            createTetromino();
        }
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