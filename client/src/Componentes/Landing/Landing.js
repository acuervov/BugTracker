import React from "react";
import './Landing.css'
import Login from "../Login/Login";

export default function Landing(){
    return (
        <div className='landing'>
            <h6 className='maintitle'>BugTracker</h6>
            <div className='maindescription'>
                <h1>
                    App para el control y manejo de bugs en el desarrollo de 
                    tus aplicaciones. 
                </h1>
            </div>
            <div className="login">
               <Login/>
            </div>
        </div>
    )
}