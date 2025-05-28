import HeaderComponent from "../components/HeaderComponent";
import { NavLink } from "react-router-dom";

function CategoryPage({ categories, setCategories }) {
  const handleDelete = (codigo) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar esta categoría?");
    if (confirmar) {
      const actualizadas = categories.filter(cat => cat.cod !== codigo);
      setCategories(actualizadas);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        {/* Encabezado con título y botón para nueva categoría */}
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Categorías</h3>
          <NavLink to="/categories/edit/0" className="btn btn-primary">
            Nueva Categoría
          </NavLink>
        </div>

        {/* Tabla de categorías */}
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th className="text-center">Id</th>
              <th className="text-center" style={{ width: "100px" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr key={item.cod}>
                <td>{item.nom}</td>
                <td className="text-center">{item.cod}</td>
                <td className="text-center">
                  {/* Botón Editar */}
                  <NavLink
                    to={`/categories/edit/${item.cod}`}
                    className="btn btn-secondary me-2 btn-sm"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </NavLink>

                  {/* Botón Eliminar */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.cod)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryPage;
