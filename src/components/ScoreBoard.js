import React from 'react'
import { useSelector } from 'react-redux';

export default function ScoreBoard(props) {
    const game = useSelector((state => state.game));
    const { score, level } = game;

    return (
        <div className="score-board">

            <div className="score">
                SCORE
                <div>{ score }</div>
            </div>

            <div className="score">
                LEVEL
                <div> { level } </div>
            </div>
        </div>
    )
}