import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(){
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{fontSize: "30px"}} href="/home">Home</Navbar.Brand>
                        <Nav className="d-flex">
                            <Nav.Link style={{fontSize: "30px"}} className='perfil' href="#perfil">Usuario <FontAwesomeIcon icon={faUser}/></Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
    )
}