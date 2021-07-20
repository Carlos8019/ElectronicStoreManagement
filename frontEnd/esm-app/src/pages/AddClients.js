import '../styles/forms.css';
import {useState} from 'react';
export default function AddClients (){
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        const client={name,phone,address,email}
        //console.log(client);
    }
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
                <input type="text" required value={email} onChange={(e)=>setemail(e.target.value)}/>

                <button>Agregar Cliente</button>
            </form>
            <p>{name}</p>
        </div>
    )
}