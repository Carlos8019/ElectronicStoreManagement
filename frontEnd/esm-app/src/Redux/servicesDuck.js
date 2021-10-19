import GetData from '../utilities/ApiServiceGet'
import { GET_ALL_SERVICES, GET_SERVICES } from '../utilities/Constants'

const servicesData = {
    array: []
}
export default function servicesReducer(state = servicesData, action) {
    switch (action.type) {
        case GET_SERVICES:
            return {...state,array:action.payload}
        default:
            return state;
    }
}

export const getServices = () => async (dispatch, getState) => {
    await GetData(GET_ALL_SERVICES).then(
        (resp) => {
            dispatch({
                type: GET_SERVICES,
                payload: resp.data
            })
        }
    )
    .catch(error => console.log(error));
}
