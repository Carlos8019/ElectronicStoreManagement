export default function AddPresaleDTO(props) {
        let nameProduct=props.nameProduct;
        let amount=props.amount;
        let unitValue=props.unitValue;
        let totalUsd=props.totalUsd;
        let idProduct=props.idProduct;
        let isService=props.isService;
    const item={nameProduct:nameProduct,amount:amount,unitValue:unitValue,totalUsd:totalUsd,idProduct:idProduct,isService:isService};
    return JSON.stringify(item);
}
