export default function ClientDTO(props) {
    let nameClient=props.nameClient;
    let phone=props.phone;
    let address=props.address;
    let email=props.email;
    let idnClient=props.idnClient
    const client={nameClient,phone,address,email,idnClient};
    return JSON.stringify(client);
}

