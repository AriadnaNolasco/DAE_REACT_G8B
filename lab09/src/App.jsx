// src/App.jsx

import { useState } from 'react';
import './App.css';
import SerieComponent from './components/SerieComponent';
import Menu from './components/Menu';  // Importar el componente Menu
import Cabecera from './components/Cabecera';
import Footer from './components/Footer';


function App() {
  const series = [
    { cod: 1, nom: "Friends", cat: "Comedy", img: "friends.png" },
    { cod: 2, nom: "Law & Order", cat: "Drama", img: "law-and-order.png" },
    { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "the-big-bang-theory.png" },
    { cod: 4, nom: "Stranger Things", cat: "Terror", img: "stranger-things.png" },
    { cod: 5, nom: "Dr. House", cat: "Drama", img: "dr-house.png" },
    { cod: 6, nom: "The X-Files", cat: "Drama", img: "the-x-files.png" },
  ];

  return (
    <div className="container mt-3">
      <Menu /> {/* Aquí se agrega el componente Menu */}
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
      <Footer />
    </div>
  );
}

export default App;
