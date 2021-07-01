import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function GridClients() {
  const [clientes,setClientes]=useState([]);
  const [tablaClientes,setTablaClientes]=useState([]);
  const [busqueda,setBusqueda]=useState("");

  const getDataClientes=async()=>{
    await axios.get("https://localhost:5001/Clients/getAllClients")
    .then(resp=>{
      setClientes(resp.data);
      setTablaClientes(resp.data);
    })
    .catch(error=>{
      console.log(error);
      });
  }
  const handleChange=e=>{
    setBusqueda(e.target.value);
    filter(e.target.value);
  }
  const filter=(searchItem)=>{
    var result=tablaClientes.filter((element)=>{
      if(element.nameClient.toString().toLowerCase().includes(searchItem.toLowerCase()))
        return element;
    });
    setClientes(result);
  }
  useEffect(()=>{
    getDataClientes();
  },[]);
  return (
    <div className="App">
      <div className="containerInput">
        <input 
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Busqueda por nombre ó email"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Direccion</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
              {
                clientes &&
                clientes.map((valor)=>(
                  <tr key={valor.idClient}>
                    <td>{valor.idClient}</td>
                    <td>{valor.nameClient}</td>
                    <td>{valor.phoneClient}</td>
                    <td>{valor.addressClient}</td>
                    <td>{valor.emailClient}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
