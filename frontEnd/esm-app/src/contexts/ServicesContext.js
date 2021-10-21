import { createContext, useContext, useState } from "react";
import { NotificationManager } from "react-notifications";
import ServiceDTO from "../DTO/ServiceDTO";
import GetData from "../utilities/ApiServiceGet";
import postData from "../utilities/ApiServicePost";
import MethodsContext from "./MethodsContext";

const ServicesContext= createContext();

const ServiceProvider=({children})=>{
    const{handleChangeFilter,setEnableButton,handleAdd}=useContext(MethodsContext);
    const [tableServices, setTableServices]=useState([]);
    const [nameService,setNameService]=useState("");
    const [descriptionService,setDescriptionService]=useState("");
    const [priceService,setPriceService]=useState(0.00);
    const [messageResult,setMessageResult]=useState("");
    const [messageForm,setMessageForm]=useState("");
    const getDataServices=()=>{
        GetData("getAllServices")
        .then((response)=>{
            setTableServices(response.data);
        })
        .catch((error)=>{
            setMessageResult("Error al obtener el listado de servicios, por favor verificar la conexion");
            NotificationManager.info("Error al obtener los Servicios");
        });
    }
    const handleSubmitServices=(e)=>{
        e.preventDefault();

        if (!nameService || !descriptionService  || (priceService===0)) {
            setMessageForm("Ingrese información en todos los campos");
        }
        else {
            setMessageForm("Ejecutando...");
            setEnableButton(false);
            const service =ServiceDTO({nameService,descriptionService,priceService});
            postData("saveService",service)
                .then((response) => {
                    if (response.data) {
                        if (response.data === 1)
                        {
                            NotificationManager.info("Servicio Agregado");
                            handleAdd();
                            getDataServices();
                        }
                        else
                        {
                            NotificationManager.error("Error al crear el servicio");
                        }
                    }
                    else
                        NotificationManager.error("Error al crear el servicio");

                })
                .catch((error) => {
                    NotificationManager.warning("Error de comunicacion");
                });
        }
    }
    const handleChangeFilterServices=(e)=>{
        setTableServices(handleChangeFilter(e,tableServices,'nameServices'));
    }
    const handleServiceChange=(e,option)=>{
        if(option===1)
            setNameService(e.target.value);
        
        if(option===2)
            setDescriptionService(e.target.value);
        if(option===3)
            setPriceService(e.target.value);

        if (nameService && descriptionService && priceService>=1) 
            setEnableButton(false);
    }

    const data={nameService,descriptionService,messageResult,tableServices,setMessageResult,getDataServices,handleSubmitServices
               ,handleServiceChange,handleChangeFilterServices,messageForm,priceService,setPriceService }
    return (
        <ServicesContext.Provider value={data}>
            {children}
        </ServicesContext.Provider>
    )
}
export {ServiceProvider}
export default ServicesContext;