import React from 'react'
import { useSelector } from 'react-redux'

export default function PausePopup(props) {
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);

  let message = '';
  let isHidden = 'hidden';

  if(gameOver) {
    message = 'Game Over';
    isHidden = '';
  } else if (!isRunning) {
    message = 'Pause';
    isHidden = '';
  }

  return (
    <div className={`pause-popup ${isHidden}`}>
      <h1> { message } </h1>
    </div>
  )
}