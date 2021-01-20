import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#0C0C0C",
    position: 'relative',
    zIndex: '100',
    color: 'white',
    textAlign: 'center',
    paddingTop: '70px',
    height: '70px',
    alignItems: 'center'
    }
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <p  component={'span'} className={classes.footer}>
        Made with 💓 and React! 
      </p>
    </div>
  )
}

export default Footer;