import GetData from '../utilities/ApiServiceGet';
import GetDataByID from '../utilities/ApiServiceGetOneParameter';
import { GET_ALL_DELIVERY_TIMES,GET_DELIVERY_TIMES_SUCCESS } from '../utilities/Constants';
const deliveryTimeData={
    array:[]
}
export default function DeliveryTimeReducer(state=deliveryTimeData,action)
{
    switch(action.type)
    {
          case GET_DELIVERY_TIMES_SUCCESS:
            //console.info(action.payload);
            return {...state,array: action.payload}
        default: return state;          
    }
}

export const getDeliveryTimeAction=()=>async(dispatch,getState)=>{
    await GetData(GET_ALL_DELIVERY_TIMES)
           .then(resp=>{
               dispatch({
                   type:GET_DELIVERY_TIMES_SUCCESS,
                   payload:resp.data
               })
           })
           .catch(error=>console.log(error));
}

export const getValidityById=(id)=>async(dispatch,getState)=>{
    await GetDataByID(id)
           .then(resp=>{
               dispatch({
                   //type:
               })
           })
           .catch(error=>console.log(error));
}