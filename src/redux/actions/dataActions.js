import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_CART,
  OPEN_MCART,
  CLOSE_MCART,
  SET_FAVORITE,
  SET_UNFAVORITE
} from "../types";
import axios from "axios";
// Dishes

export function fetchData() {
    return dispatch => {
      dispatch(fetchDataBegin());
      return axios
        .get("/comit-final-project/data/dishes.json")
       // .then(handleErrors)
        .then(res => {
            console.log(res.data);
          dispatch(fetchDataSuccess(res.data));
          return res.data;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
  }

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload:  {data}
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});
export const updateCart = data => ({
  type: UPDATE_CART,
  payload:  {data}
});
export const openMCart = () => ({
  type: OPEN_MCART
});
export const closeMCart = () => ({
  type: CLOSE_MCART
});

// Favorite
export const setFavorite = (code) =>(dispatch)=>{
    //data.favorite = !data.favorite;
    // console.log(data);
    dispatch({
      type: SET_FAVORITE,
      payload: code
    })
};


export const setUnFavorite = (data) => ({
  type: SET_UNFAVORITE,
  payload: data
});
