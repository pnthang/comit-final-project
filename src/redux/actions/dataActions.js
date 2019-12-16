import {
  FETCH_BEGIN,
  FETCH_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_SLIDE_SUCCESS,
  UPDATE_CART,
  OPEN_MCART,
  CLOSE_MCART,
} from "../types";
import axios from "axios";
// Dishes

export function fetchData() {
    // const baseUrl = '/comit-final-project';

    return dispatch => {
      dispatch(fetchBegin());
      return axios
        .get(`${process.env.PUBLIC_URL}/data/dishes.json`)
        .then(res => {
          dispatch(fetchDataSuccess(res.data));
          return res.data;
        })
        .catch(error => dispatch(fetchFailure(error)));
    };
  }
  export function fetchSlide() {
    return dispatch => {
      dispatch(fetchBegin());
      return axios
        .get(`${process.env.PUBLIC_URL}/data/slides.json`)
        .then(res => {
          dispatch(fetchSlideSuccess(res.data));
          return res.data;
        })
        .catch(error => dispatch(fetchFailure(error)));
    };
  }

export const fetchBegin = () => ({
  type: FETCH_BEGIN
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload:  {data}
});

export const fetchSlideSuccess = data => ({
  type: FETCH_SLIDE_SUCCESS,
  payload:  {data}
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


