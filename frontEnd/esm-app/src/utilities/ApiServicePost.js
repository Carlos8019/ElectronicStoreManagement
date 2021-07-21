import axios from 'axios';
const baseURL="https://localhost:5001/Data/";
export default async function postData(json){
     return await axios.post(baseURL+'saveClient',json,{headers: {
        'Content-Type': 'application/json'
      }});
    /*
      .then(response=>{
        return response;
    })
    .catch(error=>{
        return error;
    })
    */
}