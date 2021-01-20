import { React, useState, useEffect} from 'react';
import './App.css';
import MovieList  from './components/Movielisting';
import Navbar from './components/navigation/Navigationbar';
import MovieHeading from './components/MovieHeading';
import AddNom from './components/AddNom';
import RemoveNom from './components/RemoveNom';
import MaxBanner from './components/MaxBanner';
import Footer from './components/navigation/Footer';

const App =() => {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [favourites, setFavourites] = useState([]);
  const API_KEY="3e9a5e9e"

  const getMovieReq = async (searchVal) => {
    try {
      const url = `https://www.omdbapi.com/?s=${searchVal}&apikey=${API_KEY}`;
      const response =  await fetch(url);
      const responseJson = await response.json();
      console.log(response)
      
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } 
        return []
    } catch (err) {
      console.log(err)
    }
  };

  // Check change on search Value
  useEffect(() => {
    if (searchVal === undefined) {
      getMovieReq("Avengers")  
    }
    getMovieReq(searchVal);
  }, [searchVal]);

  const addNomMovie = (movie) => {
    // Make sure no duplicates in list
    const newFavouriteList = favourites.includes(movie) ? favourites: [...favourites, movie];
    if (newFavouriteList.length !== 6) {
      setFavourites(newFavouriteList);
      //saveToStorage(newFavouriteList);
    }

  }

  const removeNomMovie = (movie) => {
    // Filters favoure list, and return the new shortned movie list
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    //saveToStorage(newFavouriteList);
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
        <Navbar input={searchVal} setInput={setSearchVal}/>
        <MovieHeading title='Movies'/>
        <MovieList 
          movies={movies} 
          featureComponent={AddNom}
          handleFav={addNomMovie} />
        <MovieHeading title='Nominations'/>
        {maxNominations}
        <MovieList 
          movies={favourites} 
          featureComponent={RemoveNom}
          handleFav={removeNomMovie} />
        <Footer/>
    </div>
  );
}

export default App;
