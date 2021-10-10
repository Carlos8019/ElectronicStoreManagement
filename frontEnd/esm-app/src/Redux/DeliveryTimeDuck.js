import GetData from '../utilities/ApiServiceGet';
import GetDataByID from '../utilities/ApiServiceGetOneParameter';
import { GET_ALL_DELIVERY_TIMES,GET_DELIVERY_TIMES_SUCCESS,GET_VALIDITY_TIME_BY_ID } from '../utilities/Constants';
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
            
          case GET_VALIDITY_TIME_BY_ID:
            let newState = Object.assign({}, state);
            /*
            newState.array.find(function(value, index) {
                console.log('Visited index ', index, ' with value ', value);
                if(value.idDeliveryTime==action.payload)
                    console.log("finded");
              });*/
            let result=newState.array.find(({idDeliveryTime})=>idDeliveryTime==action.payload);
            console.info(result.validityDays);
            return {...state,id:result}
              
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

export const getValidityById=(id)=>(dispatch,getState)=>{
    dispatch({
        type:GET_VALIDITY_TIME_BY_ID,
        payload:id
    })
    /*
    await GetDataByID(id)
           .then(resp=>{
               dispatch({
                   type:GET_VALIDITY_TIME_BY_ID,
                   payload:
               })
           })
           .catch(error=>console.log(error));
           */
}