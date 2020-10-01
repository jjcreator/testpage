import React from 'react';
import VerticalTabs from "./VerticalTabs.js"
import LinearProgressWithLabel from "./LinearProgressWithLabel.js"
import { Container, Button, Grid, Typography, Avatar, Chip } from "@material-ui/core";
import image from "./face.png";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    chip: {
        backgroundColor: "#E8F4FE",
        color: theme.palette.secondary.main,
        fontWeight: "bold"
    }
  }));

function MainContent() {
  const classes = useStyles();
  return (
      <Container className={classes.mainContainer}>
        <Grid container direction='column' spacing={5}>
            <Grid item container direction="row" justify="space-between" spacing={2}>
                <Grid item container xl={6} lg={6} sm={12}>
                    <Grid item container direction="row" spacing={2} xs={10}>
                        <Grid item>
                            <Avatar className={classes.avatar} alt="A guy" src={image}/>
                        </Grid>
                        <Grid xs={10} item container direction="column" alignItems="flex-start">
                            <Grid item container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography variant="h6">John Doe</Typography>
                                </Grid>
                                <Grid item>
                                    <Chip size="small" label="PRO" color="secondary" className={classes.chip}/> 
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" color="secondary">/</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">Edit Profile</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography color="primary">Set up your VoipChurch presence</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xl={4} lg={4} sm={12}>
                    <Grid container item xs={12}>
                        <LinearProgressWithLabel value={40} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <VerticalTabs/>
            </Grid>
            
        </Grid>
      </Container>
  );
}

export default MainContent;
