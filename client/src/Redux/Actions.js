import { ACCEPTED, GET_USER_INFO, ADD_PROYECTO} from "./const";

export function accepted(){
    return function (dispatch){
        dispatch({type: ACCEPTED})
    }
}

export function getUserInfo(body){
    return function (dispatch){
        fetch(("http://localhost:3001/user/" + body.id),{
            method: "GET"
        })
        .then(response => response.json())
        .then(response => {
            if(response){dispatch({type: GET_USER_INFO, payload: response})}
            else {
                fetch("http://localhost:3001/user/", {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                      'Content-Type': 'application/json'
                      // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify(body) // body data type must match "Content-Type" header
                  })
                  .then(data => data.json())
                  .then(data => {dispatch({type: GET_USER_INFO, payload: data})})
            }
        })
    }
}

export function addProyecto(){
    return function (dispatch){
        console.log("mierdita")
    }
}