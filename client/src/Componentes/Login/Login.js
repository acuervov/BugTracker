import React from "react";
import Card from 'react-bootstrap/Card'
import {GoogleLogin} from 'react-google-login'; 
import {useNavigate} from 'react-router'
import { accepted, getUserInfo } from "../../Redux/Actions";
import { useDispatch } from "react-redux";


export default function Login(){

    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        if(!response.hasOwnProperty('error')){
        dispatch(accepted())
        console.log(response)
        var body = {
            id: response.profileObj.googleId,
            name: response.profileObj.givenName,
            mail: response.profileObj.email,
            image: response.profileObj.imageUrl
        }
        dispatch(getUserInfo(body))
        navigate('/home') 
        }
        else {alert("Ocurrio un problema al intentar iniciar sesion")}
      }
    return(
        <Card style={{ width: '18rem', backgroundColor: "#1CB842" }}>
            <Card.Body>
                <Card.Title>Inicia sesion con google</Card.Title>
                <GoogleLogin
                 clientId="840455752572-0jbm1n4vhqhr85o52kocn8djfem9j6g1.apps.googleusercontent.com"
                 buttonText="Login"
                 onSuccess={responseGoogle}
                 onFailure={responseGoogle}
                 cookiePolicy={'single_host_origin'}
               />
            </Card.Body>
        </Card>
    )
}