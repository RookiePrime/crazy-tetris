import React from 'react'
import { faUser } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Auth from '../../../utils/auth';

export default function Highscore(props) {

  return (
    <div className={`pause-popup`}>
 
      <p>
        <FontAwesomeIcon icon={faUser} />
        {Auth.loggedIn()? Auth.getProfile().data.username : "Anonymous"}
      </p>

    </div>
  )
}