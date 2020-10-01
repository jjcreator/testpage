import React from 'react';
import TabPanel from "./TabPanel.js"
import LinearProgressWithLabel from "./LinearProgressWithLabel.js"
import { Container, Button, Grid, Typography, Avatar } from "@material-ui/core";
import image from "./face.png";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    button: {
        color: "blue"
    }
  }));

function MainContent() {
  const classes = useStyles();
  return (
      <Container className={classes.mainContainer}>
        <Grid container direction='column' spacing={2}>
            <Grid item container direction="row" justify="space-between">
                <Grid item container xl={5} lg={5} sm={12}>
                    <Grid item container direction="row">
                        <Grid item xs={2}>
                            <Avatar className={classes.avatar} alt="A guy" src={image}/>
                        </Grid>
                        <Grid xs={10} item container direction="column" alignItems="flex-start">
                            <Grid item container alignItems="center">
                                <Typography variant="h5">John Doe</Typography>
                                <Button className={classes.button}>PRO</Button>
                                <Typography variant="h5">Edit Profile</Typography>
                            </Grid>
                            <Grid item>
                                <Typography color="secondary">Set up your VoipChurch presence</Typography>
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
                <TabPanel></TabPanel>
            </Grid>
            
        </Grid>
      </Container>
  );
}

export default MainContent;
