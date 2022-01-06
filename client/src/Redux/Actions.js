import {GET_USER_INFO, ADD_PROYECTO, GET_PROYECTOS, ADD_BUG, GET_BUGS, SEARCH_USER_NAME} from "./const";

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
                    method: 'POST', 
                    mode: 'cors', 
                    cache: 'no-cache', 
                    credentials: 'same-origin', 
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow', 
                    referrerPolicy: 'no-referrer', 
                    body: JSON.stringify(body)
                  })
                  .then(data => data.json())
                  .then(data => {dispatch({type: GET_USER_INFO, payload: data})})
            }
        })
    }
}

export function addProyecto(body){
    return function (dispatch){
        fetch("http://localhost:3001/proyecto/", {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(response => alert(response))
          .catch(error => alert(error))
    }
}

export function getProyectos(id){
    return function (dispatch){
        console.log("entro en el action")
        fetch(("http://localhost:3001/proyecto/" + id),{
                method: "GET"
            })
            .then(respuesta => respuesta.json())
            .then(respuesta => dispatch({type: GET_PROYECTOS, payload: respuesta}))
    }
}

export function addBug(body){
    return function (dispatch){
        fetch("http://localhost:3001/bug/", {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(body)
          })
        .then(response => response.json(response))
        .then(response => {console.log(response); if(!response.hasOwnProperty('errors'))alert("Bug creado con exito")
    else{alert(response.message)}})
    }
}

export function getBugs(id){
    return function(dispatch){
        fetch(("http://localhost:3001/bug/" + id),{
                method: "GET"
            })
            .then(respuesta => respuesta.json())
            .then(respuesta => dispatch({type: GET_BUGS, payload: respuesta}))
    }
}

export function editProyecto(body){
    return function (dispatch){
        fetch(("http://localhost:3001/proyecto/"+ body._id), {
            method: 'PUT', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(body)
          })
        .then(response => response.json())
        .then(response => console.log("edit: ", response))
    }
}

export function editBug(body){
    return function(dispatch){
        fetch(("http://localhost:3001/bug/"+ body._id), {
            method: 'PUT', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(body)
          })
        .then(response => response.json())
        .then(response => console.log("edit: ", response))
    }
}

export function deleteBug(id){
  return function(dispatch){
    fetch(("http://localhost:3001/bug/"+ id), {
            method: 'DELETE', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
          }) 
    .then(response => console.log("delete: ",response))
  }
}

export function deleteProyecto(id){
  return function (dispatch){
    fetch(("http://localhost:3001/proyecto/"+ id), {
      method: 'DELETE', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
    }) 
    .then(response => console.log("delete: ",response))
  }
}

export function searchUserName(name){
  return function (dispatch){
    fetch(("http://localhost:3001/user/name-" + name),{
            method: "GET"
        })
    .then(response => response.json())
    .then(response => dispatch({type: SEARCH_USER_NAME, payload: response}))
  }
}