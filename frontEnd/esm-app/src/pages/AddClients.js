import '../styles/forms.css';
import React, { useContext, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import GridClients from './GridClients';
import FormClients from './FormClients';
import ClientContext, { ClientProvider } from '../contexts/ClientContext';
function AddClients() {
    const { enableButton, handleSubmit, handleAdd, modal } = useContext(ClientContext);
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
                                    <button disabled={enableButton} onClick={(e) => handleSubmit(e)}>Agregar Cliente</button>
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
