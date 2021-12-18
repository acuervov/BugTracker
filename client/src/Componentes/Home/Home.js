import React from "react";
import NavBar from "../NavBar/NavBar";
import './Home.css'
import PCard from "../ProyectoCard/Pcard";
import { useSelector } from "react-redux";
import NoLog from "../NoLog/NoLog";

export default function Home(){
    const access = useSelector(state => state.access)
    return (
        <div>
       {access?
        <div className="home">
            <NavBar/>
            <div className="cards-home">
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
            </div>
        </div>:<NoLog/>
        }
        </div>
    )
}