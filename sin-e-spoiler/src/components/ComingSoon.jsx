// components/ComingSoon.jsx
const ComingSoon = ({ upcomingMovies }) => {
  return (
    <section className="section" id="coming-soon">
      <div className="container">
        <h2 className="section__title">Coming Soon</h2>
        <div className="g-layout g-layout--auto-fit-columns">
          {upcomingMovies.map((movie) => (
            <div key={movie.id} className="coming-soon__item card">
              <img
                src={movie.image}
                alt={movie.title}
                className="coming-soon__image img"
              />
              <h3 className="title--xs">{movie.title}</h3>
              <p className="text--sm">
                Release: {new Date(movie.releaseDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
