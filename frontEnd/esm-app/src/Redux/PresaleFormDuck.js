import AddPresaleDTO from '../DTO/AddPresaleDTO';
import {ADD_PRODUCT_TO_PRESALE} from '../utilities/Constants';
import GetData from '../utilities/ApiServiceGet';
const preSaleData = {
    array: []
}

export default function preSaleReducer(state = preSaleData, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_PRESALE:
            //console.log(action.payload);
            return { ...state, array: action.payload }
        default: return state;
    }

}

export const addProductToPreSale = (newItem = AddPresaleDTO) => (dispatch, getState) => {
    preSaleData.array.push(newItem);
    dispatch({
        type: ADD_PRODUCT_TO_PRESALE,
        payload: newItem
    });
}