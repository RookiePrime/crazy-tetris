import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo,faChevronDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Controls(props) {
    return (
        <div className="controls">
            {/* Left */}
            <button className="control-button" onClick={(e) => {

            }}> <FontAwesomeIcon icon={faChevronLeft}/> </button>

            {/* Right */}
            <button className="control-button" onClick={(e) => {

            }}> <FontAwesomeIcon icon={faChevronRight}/> </button>

            {/* Down */}
            <button className="control-button" onClick={(e) => {

            }}> <FontAwesomeIcon icon={faChevronDown}/> </button>

            {/* Rotate */}
            <button className="control-button" onClick={(e) => {

            }}> <FontAwesomeIcon icon={faUndo}/> </button>
            
        </div>
    )
}