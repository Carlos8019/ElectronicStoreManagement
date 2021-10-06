import GetData from '../utilities/ApiServiceGet';
import {GET_ALL_PAYMENT_MODE,GET_PAYMENT_MODE_SUCCESS} from '../utilities/Constants';

const paymetModeData={
    array:[]
}

export default function PaymentModeReducer(state=paymetModeData,action)
{
    switch(action.type)
    {
        case GET_PAYMENT_MODE_SUCCESS:
            return {...state,array: action.payload}
        default:
            return state;
    }
}

export const getPaymentModeAction=()=>async(dispatch,getState)=>{
    await GetData(GET_ALL_PAYMENT_MODE)
          .then(resp=>{
              dispatch({
                  type:GET_PAYMENT_MODE_SUCCESS,
                  payload:resp.data
              })
          })
          .catch(error=>{
              console.log(error)
          });
}