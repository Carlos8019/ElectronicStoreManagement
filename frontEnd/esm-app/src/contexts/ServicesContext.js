import { createContext, useContext, useState } from "react";
import GetData from "../utilities/ApiServiceGet";
import MethodsContext from "./MethodsContext";

const ServicesContext= createContext();

const ServiceProvider=({children})=>{
    const{handleChangeFilter}=useContext(MethodsContext);
    const [tableServices, setTableServices]=useState([]);
    const [nameService,setNameService]=useState("");
    const [descriptionService,setDescriptionService]=useState("");
    const [messageResult,setMessageResult]=useState("");
    const [messageForm,setMessageForm]=useState("");
    const getDataServices=()=>{
        GetData("getAllServices")
        .then((response)=>{
            setTableServices(response.data);
        })
        .catch((error)=>{
            setMessageResult("Error al obtener el listado de servicios, por favor verificar la conexion");
        });
    }
    const handleSubmitServices=(e)=>{

    }
    const handleChangeFilterServices=(e)=>{
        setTableServices(handleChangeFilter(e,tableServices,'nameServices'));
    }
    const handleServiceChange=(e,option)=>{
        if(option===1)
            setNameService(e.target.value);
        
        if(option===2)
            setDescriptionService(e.target.value);

    }

    const data={nameService,descriptionService,messageResult,tableServices,setMessageResult,getDataServices,handleSubmitServices
               ,handleServiceChange,handleChangeFilterServices,messageForm }
    return (
        <ServicesContext.Provider value={data}>
            {children}
        </ServicesContext.Provider>
    )
}
export {ServiceProvider}
export default ServicesContext;