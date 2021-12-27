import React from "react";
import NavBar from "../NavBar/NavBar";
import './Proyecto.css'
import BCard from "../BugCard/BCard"; 
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from 'react-router'; 
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getBugs } from "../../Redux/Actions";

export default function Proyecto(){

    const {proyectoId} = useParams(); 
    const {id} = useParams();
    const proyecto = useSelector(state => state.proyectos.find(proyecto => proyecto._id === proyectoId))
    const bugs1 = useSelector(state => state.bugs)

    const dispatch = useDispatch(); 
    const [bugs, setBugs] = React.useState(""); 
    React.useEffect(()=>{
       if(!bugs) dispatch(getBugs(proyectoId))
    })

    React.useEffect(()=>{
        setBugs(bugs1)
    }, [bugs1])
    
    console.log(bugs)
    const navigate = useNavigate()

    function handleAdd(){
        navigate('/bug/form/' + id + '/' + proyectoId + '/0')
    }

    function handleEdit(){
        navigate('/proyecto/form/' + id + '/' + proyectoId)
    }
    return (
        <div className="proyecto">
            <NavBar/>
            <div className= "filtros">
                <div className="boton">
                <Button variant="secondary" onClick={handleAdd}>Nuevo Bug <FontAwesomeIcon icon={faPlus}/></Button>
                </div>
                <div>
                    filtros
                </div>
            </div>
            <h1>{proyecto.name}</h1>
            <div className="cards-proyecto">
             {bugs.length > 0? bugs.map(bug => {
                 return <BCard Bid = {bug._id} key = {bug._id} name = {bug.name} description = {bug.description} route = {bug.route} status = {bug.status} date = {bug.date}/>
             }): <span>No hay bugs en este proyecto aún</span>}
            </div>
            <div className='botones'>
                <Button id='editar' variant="info" onClick={handleEdit}>Editar</Button>
                <Button id='eliminar' variant="danger">Eliminar</Button>
            </div>
        </div>
    )
}