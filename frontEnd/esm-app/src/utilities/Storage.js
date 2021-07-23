//import React from 'react';
function SetStorage(itemName, itemValue){
    localStorage.setItem(itemName,itemValue);
}
const GetStorage=(itemName)=>{
    return localStorage.getItem(itemName);
}
export default SetStorage;
export {GetStorage};