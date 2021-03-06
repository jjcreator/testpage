import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Form from "./Form.js"
import Billing from "./Billing.js"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Box, Container,useMediaQuery, useTheme } from '@material-ui/core';
import CardDetails from './CardDetails.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
    
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Box>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: "100%",
    width: "100%",
    paddingLeft: "0",
  },
  tab: {
      width: "100%"
  },
  tabs: {
    paddingTop: "10px",
    minWidth: "200px"
  },
  tabLabel: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px"
  },
  rootBase: {
    paddingLeft: "0"
  },
  hidden: {
    display: "none"
  },
  flexTabs: {
    flexDirection: "column",
  }
});

export default function VerticalTabs(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const mediaSm = useMediaQuery(theme.breakpoints.up("md"));

  const LOWERTEXTS = {
    "Profile": "Set up your VoipChurch presence",
    "Billing": "Manage billing information and view receipts",
    "Settings Edit": "Edit your settings",
    "Account Edit": "Update your account information",
    "Sessions": "Your sessions logs"
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let label = event.target.textContent;
    if(label === "Profile") {
      props.displayBar({renderBar: true});
    }
    else props.displayBar({renderBar: false});
    props.updateTopPanel({address: label, lowerText: LOWERTEXTS[label]})
  };

  return (
        <Switch>
        <div className={`${classes.root} ${!mediaSm ? classes.flexTabs : null}`}>
            <Tabs
            orientation="vertical"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            textColor="secondary"
            >
                <Tab component={ Link } to="/profile" color="primary" classes={{wrapper: classes.tabLabel, root: classes.rootBase}} label="Profile" {...a11yProps(0)}/>
                <Tab component={ Link } to="/profile" classes={{wrapper: classes.tabLabel, root: classes.rootBase}} label="Account Edit" {...a11yProps(1)}></Tab>
                <Tab component={ Link } to="/billing" classes={{wrapper: classes.tabLabel, root: classes.rootBase}} label="Billing" {...a11yProps(2)}/>
                <Tab component={ Link } to="/profile" classes={{wrapper: classes.tabLabel, root: classes.rootBase}} label="Settings Edit" {...a11yProps(3)}/>
                <Tab component={ Link } to="/profile" classes={{wrapper: classes.tabLabel, root: classes.rootBase}} label="Sessions" {...a11yProps(4)} value={"/sessions"}/>
            </Tabs>
            <TabPanel className={classes.tab} value={value} index={0}>
                <Container className={classes.container}>
                    <Route exact path="/">
                        <Redirect to="/profile" />
                    </Route>
                    <Route path="/profile" exact component={Form}/>
                </Container> 
            </TabPanel>
            <TabPanel className={classes.tab} value={value} index={1}>
                <Container className={classes.container}>
                    ACCOUNT EDIT
                </Container>
            </TabPanel>
            <TabPanel className={classes.tab} value={value} index={2}>
            <Container className={classes.container}>
                <Route path="/billing" exact component={Billing}/>
                <Route path="/billing/card" exact component={CardDetails}/>
            </Container>
            </TabPanel>
            <TabPanel className={classes.tab} value={value} index={3}>
                <Container className={classes.container}>
                settings
                </Container>
            </TabPanel>
            <TabPanel className={classes.tab} value={value} index={4}>
                <Container className={classes.container}>
                sessions
                </Container>
            </TabPanel>
        </div>
        </Switch>
  );
}