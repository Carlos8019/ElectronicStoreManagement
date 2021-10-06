import React from 'react';
import { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientsAction } from '../Redux/clientDucks.js'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getPaymentModeAction } from '../Redux/PaymentModeDuck.js';
import { getDeliveryTimeAction } from '../Redux/DeliveryTimeDuck.js';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
export default function PreSale() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [dropdownOpenPM, setDropdownOpenPM] = useState(false);
    const togglePM = () => setDropdownOpenPM(prevState => !prevState);

    const [dropdownOpenDT, setDropdownOpenDT] = useState(false);
    const toggleDT = () => setDropdownOpenDT(prevState => !prevState);

    const dispatch = useDispatch();
    const clients = useSelector(store => store.clients.array);
    const paymentMode=useSelector(store=>store.paymentMode.array);
    const deliveryTime=useSelector(store=>store.deliveryTime.array);

    const classes = useStyles();

    useEffect(() => {
        dispatch(getClientsAction());
        dispatch(getPaymentModeAction());
        dispatch(getDeliveryTimeAction());
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <td><Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Seleccione Un Cliente
                        </DropdownToggle>
                        <DropdownMenu>
                            {clients.map(element => (
                                <DropdownItem>{element.nameClient}</DropdownItem>
                            ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                    </td>
                </tr>
                <tr>
                    <td>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                    <Dropdown isOpen={dropdownOpenPM} toggle={togglePM}>
                        <DropdownToggle caret>
                            Seleccione Un Modo de Pago
                        </DropdownToggle>
                        <DropdownMenu>
                            {paymentMode.map(element => (
                                <DropdownItem>{element.namePaymentMode}</DropdownItem>
                            ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                    </td>
                </tr>
                <tr>
                    <td>
                    <Dropdown isOpen={dropdownOpenDT} toggle={toggleDT}>
                        <DropdownToggle caret>
                            Seleccione un Plazo de Entrega
                        </DropdownToggle>
                        <DropdownMenu>
                            {deliveryTime.map(element => (
                                <DropdownItem>{element.nameDeliveryTime}</DropdownItem>
                            ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                    </td>
                </tr>

            </table>
            <button onClick={() => dispatch(getClientsAction())}>GetClients</button>
        </div>
    )
}
