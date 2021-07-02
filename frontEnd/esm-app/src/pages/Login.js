import React, { useState } from 'react';
import sha256 from 'js-sha256';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import '../styles/login.css';
import axios from 'axios';
function Login(){
    const baseURL="https://localhost:5001/Data/validateLogin";
    const cookie= new Cookies();
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
       // console.log(form);
    }
    const login=async()=>{
        await axios.get(baseURL+`/${form.username}/${sha256(form.password)}`)
        .then(response=>{
            console.info(response.data);
        }
        )
        .catch(error=>{
            console.log("Error=>",error);
        })
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
                  onClick={()=>login()} />
                <div id="formFooter">
                <a className="underlineHover" href="#">¿Desea recuperar su clave?</a>
                </div>
            </div>
        </div>
);
}
export default Login;