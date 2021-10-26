import { createContext, useState } from "react";
import FormatNumber from "../utilities/FormatNumbers";
import AddPresaleDTO from '../DTO/AddPresaleDTO';

const MethodsContext=createContext();
const MethodsProvider=({children})=>{
    const [width, setwidth] = useState(210);
    const [enableButton, setEnableButton] = useState(true);
    const [enabledButton2,setEnabledButton2]=useState(true);
    const [modal, setModal] = useState(false);
    const [modalService,setModalService]=useState(false);
    const [modalCommentaries,setModalCommentaries]=useState(false);
    const [busqueda, setBusqueda] = useState("");
    const [messageForm, setMessageForm] = useState("");
    const [messageResult,setMessageResult]=useState("");
    const [totalUsd, setTotalUsd] = useState(0.0);
    const [unitValue, setunitValue] = useState(0.0);
    const [amount, setAmount] = useState(0);  
    const [idProduct, setIdProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');    
    const [enabledAddButtonCommentaries,setEnabledAddButtonCommentaries]=useState(true);
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
    const addNewItemPreSale=(nameProduct,amount,unitValue,totalUsd,idProduct,isService)=>{
        return AddPresaleDTO({ nameProduct,amount,unitValue,totalUsd,idProduct,isService });
    }
    
    const handleAdd = () => {
        setModal(!modal);
        setMessageForm("");
    }   
    const calculateTotalUSD=()=>{
        let total=unitValue*amount;
        //console.log(total);
        total=FormatNumber(total);
        //console.log(unitValue,amount,total);
        setTotalUsd(total);
    }
    const data={idProduct, setIdProduct,nameProduct, setNameProduct,
        addNewItemPreSale,enabledAddButtonCommentaries,setEnabledAddButtonCommentaries,modalCommentaries
        ,setModalCommentaries,modalService,setModalService,modal,busqueda,enableButton,messageForm,messageResult
        ,setMessageResult,setMessageForm,setEnableButton,setModal,setBusqueda,handleAdd,handleChangeFilter
        ,totalUsd, setTotalUsd,unitValue, setunitValue,amount, setAmount,calculateTotalUSD,enabledButton2,setEnabledButton2}
    return (
        <MethodsContext.Provider value={data}>
            {children}
        </MethodsContext.Provider>
    )
}
export default MethodsContext;
export  {MethodsProvider}