import React from "react";
import NavBar from "../NavBar/NavBar";
import './Home.css'
import PCard from "../ProyectoCard/Pcard";
import { useDispatch, useSelector } from "react-redux";
import NoLog from "../NoLog/NoLog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router";
import { useAuth } from "../Auth/useAuth";

export default function Home(){
   
    const dispatch = useDispatch(); 

    const navigate = useNavigate()
    const {authed} = useAuth(); 
    console.log("home authed" , authed)
 
    

    function handleAñadir(){
        navigate('/proyecto/form/0')
    }

    return (
        <div className="home">
            <NavBar/>
            <div className="botonAñadir"><Button variant="secondary" onClick={handleAñadir}>Añadir proyecto <FontAwesomeIcon icon={faPlus}/></Button></div>
            <div className="cards-home">
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
            </div>
            <button onClick={()=>{
                navigate('/')
            }}>logout</button>
        </div>
    )
}