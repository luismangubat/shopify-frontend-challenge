import {React }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: '30px',
    backgroundColor: '#0C0C0C'

    

  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
    height: '325px',
    overflowY: 'hidden',

  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  row: {
    marginTop:'50px',
    height: '300px'

  },
  imageContainer: {
    width: '300px',
    "&:hover": {
      width: '500px',
      color: 'white'
    },

    image: {
      "&:hover": {
        width: '500px',
        color: 'white'
      }
    }
  },


}));


export default function MovieList(props) {

  const FeatureComponent = props.featureComponent;
  const classes = useStyles();

  return (
    <div className={classes.root} flexWrap='nowrap'>
      <GridList cellHeight={200}  className={classes.gridList} cols={2.5} flexWrap='nowrap'>
        {props.movies.map((movie, index) => ( 
              <div className={classes.imageContainer}  >
                <img src={movie.Poster} width="200px" height="300px" alt='movie' flexWrap='nowrap' className={classes.image}/>    
                <FeatureComponent onClick={() => props.handleFav(movie)} title={movie.Title} year={movie.Year}/>
              </div>
        ))}
      </GridList>
    </div>
  );
}

