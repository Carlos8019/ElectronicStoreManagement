export default function AddPresaleDTO(props) {
        let nameProduct=props.nameProduct;
        let amount=props.amount;
        let unitValue=props.unitValue;
        let totalUsd=props.totalUsd;
    const item={nameProduct,amount,unitValue,totalUsd};
    return JSON.stringify(item);
}
