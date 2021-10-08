import React from 'react';
import { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientsAction } from '../Redux/clientDucks.js'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getPaymentModeAction } from '../Redux/PaymentModeDuck.js';
import { getDeliveryTimeAction } from '../Redux/DeliveryTimeDuck.js';

import { styled } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
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

export default function PreSale() {
    const [width, setwidth] = useState(210);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [dropdownOpenPM, setDropdownOpenPM] = useState(false);
    const togglePM = () => setDropdownOpenPM(prevState => !prevState);

    const [dropdownOpenDT, setDropdownOpenDT] = useState(false);
    const toggleDT = () => setDropdownOpenDT(prevState => !prevState);

    const [validity, setValidity] = useState('');
    const [idPaymentMode, setIdPaymentMode] = useState('');
    const [idClient, setIdClient] = useState('');
    const [validityDays, setValidityDays] = useState('');

    const handleChangeV = (event) => {
        setValidity(event.target.value);
        console.log(event.target.value);
    };
    const handleChangeClient = (event) => {
        console.log(event.target.id);
        setIdClient(event.target.value);
    };

    const handleChangePm = (event) => {
        setIdPaymentMode(event.target.value);
    };

    const dispatch = useDispatch();
    const clients = useSelector(store => store.clients.array);
    const paymentMode = useSelector(store => store.paymentMode.array);
    const deliveryTime = useSelector(store => store.deliveryTime.array);

    const classes = useStyles();

    useEffect(() => {
        dispatch(getClientsAction());
        dispatch(getPaymentModeAction());
        dispatch(getDeliveryTimeAction());
    }, [])

    return (
        <div className="App">
            <table className="table-striped">
                <tbody>
                    <tr>
                        <td className="text-start">Cliente:</td>
                        <td className="text-start">
                            <FormControl style={{ minWidth: width }} sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">Cliente</InputLabel>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={idClient}
                                    onChange={handleChangeClient}
                                    input={<BootstrapInput />}
                                >
                                    <option aria-label="None" value="" />
                                    {clients.map(element => (
                                        <option value={element.idClient}>{element.nameClient}</option>
                                    ))
                                    }
                                </NativeSelect>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-start">Fecha:</td>
                        <td className="text-start">
                            <form className={classes.container} noValidate>
                                <TextField
                                    id="date"
                                    label="Fecha"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-start">Modo de Pago:</td>
                        <td className="text-start">
                            <FormControl style={{ minWidth: width }} sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">Modo de Pago</InputLabel>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={idPaymentMode}
                                    onChange={handleChangePm}
                                    input={<BootstrapInput />}
                                >
                                    <option aria-label="None" value="" />
                                    {paymentMode.map(element => (
                                        <option value={element.idPaymentMode}>{element.namePaymentMode}</option>
                                    ))
                                    }
                                </NativeSelect>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-start">Validez:</td>
                        <td className="text-start">
                            <FormControl style={{ minWidth: width }} sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-select-native">Validez</InputLabel>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={validity}
                                    onChange={handleChangeV}
                                    input={<BootstrapInput />}
                                >
                                    <option aria-label="None" value="-1">Seleccione</option>
                                    {deliveryTime.map(element => (
                                        <option value={element.idDeliveryTime} id={element.validityDays} >{element.nameDeliveryTime}</option>
                                    ))
                                    }
                                </NativeSelect>
                            </FormControl>
                        </td>
                    </tr>
                    <tr><td className="text-start">Dias de validez</td>
                        <td className="text-start">
                            <InputLabel readOnly name="validityDays" id="validityDays" placeholder="Validez">{validityDays}</InputLabel>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
