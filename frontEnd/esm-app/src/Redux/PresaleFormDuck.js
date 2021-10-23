import AddPresaleDTO from '../DTO/AddPresaleDTO';
import {
    ADD_PRODUCT_TO_PRESALE, IVA, CALCULATE_PRESALE_ITEMS
    , DELETE_PRODUCT_OF_PRESALE, FIND_IDPRODUCT_IN_ARRAY_PRESALE
    , ADD_SERVICE_TO_PRESALE, DELETE_SERVICE_OF_PRESALE, GET_ALL_PRESALES
} from '../utilities/Constants';
import GetData from '../utilities/ApiServiceGet';
import FormatNumber from '../utilities/FormatNumbers';
const preSaleData = {
    array: []
    , arrayServices: []
    ,arrayCommentaries:[]
    , subTotal: 0.00
    , totalIva: 0.00
    , total: 0.00
    , validateProduct: false
}

export default function preSaleReducer(state = preSaleData, action) {
    //console.log(action.payload);
    switch (action.type) {
        case ADD_PRODUCT_TO_PRESALE:
            return { ...state, array: action.payload }
        case ADD_SERVICE_TO_PRESALE:
            return { ...state, arrayServices: action.payload }
        case CALCULATE_PRESALE_ITEMS:
            return { ...state, subTotal: action.payload.subT, totalIva: action.payload.totalIva, total: action.payload.total }
        case DELETE_PRODUCT_OF_PRESALE:
            return { ...state, array: action.payload }
        case DELETE_SERVICE_OF_PRESALE:
            return { ...state, arrayServices: action.payload }
        case FIND_IDPRODUCT_IN_ARRAY_PRESALE:
            return { ...state, validateProduct: action.payload }
        case GET_ALL_PRESALES:
            return { ...state,array:action.payload.array,arrayServices:action.payload.arrayServices }
        default: return state;
    }

}
export const getAllPresales = () => (dispatch, getState) => {
    let array=preSaleData.array;
    let arrayServices=preSaleData.arrayServices;
    dispatch(
        {
            type: GET_ALL_PRESALES,
            payload:{array:array,arrayServices:arrayServices}
        });
}
export const addProductToPreSale = (newItem = AddPresaleDTO, isService) => (dispatch, getState) => {
    //const isService = newItem.isService;
    if (isService === 0) {
        preSaleData.array.push(JSON.parse(newItem));
        dispatch({
            type: ADD_PRODUCT_TO_PRESALE,
            payload: preSaleData.array
        });

    }
    else {
        preSaleData.arrayServices.push(JSON.parse(newItem));
        dispatch({
            type: ADD_SERVICE_TO_PRESALE,
            payload: preSaleData.arrayServices
        });
    }
}
export const calculatePresaleItems = () => (dispatch, getState) => {

    let subT = 0.0;
    let totalIva = 0.0;
    let total = 0.00;
    preSaleData.array.map((element) => {
        subT += FormatNumber(element.totalUsd);
    });
    preSaleData.arrayServices.map((element)=>{
        subT += FormatNumber(element.totalUsd);
    });
    totalIva = (subT * IVA);
    total = (subT + totalIva);
    //console.log(subT, totalIva, IVA, total)

    dispatch({
        type: CALCULATE_PRESALE_ITEMS,
        payload: { subT: FormatNumber(subT), totalIva: totalIva, total: total }
    });

}
export const deleteItemPresale = (idProducto, isService) => (dispatch, getState) => {

    if (isService === 0) {
        var find = preSaleData.array.find(({ idProduct }) => idProduct === idProducto);
        const index = preSaleData.array.indexOf(find, 0);
        if (index > -1) {
            preSaleData.array.splice(index, 1);
        }
        dispatch({
            type: DELETE_PRODUCT_OF_PRESALE,
            payload: preSaleData.array
        });

    }
    else {
        var find = preSaleData.arrayServices.find(({ idProduct }) => idProduct === idProducto);
        const index = preSaleData.arrayServices.indexOf(find, 0);
        console.log(find, index);
        if (index > -1) {
            preSaleData.arrayServices.splice(index, 1);
        }
        dispatch({
            type: DELETE_SERVICE_OF_PRESALE,
            payload: preSaleData.arrayServices
        });

    }
}
export const FindItemInArray = (idProducto, isService) => (dispatch, getState) => {
    var result = false;
    if (isService === 0) {
        var find = preSaleData.array.find(({ idProduct }) => idProduct === idProducto);

        if (typeof (find) === "undefined" || find === null)
            result = true;
        dispatch({
            type: FIND_IDPRODUCT_IN_ARRAY_PRESALE,
            payload: result
        });
    }
    else {
        var find = preSaleData.arrayServices.find(({ idProduct }) => idProduct === idProducto);
        if (typeof (find) === "undefined" || find === null) {
            result = true;
        }

        dispatch({
            type: FIND_IDPRODUCT_IN_ARRAY_PRESALE,
            payload: result
        });
    }

}