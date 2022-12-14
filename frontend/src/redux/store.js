import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import userReducer from './userDucks.js';
import estateReducer from './estateDucks.js';

const rootReducer = combineReducers({
    user: userReducer,
    estate: estateReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}