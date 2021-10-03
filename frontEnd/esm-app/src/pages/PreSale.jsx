import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientsAction } from '../Redux/clientDucks.js'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FormGroup, Label, FormText } from 'reactstrap';
var DatePicker = require("reactstrap-date-picker");

export default function PreSale() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [value, setValue] = useState(new Date().toISOString());
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const dispatch = useDispatch();
    const clients = useSelector(store => store.clients.array);

    const handleChange = (value, formattedValue) => {
        var element = document.getElementById("example-datepicker");
        //element. .preventDefault();
                setValue({
            value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        })
    }

    const componentDidUpdate = () => {
        // Access ISO String and formatted values from the DOM.
        var hiddenInputElement = document.getElementById("example-datepicker");
        console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
        console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
    }

    useEffect(() => {
        dispatch(getClientsAction());
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
                        <FormGroup>
                            <Label>My Date Picker</Label>
                            <DatePicker id="example-datepicker"
                                value={value}
                                onChange={(v, f) => handleChange(v, f)} />
                        </FormGroup>
                    </td>
                </tr>
            </table>
            <button onClick={() => dispatch(getClientsAction())}>GetClients</button>
        </div>
    )
}