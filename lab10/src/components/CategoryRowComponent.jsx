import React from 'react';
import { Link } from 'react-router-dom';

// Componente Presentador: Solo se encarga de cómo se ve una fila de categoría
// Recibe los datos de la categoría y las funciones para editar/eliminar como props.
function CategoryRowComponent({ category, onDelete }) {
  return (
    <tr key={category.cod}>
      <td> {category.nom} </td>
      <td className="text-center"> {category.cod} </td>
      <td className="text-center">
        <Link to={`/categories/edit/${category.cod}`} className="btn btn-secondary me-2 btn-sm">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <button onClick={() => onDelete(category.cod)} className="btn btn-danger btn-sm">
          <i className="bi bi-trash-fill"></i>
        </button>
      </td>
    </tr>
  );
}

export default CategoryRowComponent;