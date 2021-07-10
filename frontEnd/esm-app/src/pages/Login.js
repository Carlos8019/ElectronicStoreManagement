import React, { useEffect, useState } from 'react';
import sha256 from 'js-sha256';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import Storage from '../utilities/Storage';
import login from '../utilities/ApiService';
function Login(props){
    const [resultadoLogin,setResultadoLogin]=useState("");
    const [form,setForm]=useState({
        username: '',
        password:''
    });
    const handleChange=e=>{
        const {name, value} = e.target;
        setForm({
          ...form,
          [name]: value
        });
    }
    const handleLogin=async()=>{
        const result=login(form.username,sha256(form.password));
        if(result.data)        
        {
            if(result.data==='1')
            {
               Storage('userName',form.username);
               setResultadoLogin("Autorizado");
               props.history.push('/menu');
            } 
            else
            {
                Storage('userName',null);
                setResultadoLogin("Nombre de usuario o contraseña incorrectos");
            }
        }
        else
        {
            setResultadoLogin("Error al conectarse");
            props.history.push('/menu');
        }
    }

    useEffect(()=>{
        setResultadoLogin(resultadoLogin);
    },[resultadoLogin]);
    return( 
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    Iniciar Sesion
                </div>
                <input 
                  type="text" 
                  className="fadeIn second" 
                  name="username" 
                  placeholder="login" 
                  onChange={handleChange} 
                />
                <input 
                  type="password" 
                  className="fadeIn third" 
                  name="password" 
                  placeholder="password" 
                  onChange={handleChange} 
                />
                <input type="submit" 
                  className="fadeIn fourth" 
                  value="Log In"
                  onClick={()=>handleLogin()} />
                <div id="formFooter">
                <h4>{resultadoLogin}</h4>
                <a className="underlineHover" href="#">¿Desea recuperar su clave?</a>
                </div>
            </div>
        </div>
);
}
export default Login;