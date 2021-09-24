import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_HIGHSCORES } from '../../utils/queries'

function Profile() {
    
    const { loading, data } = useQuery(QUERY_HIGHSCORES, {
        variables: { username: Auth.getProfile().data.username }
    });
    const scoresList = data?.highscores || [];
    const filterList = scoresList.filter((score, i) => i < 5 && score.username === Auth.getProfile().data.username);

    return(
    <div className="container mx-auto flex w-full h-screen items-center justify-center">
        <div className="frame">
            <header className="h-24 p-8 pl-10 relative">
                    <img src={require(`../../assets/images/Logo.png`).default } className="h-12 float-left rounded-br-3xl  profile-logo" alt="crazy teronimo logo"/>
                    <h1 className="flex flex-wrap justify-center text-5xl profile-font">PROFILE</h1>
            </header>
            <section className="lg:w-2/3 md:w-2/3 w-5/6 mx-auto flex">
                <div className="w-full">
                    <div className="input-wrapper relative pb-1 pt-1">
                        <div id="contact-form" >
                            <FontAwesomeIcon className="user-icon lg:fa-3x md:fa-3x fa-2x" icon={faUser}/>
                            <div className="rounded-2xl lg:text-3xl md:text-3xl text-xl font-bold text-black-500 w-full p-4 text-center  profile-input">Welcome, {Auth.loggedIn()? Auth.getProfile().data.username : "Anonymous"}!</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="profile-body lg:w-2/3 md:w-2/3 w-5/6 mx-auto flex flex-wrap">    
                <div className="max-w-full flex flex-wrap">
                    <div className="w-1/2 flex flex-grow flex-wrap">
                        <table className="text-2xl table-auto w-full max-h-full  px-10 mt-4 mb-4 profile-highscore">
                            <thead className="text-center" >
                                <tr>
                                    <th className="lg:text-2xl md:text-2xl text-xl p-5 pb-4" colSpan="5" scope="colgroup">
                                        YOUR HIGHSCORES
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="p-12">
                                {loading ?
                                    <tr><td><h3>Loading...</h3></td></tr> : filterList.length > 0 ?
                                    filterList.map((score, i) => (
                                    <tr key={i}>
                                        <td className="col1">0{i+1}</td>
                                        <td className="col2"><span className="text-white">{score.highscore}</span></td>
                                    </tr>
                                    ))
                                    : <h1 className='lg:text-2xl md:text-2xl text-xl px-5'>Play game to have Highscore</h1>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="w-1/2 h-full flex flex-wrap min-w-0 profile-right">
                        <div className="profile-right container flex flex-wrap  ml-6 pt-4">
                            <div className="flex flex-wrap ">
                                <div className="total-lines w-full items-center px-8 py-3 pt-4 text-center mb-2">
                                    <h2 className="text-5xl font-bold">{filterList.length > 0 ? filterList[0].highscore/40 : 0}</h2>
                                    <h4 className="lg:text-2xl md:text-2xl text-xl">is the highest lines you cleared!</h4>
                                </div>
                            <div className="trophies w-full px-5 py-2 h-1/5 mb-1">
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faMedal} className="trophy-logo"/>
                            </div>
                            <Link to={'/game'} className="w-full mb-1">
                                <button type="button" className="btn-start-game w-full  text-center lg:text-2xl md:text-2xl text-xl rounded-md   w-full px-2 py-2  font-bold opacity-100 hover">START GAME</button>
                            </Link>
                            <div className="w-full">
                                <button type="button" className="btn-sign-out w-full lg:text-2xl md:text-2xl text-xl rounded-md px-2 py-2 font-bold opacity-100 hover"
                                onClick= {Auth.logout} >SIGN OUT</button>
                            </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Profile;
