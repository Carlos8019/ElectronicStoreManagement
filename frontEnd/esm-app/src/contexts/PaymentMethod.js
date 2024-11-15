import { createContext, useState } from "react";

const PaymentMethodContext = createContext()
const PaymentMethodProvider = ({ children }) => {

    const [namePaymentMethod, setNamePaymentMethod] = useState("")
    const addPaymentMethod = (paymentNameMethod) => {
        setNamePaymentMethod(paymentNameMethod)
    }

    const data = { namePaymentMethod, addPaymentMethod }
    return (
        <PaymentMethodContext.Provider value={data}>
            {children}
        </PaymentMethodContext.Provider>
    )
}

export { PaymentMethodProvider }
export default PaymentMethodContext