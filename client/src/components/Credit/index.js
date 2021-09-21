import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Signup from '../Signup';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Credit () {

    const [creators] = useState([
        {
            name: 'Sonali Pandey',
            git: "https://github.com/sonali-pandey"
        },
        {
            name: 'Rizzel Nolasco',
            git: "https://github.com/rizznn/"
        },
        {
            name: 'Kiefer Levine',
            git: "https://github.com/rookieprime"
        },
        {
            name: 'Kirti Patel',
            git: "https://github.com/kirti18patel"
        },
        {
            name: 'Lisa Le',
            git: "https://github.com/lisahuele"
        }
    ])

    const [techs] = useState([
        {
            name: "MongoDb",
            link: "https://www.mongodb.com/"
        },
        {
            name: "ExpressJs",
            link: "https://expressjs.com/"
        },
        {
            name: "ReactJS",
            link: "https://reactjs.org/"
        },
        {
            name: "NodeJs",
            link: "https://nodejs.org/en/"
        },
        {
            name: "GraphQL",
            link: "https://graphql.org/"
        },
        {
            name: "Mongoose ODM",
            link: "https://mongoosejs.com/"
        },
        {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/"
        }
    ])
        
    const [modalIsOpen, setModalIsOpen]= useState(false);

    const hover = "transform transition duration-300 ease-in-out hover:scale-110";

    return (
        <section className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-normal mb-5">CREDITS</h1>

            <h2 className="font-bold text-3xl block my-3 text-left">Built By</h2>
            <ul>
                {creators.map((creator) => 
                <li className={`inline mx-3 ${hover}`}>
                    <a href={`${creator.git}`} className="font-bold text-2xl creator-list" target="_blank" rel="oopener noreferrer">{creator.name}</a>
                </li>
                )}
            </ul>

            <h2 className="font-bold text-3xl block my-3 text-left">Build with</h2>
            <div className="text-center flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col gap-6 grid grid-cols-3">
                    {techs.map((tech) => 
                    <a 
                    href={`${tech.link}`}
                    className={`text-3xl rounded-md py-2 px-2 font-bold opacity-100 tech-list ${hover} `}
                    key={tech.name}
                    target="_blank"
                    rel="noopener noreferrer">{tech.name}</a>
                    )}
                </div>
            </div>

                <a 
                href="https://github.com/RookiePrime/crazy-tetris"
                className={`text-3xl rounded-md py-3 px-5 mt-10 font-bold opacity-100 flex flex-row btn-action ${hover} `}
                target="_blank"
                rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className={`text-4xl mx-2 top-3 right-10`}/>
                    <p>GitHub</p>
                </a>
            <Modal 
            isOpen={(modalIsOpen)}
            onRequestClose={() => setModalIsOpen(false)}
            className="login-signup box-content h-2/5 w-2/5 container mx-auto my-56 p-10 rounded flex flex-col items-center justify-center gap-4 bg-yellow-400 relative"
            >
                <a href='./' className="text-4xl">
                    <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
                </a>
            
                <Signup />

            </Modal>

        </section>
    )}

export default Credit;