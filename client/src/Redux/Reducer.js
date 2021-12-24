import {GET_USER_INFO, ADD_PROYECTO, GET_PROYECTOS} from "./const";

const initialState={
    user: {},
    proyectos:[],
    Bugs:[],
}

export default function reducer(state=initialState, action){
   switch(action.type){
        case GET_USER_INFO:
            return{
                ...state, 
                user: action.payload 
            }
        case ADD_PROYECTO:
            return {
                ...state, 
                proyectos: action.payload,
            }
        case GET_PROYECTOS: 
            return {
                ...state, 
                proyectos: action.payload,
            }
        default: return state; 
    }
}

