import React from "react";
import './FormProyecto.css'
import NavBar from "../NavBar/NavBar";
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addProyecto } from "../../Redux/Actions";

export default function FormProyectoFormProyecto(){
    
    const {id} = useParams();
    const dispatch = useDispatch();
    const [proyecto, setProyecto] = React.useState({
        name: "",
        description: "",
        userList: [id]
    })

    function onSubmit(){
        dispatch(addProyecto(proyecto))
    }

    console.log(proyecto)
    return (
        <div>
            <NavBar/>
            <div className="form-container">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre del proyecto</Form.Label>
                        <Form.Control type="text" placeholder="name" value = {proyecto.name} onChange={event => setProyecto({...proyecto, name: event.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción del proyecto</Form.Label>
                        <Form.Control as="textarea" rows={3} value = {proyecto.description} onChange={event => setProyecto({...proyecto, description: event.target.value})}/>
                    </Form.Group>
                    <Button variant='dark' onClick={onSubmit}>Crear</Button>
                </Form>
            </div>
        </div>
    )
}