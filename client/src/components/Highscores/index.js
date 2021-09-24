import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { QUERY_TOPSCORES } from '../../utils/queries';

const Highscores = () => {
    const { loading, data } = useQuery(QUERY_TOPSCORES);
    const scoresList = data?.topscores || [];

    // loading? console.log("loading") : console.log(scoresList);
    return (
        <div className="modal-wrap rounded flex flex-col items-center text-center justify-center gap-6 md:p-20 p-6 bg-yellow-400 relative">

            <a href='./' className="text-8xl">
                <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
            </a>

            <h1 className="lg:text-4xl md:text-4xl text-2xl font-normal mb-5">HIGH SCORES</h1>

                {loading ?
                    <h3>Loading...</h3> : scoresList.length > 0?
                    scoresList.map((score, i) => (
                        <div className='flex justify-between mx-10 border-b-2 border-black border-dashed' key={i}>
                            <div className='px-4 my-3'>
                                <p className='p-body font-normal'>{score.username}</p>
                            </div>
                            <div className='px-4 my-3'>
                                <p className='p-body font-normal'>{score.highscore}</p>
                            </div>
                        </div> )) 
                    : <h1 className='px-4'>Play game to have Highscore</h1>
                }

        </div>
    );
};

export default Highscores;