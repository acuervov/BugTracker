import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Bcard.css'

export default function BCard({name, description, date, status, route}){
    
    function color(){
        switch(status){
            case "1":
                return "danger"
            case "2":
                return "secondary"
            case "3":
                return "success"
        }
    }
    return (
        <Card className="card" bg={color()}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title style={{textAlign: "left"}}>Descripción: </Card.Title>
                <Card.Text style={{textAlign: "left"}}>
                    {description}
                </Card.Text>
                <Card.Text style={{textAlign: "left"}}>Ruta: {route}</Card.Text>
                <Card.Text style={{textAlign: "left"}}>Fecha: {date}</Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
      </Card>
    )
}