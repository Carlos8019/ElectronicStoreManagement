import { useContext, useEffect } from "react";
import ServicesContext from "../contexts/ServicesContext";
import 'react-notifications/lib/notifications.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MethodsContext from "../contexts/MethodsContext";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
export default function AddServices() {
    const { nameService, messageResult, tableServices, descriptionService
        , setMessageResult, handleSubmitServices, handleServiceChange
        , handleChangeFilterServices, messageForm, getDataServices,priceService,setPriceService } = useContext(ServicesContext);
    const { enableButton, modal, busqueda, handleChangeFilter, handleAdd, setEnableButton } = useContext(MethodsContext);
    useEffect(() => {
        setMessageResult("");
        setEnableButton(true);
        getDataServices();
        console.log("AddServices");
    }, []);
    return (
        <>
            <div className="create">
                <button onClick={() => handleAdd()} >Agregar Servicio</button>
            </div>
            <div className="App" >
                <div className="containerInput" >
                    <input className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Busqueda por servicio"
                        onChange={handleChangeFilterServices}
                    />
                    <button className="btn btn-success" >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="table-responsive" >
                    <table className="table table-sm table-bordered" >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Servicio</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tbody> {tableServices && tableServices.map((valor) =>
                        (
                            <tr key={valor.idService}>
                                <td>{valor.idService}</td>
                                <td>{valor.nameService}</td>
                                <td>{valor.priceService}</td>
                                <td>{valor.descriptionService}</td>
                            </tr >
                        ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={modal}>
                <ModalHeader>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <label>Nombre Servicio</label>
                        <input
                            type="text"
                            required
                            value={nameService}
                            onChange={(e) => handleServiceChange(e, 1)}
                        /><br/>
                        <label>Precio</label>
                        <input
                            type="number"
                            required
                            value={priceService}
                            onChange={(e) => handleServiceChange(e, 3)}
                        /><br/>
                        <label>Descripcion Servicio</label>
                        <input
                            type="text"
                            required
                            value={descriptionService}
                            onChange={(e) => handleServiceChange(e, 2)}
                        />
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
                                    <button disabled={enableButton} onClick={(e) => handleSubmitServices(e)}>Agregar Servicio</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
}