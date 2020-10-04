import React from 'react';
import BillingCard from "./BillingCard.js"

export default function Billing(props) {
  return (
    <>
      <BillingCard chipStyle={props.chipStyle}/>
      {/* <PaymentHistory/> */}
    </>
  );
}
