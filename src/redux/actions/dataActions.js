import {
  FETCH_BEGIN,
  FETCH_FAILURE,
  FETCH_DATA_LOADED,
  FETCH_DATA_SUCCESS,
  FETCH_SLIDE_SUCCESS,
  UPDATE_PRICE,
  UPDATE_SEARCH,
  UPDATE_CART,
  OPEN_MCART,
  CLOSE_MCART
} from "../types";
import axios from "axios";

export function calLastPrice(dish) {
  let {basePrice, includes} = dish;
  let lastPrice = basePrice;
  includes.forEach(function(include){
     if(!!include.options){
       lastPrice = parseInt(lastPrice)+ parseInt(include.options[includes.optionSelected].ajustPrice);
     }
  });
}
// Dishes
export function doSearch(searchText) {
  return (dispatch, getState) => {
    const {
      data: { data }
    } = getState();

    let filteredDishes = data.filter(function(dish) {
      if (dish.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    dispatch(fetchDataSuccess(filteredDishes));
    dispatch(updateSearch(searchText));
  };
}
export function fetchData() {
  // const baseUrl = '/comit-final-project';
  return dispatch => {
    dispatch(fetchBegin());
    return axios
      .get(`${process.env.PUBLIC_URL}/data/dishes.json`)
      .then(res => {
        dispatch(fetchDataLoaded(res.data));
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

export const fetchDataLoaded = data => ({
  type: FETCH_DATA_LOADED,
  payload: { data }
});
export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchSlideSuccess = data => ({
  type: FETCH_SLIDE_SUCCESS,
  payload: { data }
});

export const updateSearch = data => ({
  type: UPDATE_SEARCH,
  payload: { data }
});

export const updateCart = data => ({
  type: UPDATE_CART,
  payload: { data }
});
export const openMCart = () => ({
  type: OPEN_MCART
});
export const closeMCart = () => ({
  type: CLOSE_MCART
});
