import axios from 'axios';
import { baseURL } from './Constants';
export default async function postData(json){
     return await axios.post(baseURL+'saveClient',json,{headers: {
        'Content-Type': 'application/json'
      }});
}