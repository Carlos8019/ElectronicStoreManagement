import { createContext, useState } from "react";
import ClientDTO from '../DTO/ClientDTO';
import validator from 'validator';
import postData from '../utilities/ApiServicePost';
import GetData from '../utilities/ApiServiceGet';

const ClientContext = createContext();
const ClientProvider = ({ children }) => {
    const [enableButton, setEnableButton] = useState(true);
    const [nameClient, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [messageForm, setMessageForm] = useState("");
    const [modal, setModal] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [tablaClientes, setTablaClientes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const handleChangeFilter = e => {
        setBusqueda(e.target.value);
        filter(e.target.value);
    }
    const filter = (searchItem) => {
        //console.info(tablaClientes);
        var result = tablaClientes.filter((element) => {
            if(element.nameClient!=null)
            {
                if (element.nameClient.toString().toLowerCase().includes(searchItem.toLowerCase()))
                    return element;
            }
        });

        setClientes(result);
    }
    const handleAdd = () => {
        setModal(!modal);
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
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameClient, " ", phone, " ", email, " ", address);
        if (!nameClient || !phone || !email || !address) {
            setMessageForm("Ingrese información en todos los campos");
        }
        else {
            setMessageForm("Ejecutando...");
            setEnableButton(false);
            const client = ClientDTO({ nameClient, phone, address, email });
            postData(client)
                .then((response) => {
                    if (response.data) {
                        if (response.data === 1)
                        {
                            setMessageForm("Cliente Agregado");
                            handleAdd();
                            getDataClientes();
                        }
                        else
                        {
                            setMessageForm("Error al crear el cliente");
                        }
                    }
                    else
                        setMessageForm("Error al crear el cliente");

                })
                .catch((error) => {
                    setMessageForm("Error de comunicacion");
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

    }
    const cleanFields=()=>{
        setname("");
        setphone("");
        setaddress("");
        setemail("");
    }

    const data={nameClient,address,phone,email,enableButton,errorEmail,messageForm,modal,clientes,tablaClientes,busqueda, setBusqueda,handleSubmit,handleChange,setErrorEmail,setMessageForm,setEnableButton,handleAdd,cleanFields,getDataClientes,setTablaClientes,setClientes,handleChangeFilter}
    return (
        <ClientContext.Provider value={data}>
            {children}
        </ClientContext.Provider>
    )
}
export {ClientProvider}
export default ClientContext;