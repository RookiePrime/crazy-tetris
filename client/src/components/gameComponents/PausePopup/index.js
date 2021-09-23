import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { resume, restart } from '../../../actions';
import { faUser } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Auth from '../../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_HIGHSCORE } from '../../../utils/mutations';
import { QUERY_HIGHSCORES } from '../../../utils/queries';

export default function PausePopup(props) {
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);
  const dispatch = useDispatch();
  const [addHighscore] = useMutation(ADD_HIGHSCORE, {
    update(cache, { data: highscore }) {
      try {
        const { highscores } = cache.readQuery({ query: QUERY_HIGHSCORES, variables: { username: Auth.getProfile().data.username } });
        // Why here and not down there? See the next line. This is more for readability than functionality, I know I could squeeze this down.
        const newScores = [ { ...highscore.addHighscore, username: Auth.getProfile().data.username }, ...highscores];
        // It's a sort! I'm sorting the values. While the database calls themselves sort it, the cache doesn't seem to do that, at least not the same way. So I'm manually sorting before caching.
        newScores.sort((a, b) => b.highscore - a.highscore);

        cache.writeQuery({
          query: QUERY_HIGHSCORES,
          data: { highscores: newScores },
          variables: { username: Auth.getProfile().data.username }
        });
      } catch (e) {
        console.error(e);
      }
    }
  });

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
        variables: { highscore: score, username: Auth.getProfile().data.username },
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
        }}>{ gameOver ? Auth.loggedIn()? 'SAVE HIGHSCORE' : "SIGNUP" : 'QUIT GAME' }</button>
      </Link>

      <p className="gameP">
        <FontAwesomeIcon icon={faUser} />
        {Auth.loggedIn()? Auth.getProfile().data.username : "Anonymous"}
      </p>
    </div>
  )
}