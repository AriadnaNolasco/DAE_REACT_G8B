import React from 'react';

const GenreFilter = ({ genres, activeGenre, onGenreChange }) => {
  return (
    <div className="genre-filter">
      {genres.map(genre => (
        <button
          key={genre}
          className={`genre-filter__button ${activeGenre === genre ? 'genre-filter__button--active' : ''}`} // BEM: Bloque__Elemento--Modificador
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;