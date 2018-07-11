import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createReducer from './createReducer';

export default function configureStore(initialState = {}, isServer) {
    const middlewares = [thunkMiddleware];

    if(process.env.NODE_ENV !== 'production' && !isServer){
        middlewares.push(createLogger({
            collapsed: true
        }))
    };

    const enhancers = applyMiddleware(...middlewares);

    const store = createStore(
        createReducer(),
        initialState,
        enhancers
    );

    return store;
}