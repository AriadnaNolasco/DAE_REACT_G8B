import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";

function CategoryFormPage({ categories, setCategories }) {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const categoryId = parseInt(id) || 0;
  const isEditing = categoryId !== 0;

  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (isEditing) {
      const found = categories.find(cat => cat.cod === categoryId);
      if (found) {
        setCategoryName(found.nom);
      } else {
        alert("Categoría no encontrada. Redirigiendo a la lista de categorías.");
        navigate("/categories");
      }
    } else {
      setCategoryName("");
    }
  }, [categoryId, categories, isEditing, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      alert("El nombre de la categoría no puede estar vacío.");
      return;
    }

    const isDuplicate = categories.some(
      cat => cat.nom.toLowerCase() === categoryName.trim().toLowerCase() && cat.cod !== categoryId
    );
    if (isDuplicate) {
      alert("Ya existe una categoría con ese nombre. Por favor, elige otro.");
      return;
    }

    if (isEditing) {
      const actualizadas = categories.map(cat =>
        cat.cod === categoryId ? { ...cat, nom: categoryName.trim() } : cat
      );
      setCategories(actualizadas);
      alert("Categoría actualizada correctamente!");
    } else {
      const nuevoId = categories.length > 0 ? Math.max(...categories.map(c => c.cod)) + 1 : 1;
      const nuevaCat = { cod: nuevoId, nom: categoryName.trim() };
      setCategories([...categories, nuevaCat]);
      alert("Nueva categoría creada correctamente!");
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
        <h3 className="mb-3">{isEditing ? "Editar Categoría" : "Nueva Categoría"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="categoryName" className="form-label">Nombre de la categoría</label>
            <input
              type="text"
              id="categoryName"
              className="form-control"
              value={categoryName}
              // !!! AQUI ESTÁ LA MEJORA CLAVE: EL EVENTO ONCHANGE !!!
              onChange={(e) => setCategoryName(e.target.value)}
              required
            />
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">Guardar</button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CategoryFormPage;
