import {numberPlaceDecimal} from '../utilities/Constants';
export default function FormatNumber(value)
{
    return parseFloat(value).toFixed(numberPlaceDecimal);
}