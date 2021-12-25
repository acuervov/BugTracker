import React from "react";
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

export default function PCard ({title, description, id, idP}){
    return (
        <Link to={'/proyecto/'+ id + '/' + idP} style={{textDecoration: 'none'}}>
        <Card style={{ width: '18rem', marginTop: "10px", height: '200px'}} bg='dark' text='light'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
      </Card>
      </Link>
    )
}