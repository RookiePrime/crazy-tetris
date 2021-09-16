import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo,faChevronDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
//useDispatch hook to call actions
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../actions";

export default function Controls(props) {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.isRunning)

    return (
        <div className="controls">
            {/* Left */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveLeft())
            }}> <FontAwesomeIcon icon={faChevronLeft}/> </button>

            {/* Right */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveRight())
            }}> <FontAwesomeIcon icon={faChevronRight}/> </button>

            {/* Down */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveDown())
            }}> <FontAwesomeIcon icon={faChevronDown}/> </button>

            {/* Rotate */}
            <button className="control-button" onClick={(e) => {
                dispatch(rotate())
            }}> <FontAwesomeIcon icon={faUndo}/> </button>
            
        </div>
    )
}