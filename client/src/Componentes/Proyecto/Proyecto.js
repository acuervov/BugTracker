import React from "react";
import NavBar from "../NavBar/NavBar";
import './Proyecto.css'
import BCard from "../BugCard/BCard";

export default function Proyecto(){
    return (
        <div className="proyecto">
            <NavBar/>
            <div>filtros</div>
            <h1>Bugs en el proyecto ....</h1>
            <div className="cards-proyecto">
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
              <BCard/>
            </div>
        </div>
    )
}