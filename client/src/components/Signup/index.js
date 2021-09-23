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
      if(formState.username !== "" || formState.password !== ""){
        try{
          const mutationResponse = await addUser({
            variables: {
              username: formState.username,
              email: formState.email,
              password: formState.password
            },
          });
          const token = mutationResponse.data.addUser.token;
          Auth.login(token);
        }
        catch(e){
          alert("Enter proper credentials")
        }
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
    <section className="modal-wrap rounded flex flex-col items-center text-center justify-center gap-6 md:p-20 p-6 bg-yellow-400 relative model-register">
        
        <a href='./' className="text-8xl">
            <FontAwesomeIcon icon={faTimes} className={`text-4xl absolute top-3 right-10`}/>
        </a>

        <h1 className="text-4xl font-normal mb-5">SIGN UP</h1>

        <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>

            <label className="hidden">Username</label>
            <input 
                name="username"
                type="text" 
                className={`${inputField} md:text-2xl text-lg`}
                placeholder="Username"
                onChange={handleChange}
            />

            <label className="hidden">Email</label>
            <input 
                type="text" 
                className={`${inputField} md:text-2xl text-lg`}
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <label className="hidden">Password</label>
            <input 
                name="password"
                type="password"
                className={`${inputField} md:text-2xl text-lg`} 
                placeholder="Password"
                onChange={handleChange}
            />

            <button className={`md:text-3xl text-lg rounded-md py-2 font-bold opacity-100 btn-action submit-btn ${hover}`}>SIGN UP</button>
            <p className="text-lg">Already have an account?
                <a 
                className="text-blue-400 font-bold register-link" 
                onClick = { () => setModalIsOpen(true)}
                > LOGIN</a>
            </p>
        </form>

        <Modal 
        isOpen={(modalIsOpen)}
        onRequestClose={() => setModalIsOpen(false)}
        className="box-content h-screen container mx-auto flex flex-col items-center justify-center gap-6"
        >   
            <Login />

        </Modal>
    </section>
)}

export default Signup;