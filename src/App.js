import { React, useState, useEffect} from 'react';
import './App.css';
import MovieList  from './components/movielist';
import Navbar from './components/navigation/Navbar';
import MovieHeading from './components/MovieHeading';
import AddFav from './components/addFav';
import RemoveFav from './components/RemoveFav';
import MaxBanner from './components/MaxBanner';
import Footer from './components/navigation/Footer';


const App =() => {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [favourites, setFavourites] = useState([]);
  const API_KEY = "3e9a5e9e";

  const getMovieReq = async (searchVal) => {
    const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const resJson = await response.json();
    //console.log(movies);

    if (resJson.Search) {
      setMovies(resJson.Search);
    } 
  };

  // Check change on search Value
  useEffect(() => {
    getMovieReq(searchVal);
  }, [searchVal]);

  
  // Check change on new favourite, than save it
  useEffect(() => {
    const movieFav = JSON.parse
    (localStorage.getItem('react-movie-app-favourites'))
    setFavourites(movieFav)
  }, []);

  const saveToStorage  = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }



  const addFavMovie = (movie) => {
    // Make sure no duplicates in list
    const newFavouriteList = favourites.includes(movie) ? favourites: [...favourites, movie];
    if (newFavouriteList.length !== 6) {
      setFavourites(newFavouriteList);
      saveToStorage(newFavouriteList);
    }

  }

  const removeFavMovie = (movie) => {
    // Filters favoure list, and return the new shortned movie list
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToStorage(newFavouriteList);
    console.log(newFavouriteList.length)
  }

  let maxNominations;
  if (favourites.length === 5) {
    console.log("Max")
    maxNominations = (
      <MaxBanner/>
    );
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
        {maxNominations}
        <MovieList 
          movies={favourites} 
          featureComponent={RemoveFav}
          handleFav={removeFavMovie} />
        <Footer/>
    </div>
  );
}

export default App;
