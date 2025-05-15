// App.jsx - Main application component
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import GenreFilter from './components/GenreFilter';
import FeaturedMovie from './components/FeaturedMovie';
import MovieSearch from './components/MovieSearch';
import PromoBanner from './components/PromoBanner';
import ComingSoon from './components/ComingSoon'; 
import { getMovies } from './data/movies';
import { promoData } from './data/promos';
import { getUpcomingMovies } from './data/movies';
import './css/index.css';


const App = () => {
  // Get movies from our data file
  const allMovies = getMovies();
  const uniqueGenres = [...new Set(allMovies.map(movie => movie.genre))];

  const [activeGenre, setActiveGenre] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = allMovies
    .filter(movie => !activeGenre || movie.genre === activeGenre)
    .filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const mostPopularMovie = allMovies[0];

  const upcomingMovies = getUpcomingMovies();

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <PromoBanner promo={promoData} />
        {!activeGenre && <FeaturedMovie movie={mostPopularMovie} />}
        <section className="section">
          <div className="container">
            <MovieSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>

          <div className="container" style={{ marginTop: '2rem' }}>
            <GenreFilter
              genres={uniqueGenres}
              activeGenre={activeGenre}
              onGenreChange={setActiveGenre}
            />
          </div>
        </section>
        <MovieList movies={filteredMovies} />
        <ComingSoon upcomingMovies={upcomingMovies} />
      </main>
      <Footer />
    </>
  );
};

export default App;
