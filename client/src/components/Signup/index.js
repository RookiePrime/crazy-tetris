import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Login from '../Login';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
Modal.setAppElement('#root');

function Signup (props) {
        
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
    const [modalIsOpen, setModalIsOpen]= useState(false);

    const inputField = "p-2 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent";
    const hover = "transform transition duration-300 ease-in-out hover:scale-110";

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
    <section className="flex flex-col items-center text-center justify-center gap-4">
        <h1 className="text-4xl font-normal mb-5">SIGN UP</h1>

        <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>

            <label className="hidden">Username</label>
            <input 
                name="username"
                type="text" 
                className={`${inputField} text-2xl`}
                placeholder="Username"
                onChange={handleChange}
            />

            <label className="hidden">Email</label>
            <input 
                name="email"
                type="text"
                className={`${inputField} text-2xl`}
                placeholder="Email"
                onChange={handleChange}
            />

            <label className="hidden">Password</label>
            <input 
                name="password"
                type="password"
                size="50"
                className={`${inputField} text-2xl`} 
                placeholder="Password"
                onChange={handleChange}
            />

            <button className={`text-3xl rounded-md py-2 mt-10 font-bold opacity-100 btn-action submit-btn ${hover}`}>SIGN UP</button>
            <p className="text-lg">Already have an account?
                <a 
                className="text-blue-400 font-bold" 
                onClick = { () => setModalIsOpen(true)}
                > LOGIN</a>
            </p>
        </form>

        <Modal 
        isOpen={(modalIsOpen)}
        onRequestClose={() => setModalIsOpen(false)}
        className="login-signup box-content h-3/5 w-3/5 container mx-auto my-56 p-10 rounded flex flex-col items-center justify-center gap-4 bg-yellow-400 relative"
        >
            <a href='./' className="text-4xl">
                <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
            </a>
            
            <Login />

        </Modal>
    </section>
)}

export default Signup;