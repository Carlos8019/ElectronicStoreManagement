import React from 'react'

function ServiceDTO(props) {
    let nameService=props.nameService;
    let descriptionService=props.descriptionService;
    const service={nameService,descriptionService};
    return JSON.stringify(service);
}
export default ServiceDTO
