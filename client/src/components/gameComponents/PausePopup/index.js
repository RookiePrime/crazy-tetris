import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { resume, restart } from '../../../actions';
import { faUser } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Auth from '../../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_HIGHSCORE } from '../../../utils/mutations';

export default function PausePopup(props) {
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);
  const dispatch = useDispatch();
  const [addHighscore] = useMutation(ADD_HIGHSCORE);

  const game = useSelector((state => state.game));
  const { score } = game;

  let message = '';
  let isHidden = 'hidden';

  if(gameOver) {
    message = 'GAME OVER';
    isHidden = '';
  } else if (!isRunning) {
    message = 'GAME PAUSED';
    isHidden = '';
  }

  const hover = "transform transition duration-300 ease-in-out hover:scale-110";

  const saveHighscore = async ()=>{
    try {
      await addHighscore({
        variables: { highscore: score},
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className={`pause-popup ${isHidden} modal-wrap rounded flex flex-col items-center text-center justify-center gap-6 md:p-20 p-6 bg-yellow-400 relative`}>
      <h1 className="text-4xl font-normal mb-5 gameH1"> {message} </h1>

      <button className={`popup-button btn-action ${hover}`} onClick={(e) => {
        if(gameOver) { dispatch(restart()) }
        if(!isRunning) { dispatch(resume()) }
      }}>
        { gameOver ? 'RESTART' : 'RESUME' }
      </button>

      <Link to='/'>
        <button className={`popup-button btn-action ${hover}`} onClick={(e) => {
          e.target.name === "QUIT GAME" ? dispatch(restart()) : saveHighscore();
        }}>{ gameOver ? 'SAVE HIGHSCORE' : 'QUIT GAME' }</button>
      </Link>

      <p className="gameP">
        <FontAwesomeIcon icon={faUser} />
        {Auth.getProfile().data.username}
      </p>
    </div>
  )
}