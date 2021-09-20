import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo ,faCaretRight, faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
//useDispatch hook to call actions
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../actions";

export default function Controls(props) {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)


    return (
        <div className="controls">
            {/* Left */}
            <button 
                className="control-button" 
                disabled={!isRunning || gameOver}
                onClick={(e) => {
                    if (!isRunning || gameOver) { return }
                    dispatch(moveLeft())
                }}
            > <FontAwesomeIcon icon={faCaretLeft} size='4x'/> </button>

            {/* Right */}
            <button 
                className="control-button" 
                disabled={!isRunning || gameOver}
                onClick={(e) => {
                    if (!isRunning || gameOver) { return }
                    dispatch(moveRight())
            }}> <FontAwesomeIcon icon={faCaretRight}/> </button>

            {/* Down */}
            <button className="control-button" 
                disabled={!isRunning || gameOver}
                
                    onClick={(e) => {
                if (!isRunning || gameOver) { return }
                dispatch(moveDown())
            }}> <FontAwesomeIcon icon={faCaretDown}/> </button>

            {/* Rotate */}
            <button 
                className="control-button" 
                disabled={!isRunning || gameOver}
                onClick={(e) => {
                    if (!isRunning || gameOver) { return }
                    dispatch(rotate())
            }}> <FontAwesomeIcon icon={faUndo}/> </button>
            
        </div>
    )
}