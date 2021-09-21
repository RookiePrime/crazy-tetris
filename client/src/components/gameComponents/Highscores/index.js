import React from 'react'
import { faUser } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Highscore(props) {

  return (
    <div className={`pause-popup`}>
 
      <p>
        <FontAwesomeIcon icon={faUser} />
        USER
      </p>

    </div>
  )
}