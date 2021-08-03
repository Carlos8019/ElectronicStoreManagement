import React from 'react'

function ProductDTO(props) {
    let nameProduct=props.nameProduct;
    let descriptionProduct=props.descriptionProduct;
    const product={nameProduct,descriptionProduct};
    return JSON.stringify(product);
}
export default ProductDTO;
