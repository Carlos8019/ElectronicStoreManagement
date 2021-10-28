import AddPresaleDTO from '../DTO/AddPresaleDTO';
import {
    ADD_PRODUCT_TO_PRESALE, IVA, CALCULATE_PRESALE_ITEMS
    , DELETE_PRODUCT_OF_PRESALE, FIND_IDPRODUCT_IN_ARRAY_PRESALE
    , ADD_SERVICE_TO_PRESALE, DELETE_SERVICE_OF_PRESALE, GET_ALL_PRESALES
    ,ADD_COMMENT_TO_PRESALE,DELETE_COMMENT_OF_PRESALE,GET_PRESALE_COMMENTS
    ,CLEAR_PRESALE_ARRAYS
} from '../utilities/Constants';
import GetData from '../utilities/ApiServiceGet';
import FormatNumber from '../utilities/FormatNumbers';
const preSaleData = {
    array: []
    , arrayServices: []
    , arrayCommentaries:[]
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
            return { ...state,arrayCommentaries:action.payload.arrayCommentaries, subTotal: action.payload.subT, totalIva: action.payload.totalIva, total: action.payload.total }
        case DELETE_PRODUCT_OF_PRESALE:
            return { ...state, array: action.payload }
        case DELETE_SERVICE_OF_PRESALE:
            return { ...state, arrayServices: action.payload }
        case FIND_IDPRODUCT_IN_ARRAY_PRESALE:
            return { ...state, validateProduct: action.payload }
        case GET_PRESALE_COMMENTS:
            return {...state, arrayCommentaries:action.payload }
        case GET_ALL_PRESALES:
            return { ...state,array:action.payload.array,arrayServices:action.payload.arrayServices, arrayCommentaries:action.payload.arrayCommentaries }
        case ADD_COMMENT_TO_PRESALE:
            //console.log("action",action.payload);
            return {...state,arrayCommentaries:action.payload}
        case DELETE_COMMENT_OF_PRESALE:
            return {...state,arrayCommentaries:action.payload}
        case CLEAR_PRESALE_ARRAYS:
            return {...state,array:action.payload.array,arrayCommentaries:action.payload.arrayCommentaries
                ,arrayServices:action.payload.arrayServices,subTotal:action.payload.subTotal
                ,totalIva:action.payload.totalIva,total:action.payload.total,validateProduct:action.payload.validateProduct}
        default: return state;
    }

}
export const getPresaleComments=()=>(dispatch,getState)=>{
    dispatch({
        type:GET_PRESALE_COMMENTS,
        payload: preSaleData.arrayServices
    })
}
export const getAllPresales = () => (dispatch, getState) => {
    let array=preSaleData.array;
    let arrayServices=preSaleData.arrayServices;
    let arrayCommentaries=preSaleData.arrayCommentaries;
    dispatch(
        {
            type: GET_ALL_PRESALES,
            payload:{array:array,arrayServices:arrayServices,arrayCommentaries:arrayCommentaries}
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
export const addCommentaries=(comment)=>(dispatch,getState)=>{
    var data={comment:comment}
    preSaleData.arrayCommentaries.push(data);
    dispatch({
        type: ADD_COMMENT_TO_PRESALE,
        payload:preSaleData.arrayCommentaries
    });
}
export const calculatePresaleItems = () => (dispatch, getState) => {

    let subTotal = FormatNumber(0.00);
    let totalIva = 0.00;
    let total = 0.00;
    //const reducer=(previousValue,currentValue)=>previousValue+currentValue;
    
    preSaleData.array.map((element) => {
        console.log("loop",element.totalUsd,subTotal);
        subTotal =FormatNumber(subTotal)+FormatNumber(element.totalUsd);
    });
    /*
    subT=preSaleData.array.reduce(function(accumulator,currentValue){
        return accumulator+currentValue.totalUsd;
    },0.0);*/
    //preSaleData.array.reduce(reducer)
    /*
    preSaleData.arrayServices.map((element)=>{
        subT =FormatNumber(subT)+ FormatNumber(element.totalUsd);
    });
    */
    totalIva = (FormatNumber(subTotal) * FormatNumber(IVA));
    total = (FormatNumber(subTotal) + FormatNumber(totalIva));
    console.log(subTotal, totalIva, IVA, total)
    //console.log(preSaleData.arrayCommentaries);
    dispatch({
        type: CALCULATE_PRESALE_ITEMS,
        payload: { subT: FormatNumber(subTotal), totalIva: FormatNumber(totalIva), total: FormatNumber(total),arrayCommentaries:preSaleData.arrayCommentaries }
    });

}
export const deleteItemCommentaries=(index)=>(dispatch,getState)=>{
    preSaleData.arrayCommentaries.splice(index,1);
    dispatch({
        type:DELETE_COMMENT_OF_PRESALE,
        payload: preSaleData.arrayCommentaries
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

export const clearPresaleArrays=()=>(dispatch,getState)=>{
    preSaleData.array.length=0;//.splice();
    preSaleData.arrayCommentaries.length=0;//.splice();
    preSaleData.arrayServices.length=0;//.splice();
    preSaleData.subTotal=0.00;
    preSaleData.totalIva=0.00;
    preSaleData.total=0.00;
    preSaleData.validateProduct=false;    
    dispatch({
        type: CLEAR_PRESALE_ARRAYS,
        payload:{array:preSaleData.array,arrayCommentaries:preSaleData.arrayCommentaries
                ,arrayServices:preSaleData.arrayServices,subTotal:preSaleData.subTotal
                ,totalIva:preSaleData.totalIva,total:preSaleData.total,validateProduct:preSaleData.validateProduct}

    })
}