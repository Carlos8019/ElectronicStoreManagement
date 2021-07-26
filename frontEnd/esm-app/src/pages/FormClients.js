import '../styles/forms.css';
import { useContext, useEffect } from 'react';
import ClientContext from '../contexts/ClientContext';

export default function FormClients() {
    const{name,address,phone,email,errorEmail,messageForm,handleSubmit,setMessageForm,setEnableButton,handleChange,cleanFields}=useContext(ClientContext);
    useEffect(() => {
        setEnableButton(true);
        setMessageForm("");
        cleanFields();
    }, [])
    return (

            <div className="create" >
                <form onSubmit={handleSubmit} >
                            <label>Nombre</label>
                            <input type="text" required value={name} onChange={(e) => handleChange(e,1)} />

                            <label>Teléfono</label>
                            <input type="text" required value={phone} onChange={(e) => handleChange(e,2)} />
 
                            <label>Dirección</label>
                            <input type="text" required value={address} onChange={(e) => handleChange(e,3)} />
 
                            <label>Correo</label>
                            <input type="text" required value={email} onChange={(e) => handleChange(e,4)} />
                            <p>{errorEmail}</p>
                            <p>{messageForm}</p>
 
                </form>
            </div>
    )
}