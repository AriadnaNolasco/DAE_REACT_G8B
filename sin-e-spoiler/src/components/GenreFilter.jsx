// components/GenreFilter.jsx
const GenreFilter = ({ genres, activeGenre, onGenreChange }) => {
  return (
    <div className="genre-filter d-flex g-2 j-content-center f-wrap">
      <button
        className={`button ${!activeGenre ? 'button--primary' : ''}`}
        onClick={() => onGenreChange(null)}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          className={`button ${activeGenre === genre ? 'button--primary' : ''}`}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;

