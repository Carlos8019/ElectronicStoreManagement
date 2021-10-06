import GetData from '../utilities/ApiServiceGet';
import { GET_ALL_CLIENTS,GET_CLIENTS_SUCCESS } from '../utilities/Constants';
//constants
const clientsData={
    array:[]
}

//reducer
export default function clientReducer(state=clientsData,action){
    switch(action.type)
    {
        case GET_CLIENTS_SUCCESS:
            console.info(action.payload);
            return {...state,array: action.payload}
        default: return state;
    }
}

//actions
export const getClientsAction=()=>async(dispatch,getState)=>{
    await GetData(GET_ALL_CLIENTS).then(resp=>{
        dispatch({
            type:GET_CLIENTS_SUCCESS,
            payload:resp.data
    })}
    ).catch(error=>{console.log(error)});
}