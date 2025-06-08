import HeaderComponent from "../components/HeaderComponent";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CategoryPage() {
  const urlApi = 'http://localhost:8000/api/categories/';
  const [categories, setCategories] = useState([]);

  const loadData = async () => {
    const resp = await axios.get(urlApi);
    console.log(resp.data);
    setCategories(resp.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async(id) => {
    if (window.confirm("Estas seguro de eliminar este registro?")) {
      await axios.delete(`${urlApi}${id}/`);
      const nLista = categories.filter(item=>item.id!=id);
      setCategories(nLista);
    }
    
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Categorías</h3>
          <NavLink to="/categories/edit/0" className="btn btn-primary">
            Nueva Categoría
          </NavLink>
        </div>

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
              <tr key={item.id}>
                <td>{item.description}</td>
                <td className="text-center">{item.id}</td>
                <td className="text-center">
                  <button className="btn btn-secondary me-2 btn-sm">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button onclick = {() => handleDelete(item.id)} className="btn btn-danger btn-sm">
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
