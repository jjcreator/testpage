import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
  chipBlue: {
    backgroundColor: "#E8F4FE",
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  chipRed: {
    backgroundColor: "rgba(244,67,54, 0.2)",
    color: "rgb(244,67,54)",
    fontWeight: "bold",

  },
  chipGreen: {
    backgroundColor: "rgba(76,175,80,0.2)",
    color: 'rgb(76,175,80)',
    fontWeight: "bold"
  }

}));

export default function MyChip(props) {
  const classes = useStyles();
  const determineChip = props => {
      switch(props.type) {
          case "blue": return classes.chipBlue;
          case "red": return classes.chipRed;
          case "green": return classes.chipGreen;
          default: return classes.chipBlue;
      }
  }
  return (
    <Chip className={determineChip(props)} size={props.size} label={props.label}/>
  );
}