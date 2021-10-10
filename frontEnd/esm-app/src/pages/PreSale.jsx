import React, { useContext } from 'react';
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
import MethodsContext from '../contexts/MethodsContext.js';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { getProductsAction } from '../Redux/ProductsDuck.js';
import AddPresaleDTO from '../DTO/AddPresaleDTO';
import { addProductToPreSale } from '../Redux/PresaleFormDuck.js';

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
    const [defaultDate, setDefaultDate] = useState('');
    const [idProduct, setIdProduct] = useState('');
    const [nameProduct,setNameProduct]=useState('');

    const handleChangeV = (event) => {
        setValidity(event.target.value);
        let validityResult = deliveryTime.find(({ idDeliveryTime }) => idDeliveryTime == event.target.value)
        if (validityResult != null)
            setValidityDays(validityResult.validityDays);
        else
            setValidityDays("");
    };
    const handleChangeClient = (event) => {
        setIdClient(event.target.value);
    };
    const handleChangeProduct = (event) => {
        setIdProduct(event.target.value);
        
        let findUnitPrice = products.find(({ idProduct }) => idProduct == event.target.value)
        if (findUnitPrice != null)
        {
            setunitValue(findUnitPrice.priceProduct);
            setNameProduct(findUnitPrice.nameProduct);
        }
        else
            setunitValue(0);
    }
    const handleAddPresale=()=>{
        const data=AddPresaleDTO({nameProduct,amount,unitValue,totalUsd});
        dispatch(addProductToPreSale(data));
        //console.log(preSaleItems);
        handleAdd();
    }
    const handleChangeAmount = (event) => {
        const {name,value}=event.target;
         console.log([name],value);
         //setAmount(state=>({...state,amount:value}));
         setAmount(event.target.value);
    }    
    const handleChangePm = (event) => {
        setIdPaymentMode(event.target.value);
    };
    const { enableButton, modal, calculateTotalUSD,totalUsd, setTotalUsd,unitValue, setunitValue,amount, setAmount, handleAdd, setEnableButton } = useContext(MethodsContext);
    const dispatch = useDispatch();
    const clients = useSelector(store => store.clients.array);
    const paymentMode = useSelector(store => store.paymentMode.array);
    const deliveryTime = useSelector(store => store.deliveryTime.array);
    const products = useSelector(store => store.products.array);
    const preSaleItems=useSelector(store=>store.preSaleItems.array)
    const classes = useStyles();

    useEffect(() => {
        calculateTotalUSD();
        dispatch(getClientsAction());
        dispatch(getPaymentModeAction());
        dispatch(getDeliveryTimeAction());
        dispatch(getProductsAction());
    }, [amount,idProduct])

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
                        <tr>
                            <td className="text-start">
                                <div className="create">
                                    <button onClick={() => handleAdd()} >Agregar Producto</button>
                                </div>
                            </td>
                            <td></td>
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
                            </tr>
                        </thead>
                        <tbody>
                            {preSaleItems.map((element)=>{
                                    <tr>
                                    <td></td>
                                    <td>element.nameProduct</td>
                                    <td>element.amount</td>
                                    <td>element.unitValue</td>
                                    <td>element.totalUsd</td>
                                    </tr>
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan="2">SUBTOTAL</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan="2">IVA 12%</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan="2">TOTAL</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <Modal isOpen={modal}>
                <ModalHeader>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <table>
                            <tr>
                                <td>
                                    <label>Producto</label>
                                </td>
                                <td>
                                    <FormControl style={{ minWidth: width }} sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-select-native">Producto</InputLabel>
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            value={idProduct}
                                            onChange={handleChangeProduct}
                                            input={<BootstrapInput />}
                                        >
                                           <option aria-label="None" value="-1">Seleccione</option>
                                            {products.map(element => (
                                                <option value={element.idProduct}>{element.nameProduct}</option>
                                            ))
                                            }
                                        </NativeSelect>
                                    </FormControl>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Cantidad</label>
                                </td>
                                <td>
                                    <TextField style={{ minWidth: width }}
                                        required
                                        id="standard-required"
                                        label="Requerido"
                                        type="number"
                                        variant="standard"
                                        value={amount}
                                        onChange={handleChangeAmount}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Valor Unitario</label>
                                </td>
                                <td>
                                    <TextField
                                        id="unitValue"
                                        label="Valor Unitario"
                                        defaultValue={unitValue}
                                        value={unitValue}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                        size="small"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Total USD</label>
                                </td>
                                <td>
                                    <TextField size="small"
                                        id="totalUsd"
                                        label="Total en USD"
                                        defaultValue={totalUsd}
                                        value={totalUsd}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </td>

                            </tr>

                        </table>
                        <p></p>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <div className="create">
                        <table>
                            <tr>
                                <td>
                                    <button onClick={() => handleAdd()}>Cancelar</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleAddPresale()} >Agregar Producto</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}
