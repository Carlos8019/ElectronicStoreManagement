import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import MethodsContext from '../contexts/MethodsContext.js';

export default function ModalCommentaries() {
    const { enableButton, modalCommentaries,setModalCommentaries,enabledAddButtonCommentaries,setEnabledAddButtonCommentaries} = useContext(MethodsContext);
    const handleAddModalCommentaries=()=>{
        setModalCommentaries(!modalCommentaries);
    }
    const handleAddCommentaries=()=>{
        setModalCommentaries(!modalCommentaries);
    }
    return (
        <div>
            <div className="create">
                <button disabled={enableButton} onClick={() => handleAddModalCommentaries()} >Agregar Comentario</button>
            </div>
            <Modal isOpen={modalCommentaries}>
                <ModalHeader>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <table>
                            <tr>
                                <td>
                                    <label>Comentario</label>
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                        </table>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <div className="create">
                        <table>
                            <tr>
                                <td>
                                    <button onClick={() => handleAddModalCommentaries()}>Cancelar</button>
                                </td>
                                <td>
                                    <button disabled={enabledAddButtonCommentaries} onClick={() => handleAddCommentaries()} >Agregar Comentario</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}
