import {numberPlaceDecimal} from '../utilities/Constants';
export default function FormatNumber(value)
{
    //let str=value.split(".", 2);
    //console.info(str);
    /*
        digit=digit.toString();
        return digit.indexOf(".")>0?
                digit.split(".").length>=numberPlaceDecimal?
                 digit.split(".")[0]+"."+digit.split(".")[1].substring(-1,numberPlaceDecimal)
                : digit
               : digit
               */
    //return parseFloat(value*1).toPrecision(numberPlaceDecimal);//.toFixed(numberPlaceDecimal);//parseFloat(value).toFixed(numberPlaceDecimal);
    //return parseFloat(value).toFixed(numberPlaceDecimal);
    return Number(value).toFixed(numberPlaceDecimal);
}

