import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resume, restart } from '../actions';
import { faUser } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PausePopup(props) {
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);
  const dispatch = useDispatch();

  let message = '';
  let isHidden = 'hidden';

  if(gameOver) {
    message = 'GAME OVER';
    isHidden = '';
  } else if (!isRunning) {
    message = 'GAME PAUSED';
    isHidden = '';
  }

  return (
    <div className={`pause-popup ${isHidden}`}>
      <h1> {message} </h1>

      <button className="popup-button" onClick={(e) => {
        if(gameOver) { dispatch(restart()) }
        if(!isRunning) { dispatch(resume()) }
      }}>
        { gameOver ? 'RESTART' : 'RESUME' }
      </button>

      <button className="popup-button" onClick={(e) => {
        //return home
      }}>QUIT GAME</button>

      <p>
        <FontAwesomeIcon icon={faUser} />
        USER
      </p>

    </div>
  )
}