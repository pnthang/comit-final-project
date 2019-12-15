import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_CART,
  CLOSE_MCART,
  OPEN_MCART,
  SET_FAVORITE,
  SET_UNFAVORITE
} from "../types";

const initialState = {
  favorite: "0",
  loading: false,
  dishes: [],
  cart:[],
  mcart: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dishes: action.payload.data
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        dishes: []
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload.data,
        mcart:true
      };
    case OPEN_MCART:
      return {
        ...state,
        mcart:true
      };
    case CLOSE_MCART:
      return {
        ...state,
        mcart:false
      };
    case SET_FAVORITE:
    case SET_UNFAVORITE:
      let index = state.dishes.findIndex((d)=>d.code === action.payload.code);
      state.dishes[index].favorite = "1";
      // console.log(state.dishes[index]);
      return state.dishes.map(d =>
        d.code === action.code ? { ...d, favorite: !d.favorite } : d);

    default:
      return state;
  }
}
