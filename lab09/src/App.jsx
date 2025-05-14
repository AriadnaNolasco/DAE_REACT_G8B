import { useState } from 'react';
import './App.css';
import SerieComponent from './components/SerieComponent';

function App() {
  const series = [
    { title: "Friends", genre: "Comedy", image: "https://dummyimage.com/400x250/000/fff&text=Friends" },
    { title: "Law & order", genre: "Drama", image: "https://dummyimage.com/400x250/000/fff&text=Law+and+order" },
    { title: "The Big Bang Theory", genre: "Comedy", image: "https://dummyimage.com/400x250/000/fff&text=The+Big+Bang+Theory" }
  ];

  return (
    <div className="container mt-3">
      <h1 className="border-bottom pb-3 mb-3">Series</h1>
      <div className="row">
        {series.map((serie, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img className="card-img-top" src={serie.image} alt={serie.title} />
              <div className="card-body">
                <h5 className="card-title">{serie.title}</h5>
                <p className="card-text">{serie.genre}</p>
                <button className="btn btn-primary">Description</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
