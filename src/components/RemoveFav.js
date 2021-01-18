import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent'; 



const useStyles = makeStyles({

  iconContainer: {
    width: '168px',
    height: '20px',
    paddingTop: '0px',
    background: 'rgba(18, 18, 18, 0.2)',
    position: 'absolute',
    paddingBottom: '100px',
    bottom:'17px',
    opacity: 1
  },
  icon: {
    zIndex: 99,
    color: 'white',
    marginLeft: '110px',
    paddingLeft: '10px',
  },

});

const RemoveFav = (props) => {
  const classes = useStyles();
  return (
  <CardContent className={classes.iconContainer}>
    <div>{props.title}</div>
    <div> {props.year}</div>
    <IconButton onClick={() => props.onClick()}  className={classes.icon}>
      <RemoveIcon className={classes.favoriteIcon}/>
    </IconButton>
  </CardContent>
  );
};

export default RemoveFav;