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
      alignItems: "flex-start",
      padding: "10% 20%",
      position: "relative"
    },
    submit: {
        marginLeft: "8px",
        padding: "10px 25px",
        marginTop: "25px"
    },
    input: {
        fontWeight: "500"
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
            InputProps={{
                className: classes.input
            }}
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
            InputProps={{
                className: classes.input
            }}
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
            InputProps={{
                className: classes.input
            }}
        />
        <TextField
            id="outlined-full-width"
            label="Mobile phone"
            style={{margin: 8}}
            placeholder="Mobile phone"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            InputProps={{
                className: classes.input
            }}
        />
        <TextField
            id="outlined-full-width"
            label="Country"
            style={{margin: 8}}
            placeholder="Country of residence"
            fullWidth
            
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            InputProps={{
                className: classes.input
            }}
        />
        <Button color="secondary" type="submit" variant="contained" className={classes.submit}>SAVE PROFILE</Button>

    </form>
  );
}

export default Form;
