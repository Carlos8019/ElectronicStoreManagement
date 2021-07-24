import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import UserContext from '../contexts/UserContext';
function Login(props){
    const {loginUser,loginMessage}=useContext(UserContext);
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
                  onClick={(e)=>loginUser(props,form,e)} />
                <div id="formFooter">
                <p>{loginMessage}</p>
                <a className="underlineHover" href="#">¿Desea recuperar su clave?</a>
                </div>
            </div>
        </div>
);
}
export default Login;



    /*
    const handleLogin=async()=>{
        //const result=login(form.username,sha256(form.password));
        const result={data :'1'};
        console.log("data",result);
        if(result.data)        
        {
            if(result.data==='1')
            {
               SetStorage('userName',form.username);
               setResultadoLogin("Autorizado");
               //{logUser}
               props.history.push('/menu');
            } 
            else
            {
                SetStorage('userName',null);
                setResultadoLogin("Nombre de usuario o contraseña incorrectos");
            }
        }
        else
        {
            setResultadoLogin("Error al conectarse");
        }
    }
    */