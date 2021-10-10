import React from 'react'

function ProductDTO(props) {
    let nameProduct=props.nameProduct;
    let descriptionProduct=props.descriptionProduct;
    let priceProduct=props.priceProduct;
    const product={nameProduct,descriptionProduct,priceProduct};
    return JSON.stringify(product);
}
export default ProductDTO;
