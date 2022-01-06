import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { useNavigate, useParams } from "react-router";
import Button from 'react-bootstrap/Button'
import { deleteBug } from "../../Redux/Actions";

export default function Bug(){
    const {bugId} = useParams(); 
    const {proyectoId} = useParams(); 
    const {id} = useParams(); 
    const navigate = useNavigate();

    const BugDetail = useSelector(state => {return state.bugs.find(bug => bug._id === bugId)}) 
    const dispatch = useDispatch();
    
    function color(){
            switch(BugDetail.status){
                case "1":
                    return "#DC3545"
                case "2":
                    return "#6C757D"
                case "3":
                    return "#198754"
            }
    }   

    function handleDelete(){
        dispatch(deleteBug(bugId)); 
        navigate('/proyecto/' + id + "/" + proyectoId);
    }

    return (
        <div>
            <NavBar/>
            <div className='BugDetail' style={{backgroundColor: color(), height: '100vh'}}>
                <h1>{BugDetail.name}</h1>
                <p>{BugDetail.description}</p>
                <p><b>Ruta: </b>{BugDetail.route}</p>
                <p><b>Severidad: </b>{BugDetail.severity}/100</p>
                <p><b>Fecha aparición: </b>{BugDetail.date}</p>
                <p><b>Encargados: </b>{BugDetail.userList}</p>
                <div>
                    <Button id='editar' variant="info" onClick={()=>{navigate('/bug/form/' + id + '/' + proyectoId + '/' + bugId)}}>Editar</Button>
                    <Button id='eliminar' variant="danger" onClick={handleDelete}>Eliminar</Button>
                </div>
            </div>
        </div>
    )
}