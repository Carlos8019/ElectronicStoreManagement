import '../styles/App.css';
import { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ClientContext from '../contexts/ClientContext';

function GridClients() {
    const { getDataClientes, clientes, busqueda, handleChangeClients } = useContext(ClientContext);
    useEffect(() => {
        getDataClientes();
    }, []);
    return (
        <div className="App" >
            <div className="containerInput" >
                <input className="form-control inputBuscar"
                    value={busqueda}
                    placeholder="Busqueda por nombre"
                    onChange={(e)=>handleChangeClients(e)}
                />
                <button className="btn btn-success" >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="table-responsive" >
                <table className="table table-sm table-bordered" >
                    <thead>
                        <tr>
                            <th>RUC</th> 
                            <th>Nombre</th> 
                            <th>Telefono</th>
                            <th>Direccion</th> 
                            <th> Correo </th> 
                        </tr>
                    </thead>
                    <tbody> {clientes && clientes.map((valor) => 
                    (
                    <tr key={valor.idClient}>
                        <td>{valor.idnClient}</td> 
                        <td>{valor.nameClient}</td> 
                        <td>{valor.phoneClient}</td> 
                        <td>{valor.addressClient}</td> 
                        <td>{valor.emailClient}</td> 
                    </tr >
                    ))
                          } 
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GridClients;