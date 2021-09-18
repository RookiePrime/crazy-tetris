import React from 'react';

const Cell = ({ cellType, color }) => {

    return (
        <div 
            className={`cell ${cellType === 'clear' ? '' : `${cellType} ${color}`}`}
        ></div>
    );
};

export default Cell;