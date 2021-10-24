import React from 'react'
import { useEffect, useContext,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import MethodsContext from '../contexts/MethodsContext.js';
import {addCommentaries,calculatePresaleItems,getAllPresales} from '../Redux/PresaleFormDuck.js';

export default function ModalCommentaries() {
    const dispatch = useDispatch();
    //const preSaleCommentaries = useSelector(store => store.preSaleItems.arrayCommentaries);
    
    const { comment,setComment,enableButton, modalCommentaries, setModalCommentaries
        , enabledAddButtonCommentaries, setEnabledAddButtonCommentaries,calculateTotalUSD } = useContext(MethodsContext);
    const handleAddModalCommentaries = () => {
        setModalCommentaries(!modalCommentaries);
    }

    const handleAddCommentaries = () => {
        if(comment!=="")
        {
            dispatch(addCommentaries(comment));
            dispatch(calculatePresaleItems());
            setModalCommentaries(!modalCommentaries);
        }
    }

    const handleCommentariesChange=(event)=>{
        let result=true;
        let value=event.target.value;
        if(value!=="")
        {
            result=false;
            setComment(value);
        }
        setEnabledAddButtonCommentaries(result);
        
    }

    useEffect(() => {
        calculateTotalUSD();
        dispatch(getAllPresales());
    }, [enabledAddButtonCommentaries,comment])

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
                            <tr>
                                <td>
                                    <TextareaAutosize
                                        aria-label="empty textarea"
                                        placeholder="Empty"
                                        onChange={(event)=>handleCommentariesChange(event)}
                                        style={{ width: 400 }}
                                    />
                                </td>
                                <td></td>
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
