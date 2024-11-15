import React, { createContext, useEffect, useState } from 'react';
//import SetStorage, { GetStorage } from '../utilities/Storage';
import sha256 from 'js-sha256';
import login from '../utilities/ApiService';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const initialUser = null;//GetStorage("userName");
    const [user, setUser] = useState(initialUser);
    const [loginMessage, setLoginMessage] = useState("");
    const logout = () => {
        console.log("logout");
        setUser(null);
    }
    const loginUser = (props, form, e) => {
        e.nativeEvent.stopImmediatePropagation();
        console.log("logging...", form,sha256(form.password));
        login(form.username, sha256(form.password))
            .then((response) => {
                
                //const result={data :'1'};
                console.log("data", response);
                console.log(response.data);
                if (response.data!=null) {
                    if (response.data === 1) {
                        console.log("correcto");
                        setUser(form.username);
                        props.history.push('/blank');
                    }
                    else {
                        setLoginMessage("Nombre de usuario o contraseña incorrectos");;
                    }
                }
                else
                    setLoginMessage("Error al conectarse");
            })
            .catch((error) => {
                setLoginMessage("Error al conectarse");
            });
    }
    useEffect(()=>{
        setLoginMessage(loginMessage);
    },[loginMessage]);

    const data = { user, loginUser, logout, loginMessage }
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext;