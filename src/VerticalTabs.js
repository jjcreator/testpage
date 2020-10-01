import React from 'react';
import Form from "./Form.js"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Box, Container } from '@material-ui/core';

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
    width: "100%"
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
  textColor: {
    color: "green"
  }
});

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
        textColor="secondary"
      >
        <Tab color="primary" classes={{wrapper: classes.tabLabel}} label="PROFILE" {...a11yProps(0)} />
        <Tab classes={{wrapper: classes.tabLabel}} label="ACCOUNT EDIT" {...a11yProps(1)} />
        <Tab classes={{wrapper: classes.tabLabel}} label="BILLING" {...a11yProps(2)} />
        <Tab classes={{wrapper: classes.tabLabel}} label="SETTINGS EDIT" {...a11yProps(3)} />
        <Tab classes={{wrapper: classes.tabLabel}} label="SESSIONS" {...a11yProps(4)} />
      </Tabs>
      <TabPanel className={classes.tab} value={value} index={0}>
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