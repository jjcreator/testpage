import React, { useState } from 'react';
import VerticalTabs from "./VerticalTabs.js"
import LinearProgressWithLabel from "./LinearProgressWithLabel.js"
import { Container, Grid, Typography, Avatar, Chip, Breadcrumbs, Link } from "@material-ui/core";
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
    },
    mainContent: {
        paddingBottom: "50px"
    }
  }));

function MainContent() {
    const [barVisibility, setBarVisibility] = useState({renderBar: true});
    const [topPanelText, setTopPanelText] = useState({address: undefined, lowerText: undefined});
    const displayBar = object => {
      setBarVisibility(object);
    }
    const [cardDetails, setCardDetails] = useState(false);
    const cardLinkToggle = boolean => {
        setCardDetails(boolean)
    }

    const updateTopPanel = object => {
      setTopPanelText(object)
    }

    const classes = useStyles();
    return (
        <Container className={classes.mainContent} maxWidth="md">
            <Grid container direction='column' spacing={5}>
                <Grid item container direction="row" justify="space-between" spacing={2}>
                    <Grid item container xl={8} lg={8} sm={12}>
                        <Grid item container direction="row" spacing={2} sm={12} xs={12}>
                            <Grid item>
                                <Avatar className={classes.avatar} alt="A guy" src={image}/>
                            </Grid>
                            <Grid xs={10} item container direction="column" alignItems="flex-start">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link color="inherit" href="/">
                                        <Typography color="textPrimary" variant="h6">John Doe</Typography>
                                    </Link>
                                    <Link color="inherit" href="#">
                                        <Chip size="small" label="PRO" color="secondary" className={classes.chip}/>
                                    </Link>
                                    <Link color="inherit" href="#">
                                        <Typography variant="h6" color={cardDetails? "secondary" : "textPrimary"}>{topPanelText.address || "Edit profile"}</Typography>
                                    </Link>
                                    {cardDetails ? (<Link color="inherit" href="#">
                                        <Typography variant="h6" color="textPrimary">Card
                                        </Typography>
                                    </Link>): null}        
                                </Breadcrumbs>
                                <Grid item>
                                    <Typography color="textSecondary">{topPanelText.lowerText || "Set up your VoipChurch presence"}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xl={4} lg={4} xs={12}>
                        <Grid container item xs={12}>
                            {barVisibility.renderBar &&<LinearProgressWithLabel value={40} />}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <VerticalTabs cardLinkToggle={cardLinkToggle} chipStyle={classes.chip} updateTopPanel={updateTopPanel} displayBar={displayBar}/>
                </Grid>
            </Grid>
        </Container>
  );
}

export default MainContent;
