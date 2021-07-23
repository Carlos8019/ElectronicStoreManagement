import React ,{createContext, useState} from 'react';
import SetStorage, { GetStorage } from '../utilities/Storage';

const UserContext=createContext();

const UserProvider=({children})=>{
    const initialUser=GetStorage("userName");
    const [user,setUser]=useState(initialUser);
    const logout=()=>{
        console.log("logout");
        SetStorage("userName",null);
        setUser(null);
    }
    const logUser=()=>{
        console.log("logged");
        setUser(GetStorage("userName"));
    }
    const data={user,logout}
    return (
        <UserContext.Provider value={data}>
                {children}
        </UserContext.Provider>
    )
}

export {UserProvider}
export default UserContext;