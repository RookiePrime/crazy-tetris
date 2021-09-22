import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';
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
            <button
                className={`text-2xl rounded-md p-2 font-bold opacity-100 btn-action ${hover}`}
                onClick = { () => {setModalIsOpen(true); setCurrentAction(actions[0])}}
            > LOGIN </button>
            <Link to={'/game'} className={`rounded-md opacity-100 btn-action ${hover}`}>
                <button
                    className={`text-2xl p-2 font-bold`}
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
        className="box-content h-screen container mx-auto flex flex-col items-center justify-center gap-6"
        >
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