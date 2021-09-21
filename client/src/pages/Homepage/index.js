import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle, faTrophy, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Login from '../../components/Login';
import Credit from '../../components/Credit';
import Signup from '../../components/Signup';
import Highscores from '../../components/Highscores';
import Settings from '../../components/Settings';

Modal.setAppElement('#root');

function Homepage( ) {

    const [actions] = useState([
        { name: 'LOGIN' },
        { name: 'START GAME'}
      ])

    const [options] = useState([
        { 
            name: 'btn-settings',
            icon: faCog,
            animate: 'hover:rotate-180'
        },
        { 
            name: 'btn-about',
            icon: faInfoCircle
        },
        { 
            name: 'btn-score',
            icon: faTrophy
        }
    ])

    const [modalIsOpen, setModalIsOpen]= useState(false);
    const [currentAction, setCurrentAction] = useState(false)
    const [currentOption, setCurrentOption] = useState(false)

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
            {/* {actions.map((action) => (
                <button 
                className={`text-3xl rounded-md py-2 px-2 font-bold opacity-100 btn-action ${hover} `}
                onClick = { () => {setModalIsOpen(true); setCurrentAction(action)}}
                key={action.name}
                >
                    { action.name }
                </button>
            ))} */}
            <button
                className={`text-2xl rounded-md py-2 px-2 font-bold opacity-100 btn-action ${hover}`}
                onClick = { () => setModalIsOpen(true) }
            > LOGIN </button>
            <Link to={'/game'}>
                <button
                    className={`text-2xl rounded-md py-2 px-2 font-bold opacity-100 btn-action ${hover}`}
                > START GAME </button>
            </Link>

            <div className="flex flex-row gap-4 my-5">
                {options.map((option) => 
                    <button>
                        <FontAwesomeIcon 
                    icon={option.icon}
                    className={`${menuBtnClass} ${hover} ${option.name} ${option.animate} text-6xl`}
                    onClick = { () => {setModalIsOpen(true); setCurrentOption(option)}}
                    key={option.name}/>
                    </button>
                )}
            </div>
            
        </section>

        <Modal 
        isOpen={(modalIsOpen)}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-wrap box-content h-3/5 w-3/5 container mx-auto my-56 p-6 rounded flex flex-col items-center justify-center gap-6 bg-yellow-400 relative"
        >
            <a href='./' className="text-4xl">
                <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
            </a>

            {
            
            currentAction === actions[0] ? <Login />
            : currentOption === options[0] ? <Settings />
            : currentOption === options[1] ? <Credit />
            :  currentOption === options[2] ? <Highscores />
            : <Signup />
}

        </Modal>

    </div>
  );
}

export default Homepage;