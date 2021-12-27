import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router";

export default function Bug(){
    const {bugId} = useParams(); 

    const BugDetail = useSelector(state => {return state.bugs.find(bug => bug._id === bugId)}) 

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
    console.log(BugDetail)
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
            </div>
        </div>
    )
}