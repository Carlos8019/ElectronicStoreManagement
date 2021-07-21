import '../styles/forms.css';
import {useState, useEffect} from 'react';
import ClientDTO from '../DTO/ClientDTO';
import validator from 'validator';
import postData from '../utilities/ApiServicePost';
export default function AddClients (){
    const [enableButton,setEnableButton]=useState(true);
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [errorEmail,setErrorEmail]=useState('');
    const [messageForm,setMessageForm]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(name," ",phone," ",email," ",address);
        if(!name||!phone||!email||!address)
        {
            setMessageForm("Ingrese información en todos los campos");
        }
        else
        {
            setEnableButton(false);
            const client=ClientDTO({ name, phone, address, email });
            postData(client)
            .then((response)=>{
               // console.log(response);
                //console.log(response.data);
                if(response.data)
                {
                    if(response.data===1)
                        setMessageForm("Cliente Agregado");
                    else 
                        setMessageForm("Error al crear el cliente");
                }
                else
                    setMessageForm("Error al crear el cliente");
    
            })
            .catch((error)=>{
                setMessageForm("Error de comunicacion");
            });    
        }        
    }
    const validateEmail=(e)=>{
        setemail(e);
        if(validator.isEmail(e))
        {
            setemail(e);
            setErrorEmail("");
            setEnableButton(false);
        }
        else{
            setErrorEmail("Formato de correo incorrecto");
        }
    }
    
    useEffect(() => {
        setEnableButton(true);
        setMessageForm("");
    }, [])
    return (
        <div className="create" >
            <form onSubmit={handleSubmit} >
                <label>Nombre</label>
                <input type="text" required value={name} onChange={(e)=>setname(e.target.value)}/>

                <label>Teléfono</label>
                <input type="text" required value={phone} onChange={(e)=>setphone(e.target.value)}/>

                <label>Dirección</label>
                <input type="text" required value={address} onChange={(e)=>setaddress(e.target.value)}/>

                <label>Correo</label>
                <input type="text" required value={email} onChange={(e)=>validateEmail(e.target.value)}/>
                <p>{errorEmail}</p>
                <button disabled={enableButton} onClick={()=>setMessageForm()}>Agregar Cliente</button>
                <p>{messageForm}</p>
            </form>
        </div>
    )
}