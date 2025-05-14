// src/components/Menu.jsx
function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Series App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Alineación hacia la derecha */}
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categorías</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
