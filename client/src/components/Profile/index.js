import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons'

function Profile() {
    return(
    <div className="container mx-auto flex h-screen items-center justify-center">
        <div className="frame flex">
            <header>
                <div>
                    <img src={require(`../../assets/images/Logo.png`).default } className="flex h-12 rounded-br-3xl top-14 left-14 profile-logo" alt="crazy teronimo logo"/>
                    <h1 className="text-center flex text-5xl absolute top-12 profile-font">PROFILE</h1>
                </div> 
            </header>
            <section>
                <div className="flex">
                    <div className="">
                        <div class="input-wrapper wrapper">
                            <label htmlFor="username" icon={faUser}><FontAwesomeIcon class="user-icon" icon={faUser}/> </label>
                            <input type="text" htmlFor="username" id="username" class="rounded-2xl text-black-500 profile-input" placeholder="newuser432"/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <div className="flex">
                        <table className="text-2xl table-fixed px-10 profile-highscore">
                            <thead className="text-center" >
                                <tr>
                                    <th className="p-5 pb-2 " colspan="5"scope="colgroup">
                                        YOUR HIGHSCORES
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="col1">01</td>
                                    <td className="col2"><span className="text-white">0000</span>0</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td className="col1">02</td>
                                    <td className="col2"><span className="text-white">0000</span>0</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td className="col1">03</td>
                                    <td className="col2"><span className="text-white">0000</span>0</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td className="col1">04</td>
                                    <td className="col2"><span className="text-white">0000</span>0</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td className="col1">05</td>
                                    <td className="col2"><span className="text-white">0000</span>0</td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="container flex">
                            <div className="flex">
                                <div className="total-lines px-16 py-5">
                                    <h2 className="text-7xl text-center">0</h2>
                                    <h4 className="text-2xl">Lines Cleared</h4>
                                </div>
                            </div>
                            <div className="trophies px-5 py-5">
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faTrophy} className="trophy-logo"/>
                                <FontAwesomeIcon icon={faMedal} className="trophy-logo"/>
                                 
                            </div>
                            <div>
                                <button type="button" className="btn-start-game text-center text-2xl rounded-md py-2 px-2 font-bold opacity-100 hover">START GAME</button>
                            </div>
                            <div>
                                <button type="button" className="btn-sign-out text-2xl rounded-md py-2 px-2 font-bold opacity-100 hover">SIGN OUT</button>
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
