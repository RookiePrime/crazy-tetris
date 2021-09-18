import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    return(
    <div className="container mx-auto flex h-screen">
        <div className="frame ">
            HELLO
            <FontAwesomeIcon icon={faCoffee}/>

        </div>
    </div>
    )
}

export default Profile;
