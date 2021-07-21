export default function ClientDTO(props) {
    let nameClient=props.nameClient;
    let phone=props.phone;
    let address=props.address;
    let email=props.email;
    const client={nameClient,phone,address,email};
    return JSON.stringify(client);
}

