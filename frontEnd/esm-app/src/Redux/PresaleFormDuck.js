import AddPresaleDTO from '../DTO/AddPresaleDTO';
import {ADD_PRODUCT_TO_PRESALE,IVA,CALCULATE_PRESALE_ITEMS,DELETE_PRODUCT_OF_PRESALE} from '../utilities/Constants';
import GetData from '../utilities/ApiServiceGet';
import FormatNumber from '../utilities/FormatNumbers';
const preSaleData = {
    array: []
    ,subTotal:0.00
    ,totalIva:0.00
    ,total:0.00
}

export default function preSaleReducer(state = preSaleData, action) {
    //console.log(action.payload);
    switch (action.type) {
        case ADD_PRODUCT_TO_PRESALE:
            return { ...state, array: action.payload }
        case CALCULATE_PRESALE_ITEMS:
            return {...state,subTotal:action.payload.subT,totalIva:action.payload.totalIva,total:action.payload.total}
        case DELETE_PRODUCT_OF_PRESALE:
            return {...state,array:action.payload}
        default: return state;
    }

}

export const addProductToPreSale = (newItem = AddPresaleDTO) => (dispatch, getState) => {
    preSaleData.array.push(JSON.parse(newItem));
    dispatch({
        type: ADD_PRODUCT_TO_PRESALE,
        payload: preSaleData.array
    });
}
export const calculatePresaleItems=()=>(dispatch,getState)=>{
    
    let subT=0.0;
    let totalIva=0.0;
    let total=0.00;
    preSaleData.array.map((element) => {
        subT+=FormatNumber(element.totalUsd);
    });
    totalIva=(subT*IVA);
    total=(subT+totalIva);
    console.log(subT,totalIva,IVA,total)
    
    dispatch({
        type:CALCULATE_PRESALE_ITEMS,
        payload:{subT:FormatNumber(subT),totalIva:totalIva,total:total}
    });
   
}
export const deleteItemPresale=(idProducto)=>(dispatch,getState)=>{
    var find=preSaleData.array.find(({idProduct})=> idProduct===idProducto);
    const index = preSaleData.array.indexOf(find, 0);
    if (index > -1) {
        preSaleData.array.splice(index,1);
    }
    dispatch({
        type:DELETE_PRODUCT_OF_PRESALE,
        payload:preSaleData.array
    });
    //console.log(find,index,preSaleData.array);
}