import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { pause, resume, restart } from '../actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSyncAlt } from "@fortawesome/free-solid-svg-icons";


export default function Settings(props) {
    const dispatch = useDispatch();
    const game = useSelector((state => state.game));
    const { isRunning, gameOver } = game;

    return (
        <div className="settings">

            <button className="setting-button" onClick={(e) => {
                if(gameOver) {return}
                if(isRunning) {
                    dispatch(pause());
                } else {
                    dispatch(resume());
                }
            }}> {isRunning ? <FontAwesomeIcon icon={faPause} size='lg'/> : <FontAwesomeIcon icon={faPlay} size='lg'/> }
            </button>

            <button className="setting-button" onClick={(e) => {
                dispatch(restart())
            }}> <FontAwesomeIcon icon={faSyncAlt} size='lg' /> </button>
        </div>
    )
}