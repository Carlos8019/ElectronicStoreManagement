import {numberPlaceDecimal} from '../utilities/Constants';
export default function FormatNumber(value)
{
    return parseFloat(value*1);//.toFixed(numberPlaceDecimal);//parseFloat(value).toFixed(numberPlaceDecimal);
}