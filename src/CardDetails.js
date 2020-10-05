import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Card, Typography, Divider} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({  
  details: {
    width: "100%",
    padding: "6% 20%",
    marginBottom: 40
  },
  normalWeight: {
      fontWeight: 500
  },
  formGroup: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      marginTop: 16
  },
  formGroupItem: {
      flexBasis: "33%",
  },
  formGroupItemDouble: {
      flexBasis: "66%",
      flex: 1,
      marginLeft: 16
  },
  divider: {
      margin: "40px 0"
  },
  buttonBox: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 32
  },
  formButton: {
      padding: "10px 25px"
  }
})

export default function CardDetails(props) {
  const classes = useStyles();
  const [date, setDate] = React.useState({});

  useEffect(()=> {props.cardLinkToggle(true);
    return () => {
    props.cardLinkToggle(false);
  }}, []);

  return (
    <Card variant="outlined" className={classes.details}>
        <form className={classes.form}>
            <Typography align="left" className={classes.normalWeight} variant="subtitle1">Credit Card</Typography>
            <Typography align="left" color="textSecondary" variant="body2">Choose how you want to pay, you have a choice of Credit / Debit Card or Bank Account</Typography>
            <TextField
                label="Account Holder"
                style={{marginTop: 32}}
                placeholder="Account holder name"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                InputProps={{
                }}
            />
            <TextField
                label="Credit card"
                style={{marginTop: 16}}
                placeholder="Credit card number"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <CreditCardIcon color="primary" />
                    </InputAdornment>
            ),
            }}
            />
            <Box className={classes.formGroup}>
                <FormControl className={classes.formGroupItem} variant="outlined">
                    <InputLabel id="monthLabel">Month</InputLabel>
                    <Select
                        labelId="monthLabel"
                        id="monthLabel"
                        style={{marginRight: 8}}
                        label="Month"
                    >
                        <MenuItem value="January">January</MenuItem>
                        <MenuItem value="February">February</MenuItem>
                        <MenuItem value="March">March</MenuItem>
                        <MenuItem value="April">April</MenuItem>
                        <MenuItem value="May">May</MenuItem>
                        <MenuItem value="June">June</MenuItem>
                        <MenuItem value="July">July</MenuItem>
                        <MenuItem value="August">August</MenuItem>
                        <MenuItem value="September">September</MenuItem>
                        <MenuItem value="October">October</MenuItem>
                        <MenuItem value="November">November</MenuItem>
                        <MenuItem value="December">December</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formGroupItem} variant="outlined">
                    <InputLabel id="yearLabel">Month</InputLabel>
                    <Select
                        labelId="yearLabel"
                        id="yearLabel"
                        variant="outlined"
                        label="Month"
                        style={{marginRight: 8}}
                    >
                        <MenuItem value="January">January</MenuItem>
                        <MenuItem value="February">February</MenuItem>
                        <MenuItem value="March">March</MenuItem>
                        <MenuItem value="April">April</MenuItem>
                        <MenuItem value="May">May</MenuItem>
                        <MenuItem value="June">June</MenuItem>
                        <MenuItem value="July">July</MenuItem>
                        <MenuItem value="August">August</MenuItem>
                        <MenuItem value="September">September</MenuItem>
                        <MenuItem value="October">October</MenuItem>
                        <MenuItem value="November">November</MenuItem>
                        <MenuItem value="December">December</MenuItem>
                    </Select>
                </FormControl>
                    <TextField
                    className={classes.formGroupItem}
                    label=""
                    style={{margin: 0}}
                    placeholder="CVV2"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <InfoIcon color="primary" />
                        </InputAdornment>
                ),
                }}
                />
            </Box>
            <Divider className={classes.divider}/>
            <Typography align="left" className={classes.normalWeight} variant="subtitle1">Address</Typography>
            <Typography align="left" color="textSecondary" variant="body2">Use a permanent address where you can receive confirmation</Typography>
            <TextField
                style={{marginTop: 32}}
                placeholder="Street address"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                InputProps={{
                }}
            />
            <TextField
                style={{marginTop: 16}}
                placeholder="City"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                InputProps={{
                }}
            />
            <TextField
                style={{marginTop: 16}}
                placeholder="State"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                InputProps={{
                }}
            />
            <Box className={classes.formGroup}>
                <TextField
                    className={classes.formGroupItem}
                    placeholder="Zip Code"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    InputProps={{
                    }}
                />
                <FormControl className={classes.formGroupItemDouble} variant="outlined">
                    <InputLabel id="countryLabel">Country</InputLabel>
                    <Select
                        labelId="countryLabel"
                        id="ycountryLabel"
                        label="Country"
                    >
                        <MenuItem value="January">United States</MenuItem>
                        <MenuItem value="Poland">Poland</MenuItem>
                        <MenuItem value="joke">San Escobar</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className={classes.buttonBox}>
                <Button className={classes.formButton} color="secondary" type="submit" variant="contained">SAVE</Button>
            </Box>
            
    </form>
    </Card>
  );
}
