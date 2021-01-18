import { React, useState, useEffect} from 'react';
import './App.css';
import MovieList  from './components/movielist';
import Navbar from './components/navigation/navbar';
import MovieHeading from './components/MovieHeading';
import AddFav from './components/addFav';
import RemoveFav from './components/RemoveFav';


const App =() => {

  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [favourites, setFavourites] = useState([]);
  const API_KEY = "3e9a5e9e"

  const getMovieReq = async () => {
    const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const resJson = await response.json();
    //console.log(movies);

    if (resJson.Search) {
      setMovies(resJson.Search);
    } 
  };

  useEffect(() => {
    getMovieReq(searchVal);
  }, [searchVal]);

  
  useEffect(() => {
    const movieFav = JSON.parse
    (localStorage.getItem('react-movie-app-favourites')
    )
    setFavourites(movieFav)
  }, []);

  const saveToStorage  = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

  const addFavMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToStorage(newFavouriteList);
    console.log("Movie Added")
  }

  const removeFavMovie = (movie) => {
    // Filters favoure list, and return the new shortned movie list
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToStorage(newFavouriteList);
  }


  return (
    <div className="App">
        <Navbar input={searchVal} setInput ={setSearchVal}/>
        <MovieHeading title='Movies'/>
        <MovieList 
          movies={movies} 
          featureComponent={AddFav}
          handleFav={addFavMovie} />
        
        <MovieHeading title='Favourites'/>
        <MovieList 
          movies={favourites} 
          featureComponent={RemoveFav}
          handleFav={removeFavMovie} />
    </div>
  );
}

export default App;
