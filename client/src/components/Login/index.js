import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Signup from '../Signup';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Login () {
        
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [modalIsOpen, setModalIsOpen]= useState(false);

    const inputField = "p-2 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent";
    const hover = "transform transition duration-300 ease-in-out hover:scale-110";

    return (
        <section className="modal-wrap rounded flex flex-col items-center text-center justify-center gap-6 md:p-20 p-6 bg-yellow-400 relative">
            
            <a href='./' className="text-8xl">
                <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
            </a>

            <h1 className="text-4xl font-normal mb-5">LOGIN</h1>

            <form className="flex flex-col gap-6 flex-wrap form-submit">

                <input
                    type="text" 
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    className={`${inputField} md:text-2xl text-lg`}
                    placeholder="Username"
                    label="Username"
                />

                <input 
                    type="password"
                    className={`${inputField} md:text-2xl text-lg`} 
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Password"
                    label="password"
                />

                <a href="./" className="hover:text-red-600 text-left text-lg">Forgot your password?</a>


                <button className={`md:text-3xl text-xl rounded-md py-2 mt-10 font-bold opacity-100 btn-action submit-btn ${hover}`}>LOGIN</button>
                <p className="text-lg">Don't have an account?
                    <a 
                    className="text-blue-400 font-bold" 
                    onClick = { () => setModalIsOpen(true)}
                    > SIGN UP</a>
                </p>
            </form>

            <Modal 
            isOpen={(modalIsOpen)}
            onRequestClose={() => setModalIsOpen(false)}
            className="box-content h-screen container mx-auto flex flex-col items-center justify-center gap-6"
            >
                <Signup />

            </Modal>

        </section>
    )}

export default Login;