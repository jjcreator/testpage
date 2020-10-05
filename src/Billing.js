import React, { useState } from 'react';
import BillingCard from "./BillingCard.js";
import PaymentHistory from "./PaymentHistory.js"
import { makeStyles } from '@material-ui/core/styles';
import CardDetails from './CardDetails.js';

const useStyles = makeStyles({
  billing: {
    width: "100%"
  }
});

export default function Billing(props) {
  const classes = useStyles();
  const [cardDetailsVisible, setCardDetailsVisible] = useState(false);
  const showCard = () => {
    setCardDetailsVisible(!cardDetailsVisible);
  }
  return (
    <div className={classes.billing}>
    {!cardDetailsVisible
      ? (<>
        <BillingCard showCard={showCard} chipStyle={props.chipStyle}/>
        <PaymentHistory/>
      </>)
      : (<CardDetails cardLinkToggle={props.cardLinkToggle}/>)
    }
    </div>
  );
}
