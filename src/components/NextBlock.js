import React from "react";
import GridSquare from "./GridSquare";

export default function NextBlock(props) {
    const box = [ [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0] ];

    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square}/>
        })
    })

    return (
        <div className="next-block">
            {grid}
        </div>
    )
}