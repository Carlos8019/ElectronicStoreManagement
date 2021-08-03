import { createContext, useContext, useState } from "react";
import postData from "../utilities/ApiServicePost";
import { NotificationManager } from "react-notifications";
import ProductDTO from "../DTO/ProductDTO";
import MethodsContext from "./MethodsContext";
import GetData from "../utilities/ApiServiceGet";

const ProductsContex= createContext();
const ProductsProvider=({children})=>{
    const{handleChangeFilter,setEnableButton,handleAdd,messageResult,setMessageResult
        ,setMessageForm,messageForm,setBusqueda}=useContext(MethodsContext);
    const[tableProducts,setTableProducts]=useState([]);
    const[nameProduct,setNameproduct]=useState("");
    const[descriptionProduct,setDescriptionProduct]=useState("");
    const getDataProducts=()=>{
        GetData("getAllProducts")
        .then((response)=> {
            setTableProducts(response.data);
        })
        .catch((error)=>{
            setMessageResult("Error al obtener el listado de servicios, por favor verificar la conexion");
            NotificationManager.error("Error al obtener los Productos");
        });
    }
    const handleAddProduct=()=>{
        cleanFieldsProduct();
        handleAdd();
    }
    const cleanFieldsProduct=()=>{
        setNameproduct("");
        setDescriptionProduct("");
    }

    const handleSubmitProduct=(e)=>{
        e.preventDefault();

        if (!nameProduct || !descriptionProduct) {
            setMessageForm("Ingrese información en todos los campos");
        }
        else {
            setMessageForm("Ejecutando...");
            setEnableButton(false);
            const product = ProductDTO({nameProduct,descriptionProduct});
            postData("saveProduct",product)
                .then((response) => {
                    if (response.data) {
                        if (response.data === 1)
                        {
                            NotificationManager.info("Producto Agregado");
                            handleAdd();
                            getDataProducts();
                        }
                        else
                        {
                            NotificationManager.error("Error al crear el Producto");
                        }
                    }
                    else
                        NotificationManager.error("Error al crear el Producto");

                })
                .catch((error) => {
                    NotificationManager.warning("Error de comunicacion");
                });
        }
    }
    const handleChangeFilterProducts=(e)=>{
        setBusqueda(e.target.value);
        if(e.target.value==="")
            getDataProducts();
        else
            setTableProducts(handleChangeFilter(e,tableProducts,'nameProduct'));
    }
    const handleProductChange=(e,option)=>{
        if(option===1)
            setNameproduct(e.target.value);
        
        if(option===2)
            setDescriptionProduct(e.target.value);

        if (nameProduct && descriptionProduct) 
            setEnableButton(false);
    }


    const data={handleChangeFilterProducts,tableProducts,nameProduct,getDataProducts
        ,handleProductChange,descriptionProduct,handleSubmitProduct,messageForm,setMessageResult
        ,handleAddProduct,setMessageForm,cleanFieldsProduct}
    return (
        <ProductsContex.Provider value={data}>
            {children}
        </ProductsContex.Provider>
    )
}
export {ProductsProvider}
export default ProductsContex;