import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Bcard.css'

export default function BCard(){
    return (
        <Card className="card">
            <Card.Header>Bug title</Card.Header>
            <Card.Body>
                <Card.Title style={{textAlign: "left"}}>Descripción: </Card.Title>
                <Card.Text style={{textAlign: "left"}}>
                    With supporting text below as a natural lead-in to additional content. tengo que hacer algo para que limite la cantidad de caracteres que muestra en esta instancia. 
                </Card.Text>
                <Card.Text style={{textAlign: "left"}}>Ruta: </Card.Text>
                <Card.Text style={{textAlign: "left"}}>Fecha: </Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
      </Card>
    )
}