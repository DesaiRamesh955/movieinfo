import {LOAD_MOVIES,SHOW_MOVIES,LOAD_ONE_MOVIE} from '../actions/type'
import axios from 'axios'

export const SearchMovies = (name) => (dispatch,getState )=>{
   
    axios.get(`https://www.omdbapi.com?apikey=acd04d76&s=${name}`)
    .then(res => {
        let moviesList = res.data
        dispatch({
            type:LOAD_MOVIES,
            payload:moviesList,
            status:false
        })
    })
}
export const getOneMovie = (id) => dispatch=>{
    axios.get(`https://www.omdbapi.com?apikey=acd04d76&i=${id}`)
    .then(res => {
        dispatch({
            type:LOAD_ONE_MOVIE,
            payload:res.data
        })
    })
}
