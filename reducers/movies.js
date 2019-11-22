import {  LOAD_MOVIES,LOAD_ONE_MOVIE } from "../actions/type";

const initialState = {
  movies:[],
  movie:[]
}

export default function(state = initialState,action){
  switch(action.type) {
    
     case LOAD_MOVIES:
         return{
          ...state,
          movies:action.payload
         }  
      case LOAD_ONE_MOVIE:
        return{
          ...state,
          movie:action.payload
        }    
        default:
            return state
  }
}