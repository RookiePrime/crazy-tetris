import React from 'react';

const Cell = ({ cellType, color, start }) => {

    return (
        <div className={`cell ${cellType === 'clear' ? '' : `${cellType} ${color}`} ${start ? 'start' : ''}`}>
            {' '}
        </div>
    );
};

export default Cell;