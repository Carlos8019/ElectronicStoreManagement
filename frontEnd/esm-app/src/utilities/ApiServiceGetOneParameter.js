import axios from "axios";
import { baseURL } from "./Constants";
export default async function GetDataByID(path,id)
{
    return await axios.get(baseURL+path+'/'+id);
}