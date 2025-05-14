import { useState } from 'react';
import './App.css';
import SerieComponent from './components/SerieComponent';
import Cabecera from './components/Cabecera';
import Footer from './components/Footer';

function App() {
  const series = [
    { cod: 1, nom: "Friends", cat: "Comedy", img: "Friends.jpg" },
    { cod: 2, nom: "Law & Order", cat: "Drama", img: "law&order.jpg" },
    { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "thebigbagtheory.jpg" },
    { cod: 4, nom: "Stranger Things", cat: "Terror", img: "Stranger.jpg" },
    { cod: 5, nom: "Dr. House", cat: "Drama", img: "House.jpg" },
    { cod: 6, nom: "The X-Files", cat: "Drama", img: "thexfiles.jpg" },
  ];

  return (
    <div className="container mt-3">
      <Cabecera />
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
      <Footer /> {/* Añadir Footer aquí */}
    </div>
  );
}

export default App;
