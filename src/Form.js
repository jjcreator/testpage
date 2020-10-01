import React from 'react';
import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    form: {
      backgroundColor: "#fff",
      border: "1px solid #E0E0E0",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: "100px 200px"
    }
  });


function Form() {
  const classes = useStyles()
  return (
    <form className={classes.form}>
        <TextField
            id="outlined-full-width"
            label="First name"
            style={{margin: 8}}
            placeholder="First name"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Last name"
            style={{margin: 8}}
            placeholder="Last name"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Email"
            style={{margin: 8}}
            placeholder="Email"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="First name"
            style={{margin: 8}}
            placeholder="Mobile phone"
            fullWidth
            margin="Mobile phone number"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Country"
            style={{margin: 8}}
            placeholder="Country of residence"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />

    </form>
  );
}

export default Form;
