// components/FeaturedMovie.jsx
import { getImageUrl } from '../data/movies';

const FeaturedMovie = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="featured-movie section">
      <div className="featured-movie__backdrop">
        <img
          src={getImageUrl(movie.backdrop_path, 'w1280')}
          alt={movie.title}
          className="img img--background"
        />
      </div>

      <div className="featured-movie__content container">
        <h2 className="title">{movie.title}</h2>
        <p className="text">{movie.description}</p>
        <button className="button button--primary">Book Now</button>
      </div>
    </div>
  );
};

export default FeaturedMovie;
