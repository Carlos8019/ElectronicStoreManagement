import React from 'react'
import { useContext, useEffect } from "react";
import 'react-notifications/lib/notifications.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MethodsContext from "../contexts/MethodsContext";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ProductsContex from '../contexts/ProductsContext';

export default function AddProduct() {
    const {handleChangeFilterProducts,tableProducts,nameProduct,getDataProducts
        ,handleProductChange,descriptionProduct,handleSubmitProduct,cleanFieldsProduct,handleAddProduct}=useContext(ProductsContex);
    const { enableButton, modal, busqueda
          ,setEnableButton,messageResult,setMessageResult,setMessageForm,messageForm } = useContext(MethodsContext);
    useEffect(() => {
        setMessageResult("");
        cleanFieldsProduct();
        setMessageForm("");
        setEnableButton(true);
        getDataProducts();
    }, []);    
    return (
        <>
            <div className="create">
                <button onClick={() => handleAddProduct()}>Agregar Producto</button>
            </div>
            <div className="App" >
                <div className="containerInput" >
                    <input className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Busqueda por servicio"
                        onChange={handleChangeFilterProducts}
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
                                <th>Producto</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tbody> {tableProducts && tableProducts.map((valor) =>
                        (
                            <tr key={valor.idProduct}>
                                <td>{valor.idProduct}</td>
                                <td>{valor.nameProduct}</td>
                                <td>{valor.descriptionProduct}</td>
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
                        <label>Nombre Producto</label>
                        <input
                            type="text"
                            required
                            value={nameProduct}
                            onChange={(e) => handleProductChange(e, 1)}
                        />
                        <label>Descripcion Producto</label>
                        <input
                            type="text"
                            required
                            value={descriptionProduct}
                            onChange={(e) => handleProductChange(e, 2)}
                        />
                        <p>{messageForm}</p>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <div className="create">
                        <table>
                            <tr>
                                <td>
                                    <button onClick={() => handleAddProduct()}>Cancelar</button>
                                </td>
                                <td>
                                    <button disabled={enableButton} onClick={(e) => handleSubmitProduct(e)}>Agregar Producto</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ModalFooter>
            </Modal>

        </>
    )
}

