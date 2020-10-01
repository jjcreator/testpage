import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

export default function LinearProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end" alignItems="center" direction="column" spacing={1}>
      <Grid className={classes.root} item>
        <LinearProgress color="secondary" variant="determinate" {...props} />
      </Grid>
      <Grid item container justify="space-between">
        <Grid item>
            <Typography variant="caption text">Minutes used this billing cycle:</Typography>   
        </Grid>
        <Grid item>
            <Typography variant="caption text" color="textPrimary">{`${Math.round(
            props.value,
            )}%`}
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};