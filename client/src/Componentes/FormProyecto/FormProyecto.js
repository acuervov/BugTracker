import React from "react";
import './FormProyecto.css'
import NavBar from "../NavBar/NavBar";
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import Dropdown from 'react-bootstrap/Dropdown';
import CloseButton from 'react-bootstrap/CloseButton'
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addProyecto , editProyecto, searchUserName} from "../../Redux/Actions";

export default function FormProyecto(){
    
    const navigate = useNavigate(); 
    const {id} = useParams();
    const {proyectoId} = useParams(); 
    const dispatch = useDispatch();
    
    const [proyecto, setProyecto] = React.useState({
        name: "",
        description: "",
        userList: [id],
    })
    const miUsuario = useSelector(state => state.user);

    const [usuarios, setUsuarios] = React.useState([miUsuario.name]);

    const [search, setSearch] = React.useState("");

    function onSubmit(){
        dispatch(addProyecto(proyecto))
        navigate('/home/' + id)

    }

    function onEdit(){
        dispatch(editProyecto(proyecto))
        navigate('/home/' + id)

    }
    const usuariosStore = useSelector(state => state.userSearch);
 
    const proyectoInfo = useSelector(state => state.proyectos.find(proyecto => proyecto._id === proyectoId))

    React.useEffect(()=>{
        if(parseInt(proyectoId)){
            setProyecto({...proyecto, name: proyectoInfo.name, description: proyectoInfo.description, _id: proyectoId, userList: proyectoInfo.userList}) 
        }
    },[1])

    React.useEffect(()=>{
        dispatch(searchUserName(search))
    },[search])
    
    console.log("proyecto: ", proyecto); 
    console.log("usuarios", usuarios)

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
              <Form.Control
                autoFocus
                className="mx-3 my-2 w-auto"
                placeholder="Type to filter..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !search || child.props.children.toLowerCase().startsWith(search),
                )}
              </ul>
            </div>
          );
        },
      );

      const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </a>
      ));
    
      function handleSelect(event){
        setProyecto({...proyecto, userList: proyecto.userList.concat(event.target.id)});
        setUsuarios([...usuarios, event.target.title])
      }
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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Integrantes</Form.Label>
                        <Dropdown> 
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                Integrantes
                            </Dropdown.Toggle>
                            <Dropdown.Menu as={CustomMenu} >
                                {usuariosStore && usuariosStore.map(user => {
                                    return (
                                        <Dropdown.Item  key = {user.id} id = {user.id} title={user.name} onClick={handleSelect}>{user.name}</Dropdown.Item>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <Form.Group>
                        {usuarios.map(user=>{
                            return (
                                <div key = {user} className='userName'>
                                    <span>{user}</span>
                                    <CloseButton />
                                </div>
                            )})}
                    </Form.Group>
                    {parseInt(proyectoId)? <Button variant='dark' onClick={onEdit} >Editar</Button>:<Button variant='dark' onClick={onSubmit}>Crear</Button>}
                </Form>
            </div>
        </div>
    )
}