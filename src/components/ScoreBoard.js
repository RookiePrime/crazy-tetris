import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <div>Score:{ props.score }</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
            }}> 
                <FontAwesomeIcon icon={faPlay}/>
                <FontAwesomeIcon icon={faPause}/> 
            </button>
            <button className="score-board-button" onClick={(e) => {
            }}> Restart </button>
        </div>
    )
}