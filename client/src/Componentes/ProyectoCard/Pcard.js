import React from "react";
import Card from 'react-bootstrap/Card'

export default function PCard ({title, description}){
    return (
        <Card style={{ width: '18rem', marginTop: "10px"}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
      </Card>
    )
}