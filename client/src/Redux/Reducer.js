import { ACCEPTED, GET_USER_INFO} from "./const";

const initialState={
    access: false, 
    user: {},
    proyectos:[],
    Bugs:[],
}

export default function Reducer(state=initialState, action){
    switch(action.type){
        case ACCEPTED:
            return{
                ...state,
                access: true
            }
        case GET_USER_INFO:
            return {
                ...state, 
                user: action.payload
            }
        default: return state; 
    }
}