export default function AddPresaleDTO(props) {
        let nameProduct=props.nameProduct;
        let amount=props.amount;
        let unitValue=props.unitValue;
        let totalUsd=props.totalUsd;
        let idProduct=props.idProduct;
    const item={nameProduct,amount,unitValue,totalUsd,idProduct};
    return JSON.stringify(item);
}
