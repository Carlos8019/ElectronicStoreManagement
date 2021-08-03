import axios from 'axios';
import { baseURL } from './Constants';
export default async function postData(path,json){
     return await axios.post(baseURL+path,json,{headers: {
        'Content-Type': 'application/json'
      }});
}