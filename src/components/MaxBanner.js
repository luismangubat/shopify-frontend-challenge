import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  maxBanner: {

    backgroundColor: "#0C0C0C",
    position: 'relative',
    zIndex: '100',
    color: 'white',
    textAlign: 'center'
    }
  })
);

const MaxBanner = () => {

  const className = useStyles(); 
  return(
    <h3 className={className.maxBanner}>
      You can only nomimnate 5 movies!
    </h3>

  )
}

export default MaxBanner;