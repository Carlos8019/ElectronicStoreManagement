import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import clientReducer from './clientDucks.js';
const rootReducer=combineReducers({
    clients:clientReducer
});
const composeEnhancers=compose;
export default function generateStore(){
    const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store;
}