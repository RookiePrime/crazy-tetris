import React from 'react';
import { useSelector } from 'react-redux';

export default function ScoreBoard(props) {
    const game = useSelector((state => state.game));
    const { score, level } = game;

    return (
        <div className="score-board">

            <div className="score">
                <h3>SCORE</h3>
                <div>
                <h4> 
                    <span className="ghost">000</span>
                    { score } 
                </h4> 
                </div>
            </div>

            <div className="level">
                <h3>LEVEL</h3>
                <div> 
                   <h4> 
                        <span className="ghost">000</span>
                       { level } 
                    </h4>
                </div>
            </div>
        </div>
    )
}