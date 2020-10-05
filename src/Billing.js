import React from 'react';
import BillingCard from "./BillingCard.js";
import PaymentHistory from "./PaymentHistory.js"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  billing: {
    width: "100%"
  }
})

export default function Billing(props) {
  const classes = useStyles();
  return (
    <div className={classes.billing}>
      <BillingCard chipStyle={props.chipStyle}/>
      <PaymentHistory/>
    </div>
  );
}
