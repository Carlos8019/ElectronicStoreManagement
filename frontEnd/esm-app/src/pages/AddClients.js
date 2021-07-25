import '../styles/forms.css';
import React, { useContext, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import GridClients from './GridClients';
import FormClients from './FormClients';
import ClientContext, { ClientProvider } from '../contexts/ClientContext';
function AddClients() {
    const {enableButton,handleSubmit}=useContext(ClientContext);
    const [modal, setModal] = useState(false);
    const handleAdd = () => {
        setModal(!modal);
    }
    return (
        <>
            <div className="create">
                <button onClick={() => handleAdd()} >Agregar Cliente</button>
            </div>
            <GridClients />
            <Modal isOpen={modal}>
                <ModalHeader>
                </ModalHeader>
                <ModalBody><FormClients /></ModalBody>
                <ModalFooter>
                    <div className="create">
                        <button onClick={() => handleAdd()}>Cancelar</button>
                        <button disabled={enableButton} onClick={(e) => handleSubmit(e)}>Agregar Cliente</button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default AddClients;
