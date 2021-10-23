import { createContext, useState,useContext } from "react";
import ClientDTO from '../DTO/ClientDTO';
import validator from 'validator';
import postData from '../utilities/ApiServicePost';
import GetData from '../utilities/ApiServiceGet';
import { NotificationManager } from "react-notifications";
import MethodsContext from "./MethodsContext";

const ClientContext = createContext();
const ClientProvider = ({ children }) => {

    const [nameClient, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [idnClient,setIdnClient]=useState('');
    const [clientes, setClientes] = useState([]);
    const [tablaClientes, setTablaClientes] = useState([]);

    const { modal,setBusqueda,setModal,enableButton,messageForm, setMessageForm,setEnableButton,handleAdd,handleChangeFilter } = useContext(MethodsContext);

    const handleChangeClients=(e)=>{
        setClientes(handleChangeFilter(e,tablaClientes,'nameClient'));
    }

    const getDataClientes = () => {
        GetData("getAllClients")
            .then(resp => {
                setClientes(resp.data);
                setTablaClientes(resp.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
 
    const handleSubmitClient = (e) => {
        e.preventDefault();
        if (!nameClient || !phone || !email || !address) {
            setMessageForm("Ingrese información en todos los campos");
        }
        else {
            setMessageForm("Ejecutando...");
            setEnableButton(false);
            const client = ClientDTO({ nameClient, phone, address, email,idnClient });
            postData("saveClient",client)
                .then((response) => {
                    if (response.data) {
                        if (response.data === 1)
                        {
                            NotificationManager.info("Cliente Agregado");
                            handleAdd();
                            getDataClientes();
                        }
                        else
                        {
                            NotificationManager.error("Error al crear el cliente");
                        }
                    }
                    else
                        NotificationManager.error("Error al crear el cliente");

                })
                .catch((error) => {
                    NotificationManager.warning("Error de comunicacion");
                });
        }
    }

    const validateEmail = (e) => {
        setemail(e);
        if (validator.isEmail(e)) {
            setemail(e);
            setErrorEmail("");
            setEnableButton(false);
        }
        else {
            setErrorEmail("Formato de correo incorrecto");
        }
    }
    const handleChange=(e,option)=>{
        if(option===1)
            setname(e.target.value);
        
        if(option===2)
            setphone(e.target.value);

        if(option===3)
            setaddress(e.target.value);

        if(option===4)
            validateEmail(e.target.value);
        if(option===5)
            setIdnClient(e.target.value);

    }
    const cleanFields=()=>{
        setname("");
        setphone("");
        setaddress("");
        setemail("");
        setIdnClient("");
    }

    const data={idnClient,nameClient,address,phone,email,errorEmail,clientes,tablaClientes
        ,handleSubmitClient,handleChangeClients,setErrorEmail,cleanFields,getDataClientes
        ,setTablaClientes,setClientes,handleChange}
    return (
        <ClientContext.Provider value={data}>
            {children}
        </ClientContext.Provider>
    )
}
export {ClientProvider}
export default ClientContext;