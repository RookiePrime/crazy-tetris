import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Login (){

    const hover = "transform transition duration-300 ease-in-out hover:scale-110";

    return (
        <section className="login-signup flex flex-col items-center text-center justify-center gap-4 bg-yellow-400 relative py-10 px-10 rounded-xl shadow-lg">
            <h1 className="text-4xl font-normal">LOGIN</h1>

            <form className="flex flex-col gap-4">
                <input className="p-2 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" selected placeholder="Username"/>
                <input className="p-2 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="Password"/>
                <a href="./" className="hover:text-red-600">Forgot your password?</a>

                <button className={`text-xl rounded-md py-2 px-2 font-bold opacity-100 btn-action ${hover}`}>LOGIN</button>
                <p>Don't have an account? <a className="text-blue-400 font-bold" href="./">Sign up</a></p>
            </form>

        </section>
    )
}

export default Login;