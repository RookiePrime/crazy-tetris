import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faTimes } from '@fortawesome/free-solid-svg-icons';

function Settings () {

    return (
        <section className="modal-wrap rounded flex flex-col items-center text-center justify-center gap-6 md:p-20 p-6 bg-yellow-400 relative">
            <a href='./' className="text-8xl">
                <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
            </a>
            <FontAwesomeIcon icon={faHammer} className="text-8xl hammer"/>
            <h1 className="text-4xl font-normal mb-5 construction">Under Construction...</h1>
        </section>
    )
}

export default Settings;