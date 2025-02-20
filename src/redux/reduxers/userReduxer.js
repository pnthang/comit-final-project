import {SET_USER,SET_ERRORS, CLEAR_ERROR,LOADING_UI, SET_AUTHENTICATED, SET_UDAUTHENTICATED} from '../types'

const initialState = {
    authenticated:false,
    credentials:{},
    likes:[],
    notifications:[]
};

export default function(state=initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UDAUTHENTICATED:
            return initialState;
        case SET_USER:
            return{
                authenticated:true,
                ...action.payload
            }
        default:
            return state;
    }
}
