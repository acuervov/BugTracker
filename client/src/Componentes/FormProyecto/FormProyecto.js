import React from "react";
import './FormProyecto.css'
import NavBar from "../NavBar/NavBar";
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addProyecto , editProyecto} from "../../Redux/Actions";

export default function FormProyectoFormProyecto(){
    
    const navigate = useNavigate(); 
    const {id} = useParams();
    const {proyectoId} = useParams(); 
    const dispatch = useDispatch();
    const [proyecto, setProyecto] = React.useState({
        name: "",
        description: "",
        userList: [id],
        _id: proyectoId
    })

    function onSubmit(){
        dispatch(addProyecto(proyecto))
        navigate('/home/' + id)

    }

    function onEdit(){
        console.log("proyecto editado: ", proyecto)
        dispatch(editProyecto(proyecto))
        navigate('/home/' + id)

    }

    
    const proyectoInfo = useSelector(state => state.proyectos.find(proyecto => proyecto._id === proyectoId))

    React.useEffect(()=>{
        if(parseInt(proyectoId)){
            setProyecto({...proyecto, name: proyectoInfo.name, description: proyectoInfo.description}) 
        }
    },[1,2])
    
    console.log(proyecto)
    return (
        <div>
            <NavBar/>
            <div className="form-container">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre del proyecto</Form.Label>
                        <Form.Control type="text"  value = {proyecto.name} onChange={event => setProyecto({...proyecto, name: event.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción del proyecto</Form.Label>
                        <Form.Control as="textarea" rows={3} value = {proyecto.description} onChange={event => setProyecto({...proyecto, description: event.target.value})}/>
                    </Form.Group>
                    {parseInt(proyectoId)? <Button variant='dark' onClick={onEdit} >Editar</Button>:<Button variant='dark' onClick={onSubmit}>Crear</Button>}
                </Form>
            </div>
        </div>
    )
}