import axios from 'axios';
export const FETCH_CHUCK_START = "FETCH_CHUCK_START";
export const FETCH_CHUCK_SUCCESS = "FETCH_CHUCK_SUCCESS";
export const FETCH_CHUCK_FAILURE = "FETCH_CHUCK_FAILURE";

export const getChuck = () => {
      return dispatch => {
            dispatch({type: FETCH_CHUCK_START});
            axios.get("https://api.chucknorris.io/jokes/random")
            .then( res => { console.log(res)
                  dispatch({ type: FETCH_CHUCK_SUCCESS, payload: res.data }) 
            })
            .catch(error => dispatch({type: FETCH_CHUCK_FAILURE, payload: error.response}))

      }
} 