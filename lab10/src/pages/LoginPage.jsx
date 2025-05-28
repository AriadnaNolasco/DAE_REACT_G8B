import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith("@tecsup.edu.pe")) {
      alert("Solo se permite ingresar con correos @tecsup.edu.pe");
      return;
    }

    if (!password) {
      alert("Por favor, ingresa tu contraseña");
      return;
    }

    login({ email }); // Guardamos solo el correo
    navigate("/series"); // Redireccionamos
  };

  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">E-Mail</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      required
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">Contraseña</label>
                      <a href="#" className="float-end">
                        Recuperar Contraseña?
                      </a>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                      <label htmlFor="remember" className="form-check-label">Recordarme</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright &copy; Tecsup 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
