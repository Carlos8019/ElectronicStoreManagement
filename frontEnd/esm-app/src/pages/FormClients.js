import '../styles/forms.css';
import { useContext, useEffect } from 'react';
import ClientContext from '../contexts/ClientContext';
import MethodsContext from '../contexts/MethodsContext';

export default function FormClients() {
    const{idnClient,nameClient,address,phone,email,errorEmail,handleSubmit,handleChange,cleanFields}=useContext(ClientContext);
    const{messageForm,setMessageForm,setEnableButton}=useContext(MethodsContext);
    useEffect(() => {
        setEnableButton(true);
        setMessageForm("");
        cleanFields();
    }, [])
    return (

            <div className="create" >
                <form onSubmit={handleSubmit} >
                            <label>Nombre</label>
                            <input type="text" required value={nameClient} onChange={(e) => handleChange(e,1)} />

                            <label>RUC</label>
                            <input type="text" required value={idnClient} onChange={(e) => handleChange(e,5)} />

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