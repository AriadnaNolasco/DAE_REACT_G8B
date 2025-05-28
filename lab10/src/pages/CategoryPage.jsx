import React, { useState, useEffect } from 'react';
import HeaderComponent from "../components/HeaderComponent";
import { Link } from 'react-router-dom';
import CategoryRowComponent from '../components/CategoryRowComponent'; // Importa el componente presentador

function CategoryPage(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Simulación de carga de datos (como si vinieran de una API)
    useEffect(() => {
        // En una app real, aquí harías un fetch('/api/categories')
        // Por ahora, simulamos unos datos y un retraso.
        setLoading(true);
        setTimeout(() => {
            const mockCategories = [
                { cod: 1, nom: 'Acción' },
                { cod: 2, nom: 'Aventura' },
                { cod: 3, nom: 'Comedia' },
                { cod: 4, nom: 'Drama' },
                { cod: 5, nom: 'Ciencia Ficción' },
            ];
            setCategories(mockCategories);
            setLoading(false);
        }, 100); // Pequeño retraso para simular carga
    }, []);

    // Función para manejar la eliminación de una categoría
    // Esta lógica de negocio reside en el Contenedor (CategoryPage)
    const handleDelete = (idToDelete) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
            // En una app real, aquí harías un fetch con método DELETE
            // Por ahora, actualizamos el estado local.
            const updatedCategories = categories.filter(cat => cat.cod !== idToDelete);
            setCategories(updatedCategories);
            alert("Categoría eliminada correctamente!");
        }
    };

    if (loading) return <p>Cargando categorías...</p>;
    if (error) return <p>Error al cargar las categorías: {error}</p>;

    return (
        <>
             <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
                    <h3>Categorías</h3>
                    <Link to="/categories/new" className="btn btn-primary">Nueva Categoría</Link>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th className="text-center">ID</th>
                            <th className="text-center" style={{width: "100px"}}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí el Contenedor renderiza los Presentadores, pasándoles los datos y funciones */}
                        {categories.map((item)=>(
                            <CategoryRowComponent
                                key={item.cod}
                                category={item}
                                onDelete={handleDelete} // Pasa la función de eliminar al presentador
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CategoryPage;
