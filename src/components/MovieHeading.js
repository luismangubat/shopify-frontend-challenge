import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({

  title: {
    paddingTop: '100px',
    fontWeight: '600',
    fontSize: '30px',
    color: 'white',
    zIndex: 100,
    paddingLeft: '50px'
  }

});


const MovieHeading = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.title}>
      {props.title}
    </div>

  )

}

export default MovieHeading;