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

export default function Home(){
    const access = useSelector(state => state.access)// cambiar a const cuando se acabe proceso de desarrollo
    const [proyectos, setProyectos] = React.useState([])
    const dispatch = useDispatch(); 

    const navigate = useNavigate()

    function handleAñadir(){
        navigate('/proyecto/form/0')
    }

    return (
        <div>
       {access?
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
        </div>:<NoLog/>
        }
        </div>
    )
}