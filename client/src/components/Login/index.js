import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = event => {
         this.setState({
            username: event.target.value
        })
    }

    handlePwdChange = event => {
        this.setState({
           password: event.target.value
       })
   }

    render(){
        
        const inputField = "p-2 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent";
        const hover = "transform transition duration-300 ease-in-out hover:scale-110";

        return (
        <section className="flex flex-col items-center text-center justify-center gap-4">
            <h1 className="text-4xl font-normal mb-5">LOGIN</h1>

            <form className="flex flex-col gap-6">

                <label className="hidden">Username</label>
                <input 
                    type="text" 
                    value={this.state.username}
                    size="50"
                    onChange={this.handleUsernameChange}
                    className={`${inputField} w-full`}
                    placeholder="Username"
                />


                <label className="hidden">Password</label>
                <input 
                    type="password"
                    value={this.state.password}
                    
                    className={`${inputField}`} 
                    onChange={this.handlePwdChange}
                    placeholder="Password"
                />

                <a href="./" className="hover:text-red-600">Forgot your password?</a>

                <button className={`text-xl rounded-md py-2 font-bold opacity-100 btn-action submit-btn ${hover}`}>LOGIN</button>
                <p>Don't have an account? <a className="text-blue-400 font-bold" href="./">Sign up</a></p>
            </form>

        </section>
    )}
        }

export default Login;