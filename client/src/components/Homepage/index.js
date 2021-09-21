import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle, faTrophy, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Login from '../Login';

Modal.setAppElement('#root');

function Homepage( ) {

    const [actions] = useState([
        { name: 'LOGIN' },
        { name: 'START GAME'}
      ])

    const [modalIsOpen, setModalIsOpen]= useState(false);

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
            {actions.map((action) => (
                <button 
                className={`text-2xl rounded-md py-2 px-2 font-bold opacity-100 btn-action ${hover} `}
                onClick = { () => setModalIsOpen(true)}
                key={action.name}
                >
                    { action.name }
                </button>
            ))}

            <div className="flex flex-row gap-4 my-5">
                <FontAwesomeIcon icon={faCog} className={`${menuBtnClass} ${hover} btn-settings hover:rotate-180 text-6xl`}/>
                <FontAwesomeIcon icon={faInfoCircle} className={`${menuBtnClass} ${hover} btn-about text-6xl`}/>
                <FontAwesomeIcon icon={faTrophy} className={`${menuBtnClass} ${hover} btn-score text-6xl`}/>
            </div>
            
        </section>

        <Modal 
        isOpen={(modalIsOpen)}
        onRequestClose={() => setModalIsOpen(false)}
        className="login-signup box-content h-2/5 w-2/5 container mx-auto my-56 p-10 rounded flex flex-col items-center justify-center gap-4 bg-yellow-400 relative"
        >
            <a href='./' className="text-4xl">
                <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
            </a>
            
            <Login />

        </Modal>

    </div>
  );
}

export default Homepage;