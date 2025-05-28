import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";

function CategoryFormPage({ categories, setCategories }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const categoryId = parseInt(id);

  const isEditing = categoryId !== 0;

  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (isEditing) {
      const found = categories.find(cat => cat.cod === categoryId);
      if (found) {
        setCategoryName(found.nom);
      }
    } else {
      setCategoryName("");
    }
  }, [categoryId, categories, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Editar categoría existente
      const actualizadas = categories.map(cat =>
        cat.cod === categoryId ? { ...cat, nom: categoryName } : cat
      );
      setCategories(actualizadas);
    } else {
      // Crear nueva categoría
      const nuevoId = categories.length > 0 ? Math.max(...categories.map(c => c.cod)) + 1 : 1;
      const nuevaCat = { cod: nuevoId, nom: categoryName };
      setCategories([...categories, nuevaCat]);
    }

    navigate("/categories");
  };

  const handleCancel = () => {
    navigate("/categories");
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <h3>{isEditing ? "Editar Categoría" : "Nueva Categoría"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="categoryName" className="form-label">Nombre de la categoría</label>
            <input
              type="text"
              id="categoryName"
              className="form-control"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
            />
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">Guardar</button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CategoryFormPage;
