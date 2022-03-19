import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=71ee1e37';

function App() {
  //* this is a fetching logic that will fetch the data from the API
  const searchMovies = async (movie) => {
    const res = await fetch(`${API_URL}&s=${movie}`);
    const data = await res.json();

    console.table(data.Search[2]);
  };

  //* this effect will automatically render the searchMovies function
  useEffect(() => {
    searchMovies('american pie');
  }, []);

  return <h1>hi</h1>;
}

export default App;
