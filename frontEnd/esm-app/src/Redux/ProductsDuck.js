import GetData from '../utilities/ApiServiceGet';
import {GET_PRODUCTS,GET_ALL_PRODUCTS} from '../utilities/Constants';
const productData={
    array:[]
}

export default function productReducer(state=productData,action){
    switch(action.type)
    {
        case GET_PRODUCTS:
            return {...state, array:action.payload}
        default: return state;
    }
}

export const getProductsAction=()=>async(dispacth,getState)=>{
    await GetData(GET_ALL_PRODUCTS)
    .then(resp=>{
        dispacth({
                type:GET_PRODUCTS,
                payload: resp.data
        });
    })
    .catch(error=>console.log(error))
}