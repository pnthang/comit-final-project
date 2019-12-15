import {createStore,combineReducers, applyMiddleware,compose} from 'redux';

import thunk from 'redux-thunk';
import userReducer from './reduxers/userReduxer';
import dataReducer from './reduxers/dataReduxer';
import uiReducer from './reduxers/uiReduxer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI:uiReducer
})

const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store;