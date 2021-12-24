import React, { useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import './Home.css'
import PCard from "../ProyectoCard/Pcard";
import { useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router";
import { getProyectos } from "../../Redux/Actions";

export default function Home(){
   
   
    const {id} = useParams(); 
    const navigate = useNavigate()
    const proyectos = useSelector(state => state.proyectos)
    const dispatch = useDispatch(); 

   
    React.useEffect(()=>{
       if(proyectos.length===0) dispatch(getProyectos(id))
    })

 
    function handleAñadir(){
        navigate('/proyecto/form/' + id + '/0')
    }

    return (
        <div className="home">
            <NavBar/>
            <div className="botonAñadir"><Button variant="secondary" onClick={handleAñadir}>Añadir proyecto <FontAwesomeIcon icon={faPlus}/></Button></div>
            <div className="cards-home">
                {proyectos.length > 0? proyectos.map(proyecto=> {return <PCard key= {proyecto._id} title ={proyecto.title} description = {proyecto.description}/>}): <span>No hay proyectos, crea uno</span>}
            </div>
        </div>
    )
}