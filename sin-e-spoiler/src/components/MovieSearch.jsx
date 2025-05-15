// components/MovieSearch.jsx
const MovieSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="movie-search d-flex g-2 j-content-center f-wrap">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search movies..."
        className="search__input"
      />
    </div>
  );
};

export default MovieSearch;
