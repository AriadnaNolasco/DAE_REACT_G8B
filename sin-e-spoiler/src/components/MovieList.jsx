// components/MovieList.jsx - Movie grid container
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    //Props: movies - Array of movie objects
  return (
    <section id="movies" className="section section--movies">
      <div className="container">
        <h2 className="section__title">Now Showing</h2>
        
        <div className="g-layout g-layout--auto-fit-columns">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
            //Forma unica de
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
