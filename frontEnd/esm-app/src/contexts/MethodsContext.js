import { createContext, useState } from "react";
import FormatNumber from "../utilities/FormatNumbers";

const MethodsContext=createContext();
const MethodsProvider=({children})=>{
    const [enableButton, setEnableButton] = useState(true);
    const [modal, setModal] = useState(false);
    const [busqueda, setBusqueda] = useState("");
    const [messageForm, setMessageForm] = useState("");
    const [messageResult,setMessageResult]=useState("");
    const [totalUsd, setTotalUsd] = useState(0.0);
    const [unitValue, setunitValue] = useState(0.0);
    const [amount, setAmount] = useState(0);    
    const handleChangeFilter = (e,table,nameField) => {
        setBusqueda(e.target.value);
        var searchItem=e.target.value;
        convertArray(table,nameField);
        var result = table.filter((element) => {
            if(element.genericName!=null)
            {
                if (element.genericName.toString().toLowerCase().includes(searchItem.toLowerCase()))
                    return element;
            }
        });
        return result;
        
    }
    const convertArray=(array,nameField)=>{
        array.map(obj=>{
            obj['genericName']=obj[nameField];            
        });
        //console.log(array);
    }

    const handleAdd = () => {
        setModal(!modal);
        setMessageForm("");
    }   
    const calculateTotalUSD=()=>{
        let total=unitValue*amount;
        //console.log(unitValue,amount);
        //console.log(total);
        setTotalUsd(FormatNumber(total));
    }
    const data={modal,busqueda,enableButton,messageForm,messageResult,setMessageResult
               ,setMessageForm,setEnableButton,setModal,setBusqueda,handleAdd,handleChangeFilter
               ,totalUsd, setTotalUsd,unitValue, setunitValue,amount, setAmount,calculateTotalUSD}
    return (
        <MethodsContext.Provider value={data}>
            {children}
        </MethodsContext.Provider>
    )
}
export default MethodsContext;
export  {MethodsProvider}