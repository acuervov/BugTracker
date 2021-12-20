import React from "react";
import Login from "../Login/Login";
import './NoLog.css'

export default function NoLog(){
    return (
        <div className="no-log">
            <h1>Inicia sesion para disfrutar de esta app</h1>
            <div className="login">
            <Login/>
            </div>
        </div>
    )
}