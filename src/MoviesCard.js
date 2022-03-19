export const MoviesCard = ({ demoMovieData }) => {
  return (
    <div className='movie'>
      <div>
        <p>{demoMovieData.Year}</p>
      </div>
      <div>
        <img
          src={
            demoMovieData.Poster !== 'N/A'
              ? demoMovieData.Poster
              : 'https://via.placeholder.com/400'
          }
          alt={demoMovieData.Title}
        />
      </div>

      <div>
        <span>{demoMovieData.Type}</span>
        <h3>{demoMovieData.Title}</h3>
      </div>
    </div>
  );
};
