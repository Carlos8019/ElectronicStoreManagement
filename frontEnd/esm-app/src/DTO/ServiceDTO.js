import React from 'react'

function ServiceDTO(props) {
    let nameService=props.nameService;
    let descriptionService=props.descriptionService;
    let priceService=props.priceService;
    const service={nameService,descriptionService,priceService};
    return JSON.stringify(service);
}
export default ServiceDTO
