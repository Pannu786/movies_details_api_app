import { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import { MoviesCard } from './MoviesCard';

const API_URL = `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}`;

// const demoMovieData = {
//   Poster:
//     "https://m.media-amazon.com/images/M/'MV5BOTdlMzdmNDAtYTIyNi00ZWZiLWE3ZDYtOTg2YzE3NDRkNTYwXkEyXkFqcGdeQXVyODQ4NjA3Mw@@._V1_SX300.jpg",
//   Title: "American Pie Presents: Girls' Rules",
//   Type: 'movie',
//   Year: '2020',
//   imdbID: 'tt11771594',
// };

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  //* this is a fetching logic that will fetch the data from the API
  const searchMovies = async (movie) => {
    const res = await fetch(`${API_URL}&s=${movie}`);
    const data = await res.json();

    // console.log(data);
    setMovies(data.Search);
  };

  //* this effect will automatically render the searchMovies function
  // useEffect(() => {
  //   searchMovies('');
  // }, []);

  return (
    <div className='app'>
      <h1>MoviesInfoo</h1>

      <div className='search'>
        <input
          placeholder='Search for movies...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={(e) => {
            searchMovies(search);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie, i) => (
            <MoviesCard movie={movie} key={i}/>
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>NO MOVIES FOUND BRAAA...😐</h2>
        </div>
      )}
    </div>
  );
}

export default App;
