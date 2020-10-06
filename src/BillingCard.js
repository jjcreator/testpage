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
    padding: "6% 20%",
    marginBottom: 40
  },
  cardContent: {
    paddingTop: "0",
    paddingLeft: "8px",
    paddingRight: 8
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
    padding: "10px 0px",
    flexWrap: "wrap"
  },
  divider: {
    margin: "30px 8px",
  },
  normalWeight: {
    fontWeight: "500"
  },
  fullWidth: {
    flexBasis: "100%",
    textAlign: "left"
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent classes={{root: classes.cardContent}}>
      <Box className={classes.box}>
        <Typography className={classes.normalWeight} variant="subtitle1">Your Plan</Typography>
        <Chip size="small" label="PRO" color="secondary" className={props.chipStyle}/>
      </Box>
        <LinearProgressWithLabel value={40} />
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium">CHANGE</Button>
        <Button size="medium">CANCEL SUBSCRIPTION</Button>
      </CardActions>
      <Divider className={classes.divider}/>
      <CardContent classes={{root: classes.cardContent}}>
        <Box className={classes.box}>
          <Typography className={`${classes.normalWeight} ${classes.fullWidth}`} variant="subtitle1">Payment</Typography>
          <Typography color="textSecondary" className={`${classes.normalWeight} ${classes.fullWidth}`} variant="body2">You can use a Credit Card or a Bank Account</Typography>
        </Box>
        <Box className={classes.box}>
          <Typography color="textSecondary" variant="caption" className={`${classes.normalWeight} ${classes.fullWidth}`}>Payment Method On File</Typography>
          <Typography variant="subtitle1" className={classes.normalWeight}>Visa ending in 0218 expiring 4/2020</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium" onClick={props.showCard}>EDIT</Button>
        <Button size="medium" >REMOVE</Button>
      </CardActions>
    </Card> 
  );
}