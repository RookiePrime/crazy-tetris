import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TOPSCORES } from '../../utils/queries';

const Highscores = () => {
    const { loading, data } = useQuery(QUERY_TOPSCORES);
    const scoresList = data?.topscores || [];

    return (
        <div className='container mx-auto flex h-screen justify-center items-center'>
            <div className='modal'>
                <div>
                    <h3 className='text-center m-8 text-4xl'>HIGH SCORES</h3>
                </div>
                {loading ?
                    <h3>Loading...</h3> :
                    scoresList.map((score, i) => (
                        <div className='flex justify-between mx-10 border-b-2 border-black border-dashed' key={i}>
                            <div className='px-4 my-3'>
                                <p className='p-body'>{score.username}</p>
                            </div>
                            <div className='px-4 my-3'>
                                <p className='p-body'>{score.highscore}</p>
                            </div>
                        </div>
                    ))   
                }
            </div>
        </div>
    );
};

export default Highscores;