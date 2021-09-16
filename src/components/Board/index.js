import React from 'react';
import Cell from '../Cell';

const Board = ({ board }) => {
    
    return (
        <div className='board'>
            {
                board.map(column => {
                    return column.map((cell, i) => {
                        return <Cell 
                                    key={i} 
                                    start={cell.spawn} 
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