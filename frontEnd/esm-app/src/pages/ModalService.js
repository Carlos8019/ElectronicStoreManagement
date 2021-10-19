import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { getServices } from '../Redux/servicesDuck';
import MethodsContext from '../contexts/MethodsContext.js';
import { BootstrapInput } from '../utilities/Constants.js';
import AddPresaleDTO from '../DTO/AddPresaleDTO';
import { addProductToPreSale, calculatePresaleItems, deleteItemPresale, FindItemInArray } from '../Redux/PresaleFormDuck.js';

export default function ModalService() {
    const dispatch = useDispatch();
    const [idServiceSelect, setIdServiceSelect] = useState('');
    const [messageFormService, setMessageFormService] = useState('');
    const [nameService,setNameService]=useState('');
    const [enabledButtonService, setEnabledButtonService] = useState(false);
    const [modalService,setModalService]=useState(false);
    const { width } = useContext(MethodsContext);

    const handleAddModalService = () => {
        setModalService(!modalService);
    }
    const handleChangeService = (event) => {
        if (event) {
            var id = event.target.value;
            if (id !== '' && id !== '-1') {
                setIdServiceSelect(id);
                let findNameService = services.find(({ idService }) => idService == id)
                if (findNameService != null) {
                    setNameService(findNameService.nameService);
                }
            }
        }
    }

    const handleAddService = () => {
        let isService=1;
        let amount=0.0;
        let unitValue=0.0;
        let totalUsd=0.0;
        //console.log(idServiceSelect,nameService);
        const data = AddPresaleDTO({ nameProduct:nameService, amount, unitValue, totalUsd, idProduct:idServiceSelect,isService });
        dispatch(addProductToPreSale(data,1));
        dispatch(calculatePresaleItems());
        handleAddModalService();
        
    }
    const services = useSelector(store => store.services.array);
    useEffect(() => {
        calculatePresaleItems();
        dispatch(getServices());
    }, [idServiceSelect, enabledButtonService,nameService])
    return (
        <div>
            <div className="create">
                <button disabled={enabledButtonService} onClick={() => handleAddModalService()} >Agregar Servicio</button>
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
                        </table>
                        <p></p>
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
                                    <button disabled={enabledButtonService} onClick={() => handleAddService()} >Agregar Servicio</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}
