import { createContext, useState } from "react";
import ClientDTO from '../DTO/ClientDTO';
import validator from 'validator';
import postData from '../utilities/ApiServicePost';

const ClientContext = createContext();
const ClientProvider = ({ children }) => {

    const [enableButton, setEnableButton] = useState(true);
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [messageForm, setMessageForm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, " ", phone, " ", email, " ", address);
        if (!name || !phone || !email || !address) {
            setMessageForm("Ingrese información en todos los campos");
        }
        else {
            setEnableButton(false);
            const client = ClientDTO({ name, phone, address, email });
            postData(client)
                .then((response) => {
                    if (response.data) {
                        if (response.data === 1)
                            setMessageForm("Cliente Agregado");
                        else
                            setMessageForm("Error al crear el cliente");
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
    const data={name,address,phone,email,enableButton,errorEmail,messageForm,handleSubmit,handleChange,setErrorEmail,setMessageForm,setEnableButton}
    return (
        <ClientContext.Provider value={data}>
            {children}
        </ClientContext.Provider>
    )
}
export {ClientProvider}
export default ClientContext;