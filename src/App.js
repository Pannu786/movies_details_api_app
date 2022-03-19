import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import { MoviesCard } from './MoviesCard';

const API_URL = 'http://www.omdbapi.com/?apikey=71ee1e37';

const demoMovieData = {
  Poster:
    "https://m.media-amazon.com/images/M/'MV5BOTdlMzdmNDAtYTIyNi00ZWZiLWE3ZDYtOTg2YzE3NDRkNTYwXkEyXkFqcGdeQXVyODQ4NjA3Mw@@._V1_SX300.jpg",
  Title: "American Pie Presents: Girls' Rules",
  Type: 'movie',
  Year: '2020',
  imdbID: 'tt11771594',
};

function App() {
  //* this is a fetching logic that will fetch the data from the API
  const searchMovies = async (movie) => {
    const res = await fetch(`${API_URL}&s=${movie}`);
    const data = await res.json();

    console.table(data);
  };

  //* this effect will automatically render the searchMovies function
  useEffect(() => {
    searchMovies('american pie');
  }, []);

  return (
    <div className='app'>
      <h1>MoviesInfoo</h1>

      <div className='search'>
        <input
          placeholder='Search for movies...'
          value='Batman'
          onChange={() => {}}
        />
        <img src={SearchIcon} alt='search' onClick={() => {}} />
      </div>

      <div className='container'>
        <MoviesCard demoMovieData={demoMovieData} />
      </div>
    </div>
  );
}

export default App;
