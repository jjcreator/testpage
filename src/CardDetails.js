import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles({
  
})

export default function CardDetails(props) {
  const classes = useStyles();
  const [date, setDate] = React.useState({});

  const handleChange = (event) => {
    // setDate({event.target.name : event.target.value})
    console.log(event)
  };
  return (
    <div className={classes.billing}>
      <form className={classes.form}>
        <TextField
            label="Account Holder"
            style={{margin: 8}}
            placeholder="Account holder name"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            InputProps={{
            }}
        />
        <TextField
            label="Last name"
            style={{margin: 8}}
            placeholder="Last name"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <CreditCardIcon />
                </InputAdornment>
          ),
        }}
        />
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={date.month}
                onChange={handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
         </FormControl>
         <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={date.year}
                onChange={handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
         </FormControl>
        <Button color="secondary" type="submit" variant="contained" className={classes.submit}>SAVE PROFILE</Button>

    </form>
    </div>
  );
}
