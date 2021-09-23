import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_TOPSCORES } from '../../utils/queries'

function Profile() {
    
    const { loading, data } = useQuery(QUERY_TOPSCORES);
    const scoresList = data?.topscores || [];
    const filterList = scoresList.filter(score => score.username === Auth.getProfile().data.username )
    return(
    <div className="container mx-auto flex w-full h-screen items-center justify-center">
        <div className="frame">
            <header className="h-24 p-8 pl-10 relative">
                    <img src={require(`../../assets/images/Logo.png`).default } className="h-12 float-left rounded-br-3xl  profile-logo" alt="crazy teronimo logo"/>
                    <h1 className="flex flex-wrap justify-center text-5xl profile-font">PROFILE</h1>
            </header>
            <section className="w-2/3 mx-auto flex">
                    <div className="w-full">
                        <div className="input-wrapper relative pb-1 pt-1">
                            <div id="contact-form">
                                <FontAwesomeIcon className="user-icon fa-3x" icon={faUser}/>
                                <div value= {Auth.loggedIn()? Auth.getProfile().data.username : "Anonymous"} 
                                name="name" 
                                htmlFor="username" id="username" 
                                className="rounded-2xl text-2xl text-black-500 w-full p-6 text-center  profile-input" 
                                placeholder= {Auth.loggedIn()? Auth.getProfile().data.username : "Anonymous"}></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="profile-body w-2/3 mx-auto flex flex-wrap">    
                    <div className="max-w-full flex flex-wrap">
                        <div className="w-1/2 flex flex-grow flex-wrap ">
                            <table className="text-2xl table-auto w-full max-h-full  px-10 mt-4 mb-4 profile-highscore">
                                <thead className="text-center" >
                                    <tr>
                                        <th className="p-5 pb-4" colSpan="5" scope="colgroup">
                                            YOUR HIGHSCORES
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="p-12">
                                    {loading ?
                                        <h3>Loading...</h3> : filterList.length > 0?
                                        filterList.map((score, i) => (
                                        <>
                                        <tr>
                                            <td className="col1">0{i+1}</td>
                                            <td className="col2"><span className="text-white">{score.highscore}</span></td>
                                        </tr>
                                        </>
                                        ))
                                        : <h1>Play game to have Highscore</h1>
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="w-1/2 h-full flex flex-wrap min-w-0 profile-right">
                            <div className="profile-right container flex flex-wrap  ml-6 pt-4">
                                <div className="flex flex-wrap ">
                                    <div className="total-lines w-full items-center px-8 py-3 pt-4 text-center mb-2">
                                        <h4 className="text-2xl">is the highest lines you cleared!</h4>
                                        <h2 className="text-5xl">{filterList.length > 0 ? filterList[0].highscore/40 : 0}</h2>
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
                                    <button type="button" className="btn-start-game w-full  text-center text-2xl rounded-md   w-full px-2 py-2  font-bold opacity-100 hover">START GAME</button>
                                </Link>
                                <div className="w-full">
                                    <button type="button" className="btn-sign-out w-full text-2xl rounded-md px-2 py-2 font-bold opacity-100 hover"
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
