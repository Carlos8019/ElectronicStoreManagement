import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientsAction } from '../Redux/clientDucks.js'
import TextField from '@material-ui/core/TextField';
import { getPaymentModeAction } from '../Redux/PaymentModeDuck.js';
import { getDeliveryTimeAction } from '../Redux/DeliveryTimeDuck.js';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import MethodsContext from '../contexts/MethodsContext.js';
import { BootstrapInput, useStyles } from '../utilities/Constants.js';
import {
    addProductToPreSale, calculatePresaleItems
    , deleteItemPresale, FindItemInArray, getAllPresales
} from '../Redux/PresaleFormDuck.js';
import ModalService from './ModalService.js';
import ModalProduct from './ModalProduct.js';
//import FormatNumber from '../utilities/FormatNumbers.js';


export default function PreSale() {
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
    const [defaultDate, setDefaultDate] = useState('');

    const handleChangeV = (event) => {
        setValidity(event.target.value);
        let validityResult = deliveryTime.find(({ idDeliveryTime }) => idDeliveryTime == event.target.value)
        if (validityResult != null)
            setValidityDays(validityResult.validityDays);
        else
            setValidityDays("");
        enabledAddProduct();
    };
    const enabledAddProduct = () => {
        if (idClient !== '' && idClient !== '-1' && defaultDate !== ''
            && idPaymentMode !== '' && idPaymentMode !== '-1'
            && validity !== '' && validity !== '-1')
            setEnableButton(false);
        else
            setEnableButton(true);
    }
    const handleChangeClient = (event) => {
        setIdClient(event.target.value);
        enabledAddProduct();
    }
    const handleChangePm = (event) => {
        setIdPaymentMode(event.target.value);
        enabledAddProduct();
    }
    const handleChageDate = (event) => {
        //console.log(event.target.value);
        setDefaultDate(event.target.value);
        enabledAddProduct();
    }
    const handleDeleteItem = (item, isService) => {
        dispatch(deleteItemPresale(item, isService));
        dispatch(calculatePresaleItems());
        dispatch(getAllPresales());
    }
    const { enableButton, modal, calculateTotalUSD, totalUsd, setTotalUsd
        , unitValue, setunitValue, amount, setAmount, messageForm, setMessageForm,
        setEnableButton, enabledButton2, setEnabledButton2, setModal, width } = useContext(MethodsContext);
    const dispatch = useDispatch();
    const clients = useSelector(store => store.clients.array);
    const paymentMode = useSelector(store => store.paymentMode.array);
    const deliveryTime = useSelector(store => store.deliveryTime.array);
    const preSaleItems = useSelector(store => store.preSaleItems.array);
    const preSaleServices = useSelector(store => store.preSaleItems.arrayServices)
    const subtotal = useSelector(store => store.preSaleItems.subTotal);
    const iva = useSelector(store => store.preSaleItems.totalIva);
    const total = useSelector(store => store.preSaleItems.total);
    const classes = useStyles();
    //console.log(preSaleServices);
    useEffect(() => {
        setMessageForm("");
        calculateTotalUSD();
        enabledAddProduct();
        //handleProductButton();
        //dispatch(getServices());
        dispatch(getClientsAction());
        dispatch(getPaymentModeAction());
        dispatch(getDeliveryTimeAction());
        dispatch(getAllPresales());
    }, [amount, enabledButton2, idClient, defaultDate
        , idPaymentMode, validity,
        , preSaleItems, subtotal, iva, total, enableButton
        , messageForm, preSaleServices])

    return (
        <>
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
                                        <option aria-label="None" value="-1">Seleccione</option>
                                        {clients.map(element => (
                                            <option value={element.idClient}>{element.nameClient}</option>
                                        ))
                                        }
                                    </NativeSelect>
                                </FormControl>
                            </td>
                            <td className="text-start">
                                <ModalProduct />
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
                                        defaultValue={defaultDate}
                                        onChange={handleChageDate}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                            </td>
                            <td className="text-end">
                                <ModalService />
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
                                        <option aria-label="None" value="-1">Seleccione</option>
                                        {paymentMode.map(element => (
                                            <option value={element.idPaymentMode}>{element.namePaymentMode}</option>
                                        ))
                                        }
                                    </NativeSelect>
                                </FormControl>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-start">Tiempo de Entrega:</td>
                            <td className="text-start">
                                <FormControl style={{ minWidth: width }} sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="demo-customized-select-native">Tiempo Entrega</InputLabel>
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
                        <tr><td className="text-start">Validez</td>
                            <td className="text-start">
                                <InputLabel readOnly name="validityDays" id="validityDays" placeholder="Validez">{validityDays} dias</InputLabel>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-responsive" >
                    <table className="table table-sm table-bordered" >
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>DESCRIPCION</th>
                                <th>Cant</th>
                                <th>Val/Unt</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {preSaleItems.map((element, i) => (
                                <tr key={i}>
                                    <td>{(i + 1)}</td>
                                    <td>{element.nameProduct}</td>
                                    <td>{element.amount}</td>
                                    <td>{element.unitValue}</td>
                                    <td>{element.totalUsd}</td>
                                    <td><button onClick={() => handleDeleteItem(element.idProduct, 0)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))
                            }
                            {preSaleServices.map((element, i) => (
                                <tr key={i}>
                                    <td>{(i + 1)}</td>
                                    <td>{element.nameProduct}</td>
                                    <td></td>
                                    <td>{element.unitValue}</td>
                                    <td>{element.totalUsd}</td>
                                    <td><button onClick={() => handleDeleteItem(element.idProduct, 1)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))
                            }
                            <tr>
                                <td></td>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="text-start">INCLUYE:</td>
                                        </tr>
                                    </table>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan="2">SUBTOTAL</td>
                                <td>{subtotal}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan="2">IVA 12%</td>
                                <td>{iva}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan="2">TOTAL</td>
                                <td>{total}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}
