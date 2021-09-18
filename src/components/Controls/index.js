import React from 'react';
import tetrominos from '../../utils/tetrominos';
import { generateBoard } from '../../utils/gameHelpers';

const Controls = ({ board, setBoard, piece, setPiece }) => {


    function clearBoard() {
        setBoard(generateBoard);
        setPiece({});
    };

    function drawTetromino(updatedBoard, tetromino = piece, position) {
        const {design, rotation, color } = tetromino;
        const pieceShape = design[rotation]
        for (let i = 0; i < pieceShape.length; i++) {
            for (let j = 0; j < pieceShape[i].length; j++) {
                if (pieceShape[i][j] !== 'clear') {
                    const y = position[0] + j;
                    const x = position[1] + i;
                    updatedBoard[y][x].contents = `${design[rotation][i][j]}block ${color}`;
                    updatedBoard[y][x].player = true;
                }
            }
        }
    };

    function createTetromino() {
        console.log('Tetromino created!');
        const startY = 0;
        const startX = 4;

        // const randoTetro = Math.floor(Math.random() * tetrominos.length);

        const chosenTetromino = tetrominos[0];
        chosenTetromino.rotation = 0;
        const position = [startY, startX];
        const updatedBoard = [...board];

        // Loops through the array and applies styling to the correct cells to create a tetris block in position
        drawTetromino(updatedBoard, chosenTetromino, position);
        setPiece({ ...chosenTetromino, position });

        setBoard(updatedBoard);
    };

    function startGame() {
        console.log('Start!');
    };

    function removeOldPlayer(updatedBoard, i, j) {
        const oldSquare = [piece.position[0] + i, piece.position[1] + j];
        updatedBoard[oldSquare[0]][oldSquare[1]].player = false;
    };

    function eraseBlock(updatedBoard) {
        // Takes the old position and removes the styling from the old squares one by one
        const pieceShape = piece.design[piece.rotation];

        for (let i = 0; i < pieceShape.length; i++) {
            for (let j = 0; j < pieceShape[i].length; j++) {
                const oldSquare = [piece.position[0] + i, piece.position[1] + j];
                updatedBoard[oldSquare[0]][oldSquare[1]].contents = 'clear';
                removeOldPlayer(updatedBoard, i, j);
            }
        }
    };

    function canGoThere(newPos) {
        const pieceShape = piece.design[piece.rotation];

        for (let i = 0; i < pieceShape.length; i++) {
            for (let j = 0; j < pieceShape[i].length; j++) {
                const oldSquare = board[piece.position[0] + i][piece.position[1] + j];
                // We only care about the squares that actually have blockstuff in them, not the blank ones in the template
                if (oldSquare.contents !== 'clear') {
                    // No going out of bounds
                    const y = newPos[0] + i;
                    const x = newPos[1] + j;
                    if (y > board.length - 1 || y < 0) return false;
                    if (x > board[y].length - 1 || x < 0) return false;
                    
                    
                    // If the next square isn't the player's own square and if it's not a clear square, it's an obstacle!
                    const newSquare = board[y][x];
                    if (!newSquare.player && newSquare.contents !== 'clear') {
                        return false;
                    }
                }
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
            drawTetromino(updatedBoard, piece, newPos);
            setPiece({
                ...piece,
                position: newPos
            });
            setBoard(updatedBoard);
        } else {
            const pieceShape = piece.design[piece.rotation];
            for (let i = 0; i < pieceShape.length; i++) {
                for (let j = 0; j < pieceShape[i].length; j++) {
                    removeOldPlayer(updatedBoard, i, j);
                }
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