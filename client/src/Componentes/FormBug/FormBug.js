import React from "react";
import './FormBug.css'
import NavBar from "../NavBar/NavBar";
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addBug } from "../../Redux/Actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from 'react-router'

export default function FormProyectoFormProyecto(){
    
    const {proyectoId} = useParams();
    const {id} = useParams();
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [bug, setBug] = React.useState({
        name: "",
        description: "",
        userList: [],
        proyecto: proyectoId,
        severity: 0,
        route: "",
        date: new Date(),
        status: "1",
    })

    function handleSubmit(){
        dispatch(addBug(bug))
        navigate('/proyecto/' + id + "/" + proyectoId)
    }
    return (
        <div>
            <NavBar/>
            <div className="form-container">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre del Bug</Form.Label>
                        <Form.Control type="text" placeholder="name" value = {bug.name} onChange={event => setBug({...bug, name: event.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción del Bug</Form.Label>
                        <Form.Control as="textarea" rows={3} value = {bug.description} onChange={event => setBug({...bug, description: event.target.value})}/>
                    </Form.Group>    
                    <Form.Group>
                        <Form.Label>Ruta del Bug</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="/esta/es/la/ruta" value = {bug.route} onChange={event => setBug({...bug, route: event.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gravedad</Form.Label>
                        <Form.Range value = {bug.severity} onChange={event => setBug({...bug, severity: event.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha de aparición</Form.Label>
                        <DatePicker selected = {bug.date} onSelect={date => setBug({...bug, date: date})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Encargado</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Floating label select example" value = {bug.status} onChange={event => setBug({...bug, status: event.target.value})}>
                            <option>Selecciona el status</option>
                            <option value="1">Por resolver</option>
                            <option value="2">En proceso</option>
                            <option value="3">Resuelto</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant='dark' onClick={handleSubmit}>Crear</Button>
                </Form>
            </div>
        </div>
    )
}