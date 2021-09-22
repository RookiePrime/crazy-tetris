import React from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Auth from '../../../utils/auth';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
    return (
        <div className="game-navigation">
            <a href="/">
            <img className="game-logo" alt="crazy tetromino logo" src={require('../../../assets/images/Logo.png').default} />
            </a>

            <div className="game-user">
                <a href="/">
                    <h3 className="game-h5">
                        <span className="t">T</span>
                        <span className="e">E</span>
                        <span className="t">T</span>
                        <span className="r">R</span>
                        <span className="o">O</span>
                        <span className="m">M</span>
                        <span className="i">I</span>
                        <span className="n">N</span>
                        <span className="o">O</span>
                    </h3>
                </a>
                
                {/*-- IF USER NOT SIGN IN = LOGIN MODAL --*/}
                {/*--- IF USER SIGN IN = GO TO PROFILE ---*/}
                <Link to="/" className="game-userinfo">
                    <FontAwesomeIcon icon={faUser} />
                    {Auth.getProfile().data.username}
                </Link>
            </div>
        </div>
    )
}
