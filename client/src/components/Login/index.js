import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Signup from '../Signup';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Login () {
        
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [modalIsOpen, setModalIsOpen]= useState(false);
    const [login, { error }] = useMutation(LOGIN_USER);

    const inputField = "p-2 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent";
    const hover = "transform transition duration-300 ease-in-out hover:scale-110";
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
            alert("logged in");   
        } catch (e) {
        console.log(e);
        }
    };

    const handleChange = (event) => {
        
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
        <section className="modal-wrap rounded flex flex-col items-center text-center justify-center gap-6 md:p-20 p-6 bg-yellow-400 relative">
            
            <a href='./' className="text-8xl">
                <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
            </a>

            <h1 className="text-4xl font-normal mb-5">LOGIN</h1>

            <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>

                <input
                    type="text" 
                    className={`${inputField} md:text-2xl text-lg`}
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                    label="Username"
                />

                <input 
                    name="password"
                    type="password"
                    className={`${inputField} md:text-2xl text-lg`} 
                    onChange={handleChange}
                    placeholder="Password"
                    label="password"
                />

                <a href="./" className="hover:text-red-600 text-left text-lg">Forgot your password?</a>
                {error ? (
                <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                </div>
                ) : null}

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