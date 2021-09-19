import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function ScoreBoard(props) {
    const game = useSelector((state => state.game));
    const { score } = game;

    return (
        <div className="score-board">

            <div className="score">
                SCORE
                <div>{ score }</div>
            </div>

            <div className="score">
                LEVEL
                <div> 1 </div>
            </div>
        </div>
    )
}