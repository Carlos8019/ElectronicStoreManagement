import '../styles/forms.css';
import React, { useContext, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import GridClients from './GridClients';
import FormClients from './FormClients';
import ClientContext, { ClientProvider } from '../contexts/ClientContext';
import MethodsContext from '../contexts/MethodsContext';
function AddClients() {
    const { handleSubmitClient } = useContext(ClientContext);
    const{enableButton,modal,handleAdd}=useContext(MethodsContext);
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
                        <table>
                            <tr>
                                <td>
                                    <button onClick={() => handleAdd()}>Cancelar</button>
                                </td>
                                <td>
                                    <button disabled={enableButton} onClick={(e) => handleSubmitClient(e)}>Agregar Cliente</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default AddClients;
