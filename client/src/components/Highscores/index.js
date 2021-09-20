import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { GET_HIGHSCORES } from '../../utils/queries';

const Highscores = () => {
    const { loading, data } = useQuery(GET_HIGHSCORES);
    const scoresList = data?.highscores || [];

    const clickHandler = e => {
        console.log('X!');
    };

    return (
        <div className='container mx-auto flex h-screen justify-center items-center'>
            <div className='frame max-h-90 modal'>
                <button className='absolute right-6 top-0 p-4' onClick={clickHandler}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
                <div>
                    <h3 className='text-center m-8 h3-headline'>HIGH SCORES</h3>
                </div>
                {loading ?
                    <h3>Loading...</h3> :
                    scoresList.map((score, i) => (
                        <div className='flex justify-between mx-10 score border-b-2 border-black border-dashed' key={i}>
                            <div className='px-4 my-3'>
                                <h4 className='h4-body'>{score.username}</h4>
                            </div>
                            <div className='px-4 my-3'>
                                <h4 className='h4-body'>{score.highscore}</h4>
                            </div>
                        </div>
                    ))   
                }
            </div>
        </div>
    );
};

export default Highscores;