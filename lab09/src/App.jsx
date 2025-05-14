// src/App.jsx

import React from 'react';
import './App.css';

// Importación de componentes (ajusta las rutas si es necesario)
import Header from './components/Header';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import Menu from './components/Menu';
import Cabecera from './components/Cabecera';
import SerieComponent from './components/SerieComponent';
import Footer from './components/Footer';

const App = () => {
  // Datos de películas (para MovieList)
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 4.5,
      genre: "Sci-Fi",
      duration: "169 min",
      image: "https://via.placeholder.com/300x450/234B96/FEFEFE?text=Interstellar",
      description: "A team of explorers travel through a wormhole in space.",
      showTimes: ["2:30 PM", "5:45 PM", "9:00 PM"]
    },
    {
      id: 2,
      title: "Inception",
      rating: 4.8,
      genre: "Thriller",
      duration: "148 min",
      image: "https://via.placeholder.com/300x450/23B5E8/FEFEFE?text=Inception",
      description: "A skilled thief enters people's dreams to steal secrets.",
      showTimes: ["1:00 PM", "4:15 PM", "7:30 PM", "10:45 PM"]
    },
    {
      id: 3,
      title: "The Matrix",
      rating: 4.7,
      genre: "Action",
      duration: "136 min",
      image: "https://via.placeholder.com/300x450/23B58B/FEFEFE?text=Matrix",
      description: "A computer hacker learns about the true nature of reality.",
      showTimes: ["3:00 PM", "6:15 PM", "9:30 PM"]
    }
  ];

  // Datos de series (para mostrar con SerieComponent)
  const series = [
    { cod: 1, nom: "Friends", cat: "Comedy", img: "Friends.jpg" },
    { cod: 2, nom: "Law & Order", cat: "Drama", img: "law&order.jpg" },
    { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "thebigbangtheory.jpg" },
    { cod: 4, nom: "Stranger Things", cat: "Terror", img: "Stranger.jpg" },
    { cod: 5, nom: "Dr. House", cat: "Drama", img: "House.jpg" },
    { cod: 6, nom: "The X-Files", cat: "Drama", img: "thexfiles.jpg" },
  ];

  return (
    <div className="app-container">
      {/* Menú y cabecera (series) */}
      <Menu />
      <Cabecera />

      {/* Sección Series */}
      <section className="series-section container mt-3">
        <h1 className="border-bottom pb-3 mb-3">Series</h1>
        <div className="row">
          {series.map((serie) => (
            <div key={serie.cod} className="col-md-4 mb-3">
              <SerieComponent
                codigo={serie.cod}
                nombre={serie.nom}
                categoria={serie.cat}
                imagen={serie.img}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sección Películas */}
      <Header />
      <main className="main">
        <Hero />
        <MovieList movies={movies} />
      </main>

      {/* Footer común */}
      <Footer />
    </div>
  );
};

export default App;
