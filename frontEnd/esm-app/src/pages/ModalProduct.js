import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import MethodsContext from '../contexts/MethodsContext.js';
import { BootstrapInput } from '../utilities/Constants.js';
import AddPresaleDTO from '../DTO/AddPresaleDTO';
import { addProductToPreSale, calculatePresaleItems, deleteItemPresale, FindItemInArray } from '../Redux/PresaleFormDuck.js';
import { getProductsAction } from '../Redux/ProductsDuck.js';

export default function ModalProduct() {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products.array);
    const validateProduct = useSelector(store => store.preSaleItems.validateProduct);
    const [idProduct, setIdProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const { enableButton, width, setunitValue, amount
        , setMessageForm, modal, calculateTotalUSD, messageForm
        , enabledButton2, setAmount, setEnabledButton2, unitValue
        , setTotalUsd, totalUsd, setModal } = useContext(MethodsContext);

    const handleProductButton = () => {
        var result = true;
        if (amount > 0 && idProduct !== '' && idProduct !== '-1') {
            dispatch(FindItemInArray(idProduct,0));
            if (validateProduct)
                result = false;
            else
                setMessageForm("El producto Ingresado ya existe");
        }
        setEnabledButton2(result);
    }
    const handleChangeAmount = (event) => {
        const { name, value } = event.target;
        setAmount(event.target.value);
        handleProductButton();
    }
    const handleChangeProduct = (event) => {
        setIdProduct(event.target.value);
        let findUnitPrice = products.find(({ idProduct }) => idProduct == event.target.value)
        if (findUnitPrice != null) {
            setunitValue(findUnitPrice.priceProduct);
            setNameProduct(findUnitPrice.nameProduct);
        }
        else
            setunitValue(0);

        handleProductButton();
    }
    const handleAdd = () => {
        cleanFieldsModalProduct();
        setModal(!modal);
        setMessageForm("");
    }
    const cleanFieldsModalProduct = () => {
        setIdProduct('');
        setAmount(0);
        setunitValue(0.00);
        setTotalUsd(0.00);
    }
    const handleAddPresale = () => {
        let isService=0;
        const data = AddPresaleDTO({ nameProduct, amount, unitValue, totalUsd, idProduct,isService });
        dispatch(addProductToPreSale(data,0));
        dispatch(calculatePresaleItems());
        handleAdd();
    }
    useEffect(() => {
        setMessageForm("");
        calculateTotalUSD();
        handleProductButton();
        dispatch(getProductsAction());
    }, [amount, enabledButton2, idProduct
        , enableButton, validateProduct, messageForm])

    return (
        <div>
            <div className="create">
                <button disabled={enableButton} onClick={() => handleAdd()} >Agregar Producto</button>
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
                        <p>{messageForm}</p>
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
                                    <button disabled={enabledButton2} onClick={() => handleAddPresale()} >Agregar Producto</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>

        </div>
    )
}
