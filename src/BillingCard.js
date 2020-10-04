import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgressWithLabel from "./LinearProgressWithLabel.js"
import { Box, Chip, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "5% 20%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0px"
  },
  divider: {
    margin: "20px 0px"
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <Box className={classes.box}>
        <Typography>Your plan</Typography>
        <Chip size="small" label="PRO" color="secondary" className={props.chipStyle}/>
      </Box>
        <LinearProgressWithLabel value={40} />
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium">CHANGE</Button>
        <Button size="medium">CANCEL SUBSCRIPTION</Button>
      </CardActions>
      <Divider className={classes.divider}/>
      <CardContent>
        <Box className={classes.box}><Typography>Payment</Typography></Box>
        <Typography>You can use a Credit Card or a Bank Account</Typography>
        <Typography>Payment Method On File</Typography>
        <Typography>Visa ending in 0218 expiring 4/2020</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium">EDIT</Button>
        <Button size="medium">REMOVE</Button>
      </CardActions>
    </Card>
  );
}