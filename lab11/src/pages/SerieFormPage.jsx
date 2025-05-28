import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";

function SerieFormPage({ series, setSeries }) {
  const initData = {
    cod: '',
    nom: '',
    cat: '',
  };

  const [data, setData] = useState(initData);
  const [imagen, setImagen] = useState("");

  const onChangeNombre = (e) => {
    setData({ ...data, nom: e.target.value });
  };

  const onChangeCategoria = (e) => {
    setData({ ...data, cat: e.target.value });
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = parseInt(id) !== 0;

  useEffect(() => {
    if (isEditing) {
      const found = series.find(s => s.cod === parseInt(id));
      if (found) {
        setData({
          cod: found.cod,
          nom: found.nom,
          cat: found.cat,
        });
        setImagen(found.img);
      }
    }
  }, [id, series, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const actualizadas = series.map(s =>
        s.cod === parseInt(id)
          ? { ...s, nom: data.nom, cat: data.cat, img: imagen }
          : s
      );
      setSeries(actualizadas);
    } else {
      const nuevoId = Math.max(...series.map(s => s.cod), 0) + 1;
      const nuevaSerie = {
        cod: nuevoId,
        nom: data.nom,
        cat: data.cat,
        img: imagen,
      };
      setSeries([...series, nuevaSerie]);
    }

    navigate("/series");
  };

  const handleCancel = () => {
    navigate("/series");
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>{isEditing ? "Editar Serie" : "Nueva Serie"}</h3>
        </div>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-4">
            <img
              id="fileImg"
              className="card-img-top mb-3"
              src={"https://dummyimage.com/400x250/000/fff"}
              alt="img"
            />
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Nombre</label>
              <input
                type="text"
                value={data.nom}
                onChange={onChangeNombre}
                className="form-control"
                id="inputName"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">Categoría</label>
              <select
                value={data.cat}
                onChange={onChangeCategoria}
                className="form-select"
                id="inputCategory"
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
              </select>
            </div>

            <div className="mb-3 d-flex gap-2">
              <button className="btn btn-primary" type="submit">Guardar</button>
              <button className="btn btn-secondary" type="button" onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SerieFormPage;
