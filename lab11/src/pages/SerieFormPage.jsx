import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";

function SerieFormPage({ series, setSeries }) {
  // Creamos una constante con la estructura que enviaremos luego al servicio Web creado en Django.
  const initData = {
    cod: '',
    nom: '',
    cat: '',
  };

  // Definimos la variable de estado data y la función responsable de cambiar su estado
  const [data, setData] = useState(initData);

  // Función para manejar el cambio de la caja de texto del nombre
  const onChangeNombre = (e) => {
    const nData = { ...data, nom: e.target.value };
    setData(nData);
  };

  const navigate = useNavigate();
  const { id } = useParams(); 
  const isEditing = parseInt(id) !== 0;

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (isEditing) {
      const found = series.find(s => s.cod === parseInt(id));
      if (found) {
        setNombre(found.nom);
        setCategoria(found.cat);
        setImagen(found.img);
      }
    }
  }, [id, series, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const actualizadas = series.map(s =>
        s.cod === parseInt(id)
          ? { ...s, nom: nombre, cat: categoria, img: imagen }
          : s
      );
      setSeries(actualizadas);
    } else {
      const nuevoId = Math.max(...series.map(s => s.cod)) + 1;
      const nuevaSerie = {
        cod: nuevoId,
        nom: nombre,
        cat: categoria,
        img: imagen
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
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <img
              className="card-img-top mb-3"
              src={imagen || "https://dummyimage.com/400x250/000/fff&text=Imagen"}
              alt="preview"
            />
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <select
                className="form-select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Seleccionar imagen</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setImagen(imageUrl);
                  }
                }}
                required={!isEditing && !imagen}
              />
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
