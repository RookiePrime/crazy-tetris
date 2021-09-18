import React from 'react';
import tetrominos from '../../utils/tetrominos';
import { generateBoard } from '../../utils/gameHelpers';

const Controls = ({ board, setBoard, piece, setPiece }) => {


    function clearBoard() {
        setBoard(generateBoard);
        setPiece({});
    };

    function drawTetromino(tetromino = piece, updatedBoard) {
        const {design, rotation, color, position} = tetromino;
        for (let i = 0; i < design[rotation].length; i++) {
            for (let j = 0; j < design[rotation][i].length; j++) {
                if (design[rotation][i][j] !== 'clear') {
                    const y = position[0] + j;
                    const x = position[1] + 2 - i;
                    updatedBoard[y][x].contents = `${design[rotation][i][j]}block ${color}`;
                    updatedBoard[y][x].player = true;

                    // position.push(pos);
                }
            }
        }
    }

    function createTetromino() {
        console.log('Tetromino created!');
        const startY = 0;
        const startX = 6;

        // const randoTetro = Math.floor(Math.random() * tetrominos.length);

        const chosenTetromino = tetrominos[0];
        chosenTetromino.rotation = 0;
        chosenTetromino.position = [startY, startX];
        const updatedBoard = [...board];

        // Loops through the array and applies styling to the correct cells to create a tetris block in position
        drawTetromino(chosenTetromino, updatedBoard);

        setPiece({ ...chosenTetromino });
        setBoard(updatedBoard);
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
        const pieceShape = piece.design[piece.rotation];
        for (let i = 0; i < pieceShape.length; i++) {
            const oldSquare = [pieceShape[i][0], pieceShape[i][1]];
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
        if (newPos[0] > board.length - 1 || newPos[0] < 0) {
            return false
        }
        // If the new position isn't too far left or right
        if (newPos[1] < 0 || newPos[1] > board[0].length - 1) {
            return false;
        }

        for (let i = 0; i < piece.design[piece.rotation].length; i++) {
            for (let j = 0; j < piece.design[piece.rotation][i].length; j++) {
                // const square = board[];
            }
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

        // const newPos = piece.position.map(pos => [pos[0] + 1, pos[1]]);
        const newPos = [piece.position[0] + 1, piece.position[1]];
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

    function rotateBlock() {
        console.log('Rotate!');
        const { design, rotation } = piece;
        const updatedBoard = [...board];
        console.log(design[rotation]);

        piece.position.forEach(square => {
            console.log(square);
        })
        eraseBlock(updatedBoard);
        setBoard(updatedBoard);
    };

    return (
        <div>
            <button id='create' onClick={createTetromino}>create</button>
            <button id='clear' onClick={clearBoard}>clear</button>
            <button id='start' onClick={startGame}>start</button>
            <button id='down' onClick={moveDown}>down</button>
            <button id='rotate' onClick={rotateBlock}>rotate</button>
        </div>
    );
};

export default Controls;