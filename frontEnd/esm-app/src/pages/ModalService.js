import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { getServices } from '../Redux/servicesDuck';
import MethodsContext from '../contexts/MethodsContext.js';
import { BootstrapInput } from '../utilities/Constants.js';
//import AddPresaleDTO from '../DTO/AddPresaleDTO';
import { addProductToPreSale, calculatePresaleItems, getAllPresales, FindItemInArray } from '../Redux/PresaleFormDuck.js';
import TextField from '@material-ui/core/TextField';

export default function ModalService() {
    const dispatch = useDispatch();
    const validateProduct = useSelector(store => store.preSaleItems.validateProduct);
    const services = useSelector(store => store.services.array);    
    const [idServiceSelect, setIdServiceSelect] = useState('');
    const [nameService,setNameService]=useState('');
    const [priceService,setPriceService]=useState(0.00);
    const [enabledButtonService, setEnabledButtonService] = useState(false);
    const [enabledAddButtonService,setEnabledAddButtonService]= useState(false);
    //const [modalService,setModalService]=useState(false);
    const [messageFormService,setMessageFormService]=useState('')
    const {addNewItemPreSale,width,enableButton,modalService,setModalService,setAmount,setunitValue,setTotalUsd,amount,calculateTotalUSD } = useContext(MethodsContext);

    const handleAddModalService = () => {
        cleanFieldsModalProduct();
        setModalService(!modalService);
        setMessageFormService('')
    }

    const handleChangeService = (event) => {
        if (event) {
            var id = event.target.value;
            setIdServiceSelect(id);
            console.log(id);
            if (id !== '' && id !== '-1' && id !== "0") {                
                let findNameService = services.find(({ idService }) => idService == id)
                if (findNameService != null) {
                    setNameService(findNameService.nameService);
                    setPriceService(findNameService.priceService);
                }
            }
            handleServiceButton();
        }
    }

    const handleAddService = () => {
        let isService=1;
        let amount=0.0;
        let unitValue=priceService;
        let totalUsd=priceService;
        const data = addNewItemPreSale(nameService,amount,unitValue,totalUsd,idServiceSelect,isService);
        //AddPresaleDTO({ nameProduct:nameService, amount, unitValue, totalUsd, idProduct:idServiceSelect,isService });
        dispatch(addProductToPreSale(data,isService));
        dispatch(calculatePresaleItems());
        handleAddModalService();
        
        
    }
    const cleanFieldsModalProduct = () => {
        setIdServiceSelect('');
        //setMessageFormService("");
        setAmount(0);
        setunitValue(0.00);
        setTotalUsd(0.00);
    }
    const handleServiceButton = () => {
        var result = true;
        if (idServiceSelect !== '' && idServiceSelect !== '-1' && idServiceSelect !== "0") {
            dispatch(FindItemInArray(idServiceSelect,1));
            if (validateProduct)
                result = false;
            else
                setMessageFormService("El servicio seleccionado ya existe");
        }
        setEnabledAddButtonService(result);
    }
    useEffect(() => {
        setMessageFormService("");
        calculateTotalUSD();
        handleServiceButton();
        dispatch(getServices());
        //calculateTotalUSD();
        dispatch(getAllPresales());
    }, [amount,priceService,idServiceSelect,validateProduct, enableButton
        ,enabledAddButtonService,nameService,messageFormService])
    return (
        <div>
            <div className="create">
                <button disabled={enableButton} onClick={() => handleAddModalService()} >Agregar Servicio</button>
            </div>
            <Modal isOpen={modalService}>
                <ModalHeader>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <table>
                            <tr>
                                <td>
                                    <label>Servicio</label>
                                </td>
                                <td>
                                <FormControl style={{ minWidth: width }} sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-select-native">Servicio</InputLabel>
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            value={idServiceSelect}
                                            onChange={handleChangeService}
                                            input={<BootstrapInput />}
                                        >
                                            <option aria-label="None" value="0">Seleccione</option>
                                            {services.map(element => (
                                                <option value={element.idService}>{element.nameService}</option>
                                            ))
                                            }
                                        </NativeSelect>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Valor</label>
                                </td>
                                <td>
                                    <TextField
                                        id="priceService"
                                        label="Valor"
                                        defaultValue={priceService}
                                        value={priceService}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                        size="small"
                                    />
                                </td>
                            </tr>                            
                        </table>
                        <p>{messageFormService}</p>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <div className="create">
                        <table>
                            <tr>
                                <td>
                                    <button onClick={() => handleAddModalService()}>Cancelar</button>
                                </td>
                                <td>
                                    <button disabled={enabledAddButtonService} onClick={() => handleAddService()} >Agregar Servicio</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}
