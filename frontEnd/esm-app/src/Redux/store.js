import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import clientReducer from './clientDucks.js';
import PaymentModeReducer from './PaymentModeDuck.js';
import DeliveryTimeReducer from './DeliveryTimeDuck';
import productReducer from './ProductsDuck.js';
import preSaleReducer from './PresaleFormDuck.js';
import servicesReducer from './servicesDuck.js';
const rootReducer=combineReducers({
    clients:clientReducer,
    paymentMode:PaymentModeReducer,
    deliveryTime:DeliveryTimeReducer,
    products:productReducer,
    preSaleItems:preSaleReducer,
    services:servicesReducer
});
const composeEnhancers=compose;
export default function generateStore(){
    const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store;
}