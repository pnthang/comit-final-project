import {
  FETCH_BEGIN,
  FETCH_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_SLIDE_SUCCESS,
  UPDATE_CART,
  CLOSE_MCART,
  OPEN_MCART
} from "../types";

const initialState = {
  favorite: "0",
  loading: false,
  dishes: [],
  slides: [],
  cart: [],
  mcart: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        dishes: []
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dishes: action.payload.data
      };
    case FETCH_SLIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        slides: action.payload.data
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload.data,
        mcart: true
      };
    case OPEN_MCART:
      return {
        ...state,
        mcart: true
      };
    case CLOSE_MCART:
      return {
        ...state,
        mcart: false
      };

    default:
      return state;
  }
}
