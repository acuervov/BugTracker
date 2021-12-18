import { ACCEPTED, GET_USER_INFO} from "./const";

export function accepted(){
    return function (dispatch){
        dispatch({type: ACCEPTED})
    }
}

export function getUserInfo(body){
    return function(dispatch){
    fetch(("http://localhost:3001/user/" + body.id), {
        "method": "GET",
      })
      .then(response => {response.json()})
      .then(response => {console.log("primero", response)
        if(response){console.log("entro en el primero"); dispatch({type: GET_USER_INFO, payload: response})}
        else {
            console.log("entro en el segundo")
            fetch(("http://localhost:3001/user/"), {
                "method": "POST",
                "headers": {
                    'Content-Type': 'application/json'
                  },
                "body": JSON.stringify(body)
            })
            .then(response => response.json())
            .then(response => dispatch({type:GET_USER_INFO, payload: response}))
        }
    }); 
    }       
}

