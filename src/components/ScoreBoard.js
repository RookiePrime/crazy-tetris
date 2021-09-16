import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { pause, resume, restart } from '../actions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function ScoreBoard(props) {
    const dispatch = useDispatch();
    const game = useSelector((state => state.game));
    const { score, isRunning, gameOver } = game;

    return (
        <div className="score-board">
            <div>Score:{ score }</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
                if(gameOver) {return}
                if(isRunning) {
                    dispatch(pause());
                } else {
                    dispatch(resume());
                }
            }}> {isRunning ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/> }
            </button>

            <button className="score-board-button" onClick={(e) => {
                dispatch(restart())
            }}> Restart </button>
        </div>
    )
}