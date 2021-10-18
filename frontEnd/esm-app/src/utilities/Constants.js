import InputBase from '@material-ui/core/InputBase';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export const baseURL="https://localhost:5001/Data/";
export const IVA=0.12;
export const numberPlaceDecimal=2;
//api paths
export const GET_ALL_CLIENTS="getAllClients";
export const GET_ALL_PAYMENT_MODE="getAllPaymentMode";
export const GET_ALL_DELIVERY_TIMES="getAllDeliveryTimes";
export const GET_VALIDITY_BY_ID_DELIVERY_TIME="getValidityById";
export const GET_ALL_PRODUCTS="getAllProducts";
export const GET_ALL_SERVICES="getAllServices";
//types
export const GET_PAYMENT_MODE_SUCCESS="GET_PAYMENT_MODE_SUCCESS";
export const GET_CLIENTS_SUCCESS='GET_CLIENTS_SUCCESS';
export const GET_DELIVERY_TIMES_SUCCESS='GET_DELIVERY_TIMES_SUCCESS';
export const GET_VALIDITY_TIME_BY_ID='GET_VALIDITY_TIME_BY_ID';
export const GET_PRODUCTS="GET_PRODUCTS";
export const ADD_PRODUCT_TO_PRESALE="ADD_PRODUCT_TO_PRESALE";
export const CALCULATE_PRESALE_ITEMS="CALCULATE_PRESALE_ITEMS";
export const DELETE_PRODUCT_OF_PRESALE="DELETE_PRODUCT_OF_PRESALE";
export const FIND_IDPRODUCT_IN_ARRAY_PRESALE="FIND_IDPRODUCT_IN_ARRAY_PRESALE";
export const GET_SERVICES="GET_SERVICES";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));
