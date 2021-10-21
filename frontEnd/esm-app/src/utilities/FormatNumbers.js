import {numberPlaceDecimal} from '../utilities/Constants';
export default function FormatNumber(value)
{
    //let str=value.split(".", 2);
    //console.info(str);
    return parseFloat(value*1);//.toFixed(numberPlaceDecimal);//parseFloat(value).toFixed(numberPlaceDecimal);
}