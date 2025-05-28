import HeaderComponent from "../components/HeaderComponent";
import SerieComponent from "../components/SerieComponent";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function SeriePage({ series, setSeries }) {

  const handleDelete = (codigo) => {
    const confirmacion = window.confirm("¿Estás seguro de eliminar esta serie?");
    if (confirmacion) {
      const nuevasSeries = series.filter(s => s.cod !== codigo);
      setSeries(nuevasSeries);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Series</h3>
          <div>
            <NavLink className="btn btn-primary" to="/series/edit/0">
              Nuevo
            </NavLink>
          </div>
        </div>
        <div className="row">
          {series.map((serie) => (
            <div key={serie.cod} className="col-md-3 mb-3">
              <SerieComponent
                codigo={serie.cod}
                nombre={serie.nom}
                categoria={serie.cat}
                imagen={serie.img}
                onDelete={handleDelete} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeriePage;
