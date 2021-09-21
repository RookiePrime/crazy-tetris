import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo ,faCaretRight, faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
//useDispatch hook to call actions
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../../../actions";

export default function Controls(props) {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)

    // Allows for control of the game via the keyboard. I'd like to move the meat of this over to the gameLogic file, believe me, but I got things to do and this works and things are mostly in an organized way.
    useEffect(() => {
        if (!isRunning) return;

        const keyboardPress = e => {
            // A fake click! It's a real click, but performed by us, not the user.
            const clickEvent = new MouseEvent('click', {
              "view": window,
              "bubbles": true,
              "cancelable": false
            });
            // The meat of the matter. The document itself listens for keyboard presses. It performs a switch-case based on which key is pressed; if the key that's pressed isn't one of the cases, then it doesn't do anything.

            const keyPressed = e.key;
            console.log(keyPressed)
            switch (keyPressed) {
                case 'ArrowUp' :
                    document.querySelector('#rotate-btn').dispatchEvent(clickEvent);
                    break;
                case 'ArrowRight':
                    document.querySelector('#right-btn').dispatchEvent(clickEvent);
                    break;
                case 'ArrowLeft':
                    document.querySelector('#left-btn').dispatchEvent(clickEvent);
                    break;
                case 'ArrowDown':
                    document.querySelector('#down-btn').dispatchEvent(clickEvent);
                    break;
                case 'Escape':
                    document.querySelector('#pause-btn').dispatchEvent(clickEvent);
                    break;
                default :
                    break;
            };
        };

        document.addEventListener('keydown', keyboardPress);
        return () => document.removeEventListener('keydown', keyboardPress);
    }, [isRunning]);

    return (
        <div className="controls">
            {/* Left */}
            <button 
                id='left-btn'
                className="control-button" 
                disabled={!isRunning || gameOver}
                onClick={(e) => {
                    if (!isRunning || gameOver) { return }
                    dispatch(moveLeft())
                }}
            > <FontAwesomeIcon icon={faCaretLeft} size='4x'/> </button>

            {/* Right */}
            <button 
                id='right-btn'
                className="control-button" 
                disabled={!isRunning || gameOver}
                onClick={(e) => {
                    if (!isRunning || gameOver) { return }
                    dispatch(moveRight())
            }}> <FontAwesomeIcon icon={faCaretRight}/> </button>

            {/* Down */}
            <button 
                id='down-btn' 
                className="control-button" 
                disabled={!isRunning || gameOver}
                
                    onClick={(e) => {
                if (!isRunning || gameOver) { return }
                dispatch(moveDown())
            }}> <FontAwesomeIcon icon={faCaretDown}/> </button>

            {/* Rotate */}
            <button 
                id='rotate-btn'
                className="control-button" 
                disabled={!isRunning || gameOver}
                onClick={(e) => {
                    if (!isRunning || gameOver) { return }
                    dispatch(rotate())
            }}> <FontAwesomeIcon icon={faUndo}/> </button>
        </div>
    )
}