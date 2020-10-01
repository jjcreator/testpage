import React from 'react';
import Form from "./Form.js"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Box, Grid, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
        <Box>
          <Typography>{children}</Typography>
        </Box>
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: "100%",
    width: "100%"
  },
  tab: {
      width: "100%"
  },
  tabs: {
    paddingTop: "10px"
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px"
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="PROFILE" {...a11yProps(0)} />
        <Tab label="ACCOUNT EDIT" {...a11yProps(1)} />
        <Tab label="BILLING" {...a11yProps(2)} />
        <Tab label="SETTINGS EDIT" {...a11yProps(3)} />
        <Tab label="SESSIONS" {...a11yProps(4)} />
      </Tabs>
      <TabPanel classes={{root: classes.tabRoot}} className={classes.tab} value={value} index={0}>
      <Container className={classes.container}>
        <Form/>
      </Container> 
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={1}>
      <Container className={classes.container}>
        ACCOUNT EDIT
      </Container>
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={2}>
      <Container className={classes.container}>
        BILLING
      </Container>
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={3}>
      <Container className={classes.container}>
        SETTINGS EDIT
      </Container>
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={4}>
      <Container className={classes.container}>
        SESSIONS
      </Container>
      </TabPanel>
    </div>
  );
}