import React from 'react';

const Cell = props => {

    return (
        <div className={`cell ${props.cellType === 'clear' ? '' : `${props.cellType} ${props.color}`} ${props.start ? 'start' : ''}`}>
            {' '}
        </div>
    );
};

export default Cell;