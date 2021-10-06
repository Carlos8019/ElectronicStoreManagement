import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import clientReducer from './clientDucks.js';
import PaymentModeReducer from './PaymentModeDuck.js';
import DeliveryTimeReducer from './DeliveryTimeDuck';
const rootReducer=combineReducers({
    clients:clientReducer,
    paymentMode:PaymentModeReducer,
    deliveryTime:DeliveryTimeReducer

});
const composeEnhancers=compose;
export default function generateStore(){
    const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store;
}