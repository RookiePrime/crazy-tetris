import React from 'react';
import Cell from '../Cell';

const Board = ({ board }) => {
    
    return (
        <div className='board'>
            {
                board.map((row, j) => {
                    return row.map((cell, i) => {
                        return <Cell 
                                    key={`row-${j}/cell-${i}`} 
                                    cellType={cell.contents}
                                    color={cell.color}
                                />;
                    })
                })
            }
        </div>
    )
};

export default Board;