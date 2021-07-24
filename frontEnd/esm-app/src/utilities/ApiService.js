import axios from 'axios';
const baseURL="https://localhost:5001/Data/";
export default async function login(userName,password){
    return await axios.get(baseURL+`validateLogin/${userName}/${password}`);
    /*
    .then(response=>{
        result=response.data;
      }
    )
    .catch(error=>{
        result=error;
    })
    return result;
    */
}