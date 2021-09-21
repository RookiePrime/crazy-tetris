import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Login from '../Login';
Modal.setAppElement('#root');

function Signup () {
        
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [email, setEmail]= useState('');
    const [modalIsOpen, setModalIsOpen]= useState(false);

    const inputField = "p-2 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent";
    const hover = "transform transition duration-300 ease-in-out hover:scale-110";

    return (
    <section className="flex flex-col items-center text-center justify-center gap-4">
        <h1 className="text-4xl font-normal mb-5">SIGN UP</h1>

        <form className="flex flex-col gap-6">

            <label className="hidden">Username</label>
            <input 
                type="text" 
                value={username}
                onChange={event => setUsername(event.target.value)}
                className={`${inputField}`}
                placeholder="Username"
            />

            <label className="hidden">Email</label>
            <input 
                type="text" 
                value={email}
                onChange={event => setEmail(event.target.value)}
                className={`${inputField}`}
                placeholder="Email"
            />

            <label className="hidden">Password</label>
            <input 
                type="password"
                size="50"
                className={`${inputField}`} 
                onChange={event => setPassword(event.target.value)}
                placeholder="Password"
            />

            <button className={`text-xl rounded-md py-2 font-bold opacity-100 btn-action submit-btn ${hover}`}>SIGN UP</button>
            <p>Already have an account?
                <a 
                className="text-blue-400 font-bold" 
                onClick = { () => setModalIsOpen(true)}
                > LOGIN</a>
            </p>
        </form>

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
    </section>
)}

export default Signup;