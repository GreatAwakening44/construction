// This is the Paypal payment integration.

import React from 'react';
import { PaypalButtons, PayPalScriptProvide, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = () => {
  return (
    <PayPalScriptProvider options={{"clientd-id": 
    ""}}>

    </PayPalScriptProvider>
  )
}

export default PaypalButton
