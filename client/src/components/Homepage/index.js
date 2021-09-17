import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle, faTrophy } from '@fortawesome/free-solid-svg-icons'

function Homepage( ) {

    const menuBtnClass = "mx-2 opacity-100 bg-white-900 rounded-full shadow-md p-3";
    const hover = "transform transition duration-300 ease-in-out hover:scale-110";

  return (
    <div className="text-center h-screen flex flex-col items-center justify-center gap-4">
        <header>
            <h1 className="my-5 mx-5">
                <img src={require(`../../assets/images/Logo2.png`).default } className="w-auto h-36" alt="crazy teronimo logo"/>
            </h1>
        </header>

        <section className="flex flex-col gap-4">
            <button className={`text-2xl rounded-md py-2 px-2 font-bold opacity-100 btn-login ${hover}`}>LOGIN</button>
            <button className={`text-2xl rounded-md py-2 px-2 font-bold opacity-100 btn-start mb-3 ${hover}`}>START GAME</button>
            
            <div className="flex flex-row gap-4 my-5">
                <FontAwesomeIcon icon={faCog} className={`${menuBtnClass} ${hover} btn-settings hover:rotate-180 text-6xl`}/>
                <FontAwesomeIcon icon={faInfoCircle} className={`${menuBtnClass} ${hover} btn-about text-6xl`}/>
                <FontAwesomeIcon icon={faTrophy} className={`${menuBtnClass} ${hover} btn-score text-6xl`}/>
            </div>
            
        </section>

    </div>
  );
}

export default Homepage;