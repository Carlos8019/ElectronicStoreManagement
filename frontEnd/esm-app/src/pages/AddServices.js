import { useContext, useEffect } from "react";
import ServicesContext from "../contexts/ServicesContext";
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MethodsContext from "../contexts/MethodsContext";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function AddServices() {

    const { nameService, messageResult, tableServices, descriptionService
        , setMessageResult, handleSubmitServices, handleServiceChange
        , handleChangeFilterServices,messageForm } = useContext(ServicesContext);
    const { enableButton, modal, busqueda, handleChangeFilter, handleAdd } = useContext(MethodsContext);
    useEffect(() => {
        setMessageResult("");
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
                        placeholder="Busqueda por nombre"
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
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th> Correo </th>
                            </tr>
                        </thead>
                        <tbody> {tableServices && tableServices.map((valor) =>
                        (
                            <tr key={valor.idService}>
                                <td>{valor.nameService}</td>
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
                    <form onSubmit={handleSubmitServices}>
                        <label>Nombre Servicio</label>
                        <input
                            type="text"
                            required
                            value={nameService}
                            onChange={(e) => handleServiceChange(e, 1)}
                        />
                        <label>Descripcion Servicio</label>
                        <input
                            type="text"
                            required
                            value={descriptionService}
                            onChange={(e) => handleServiceChange(e, 1)}
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
                                    <button disabled={enableButton} onClick={(e) => handleSubmitServices(e)}>Agregar Cliente</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>


        </>
    );
}