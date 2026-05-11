import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (!email.trim() || !password.trim()) {
      setMessage('⚠️ Todos los campos son obligatorios.');
      setIsError(true);
      return;
    }

    if (password.length < 6) {
      setMessage('⚠️ La contraseña debe tener al menos 6 caracteres.');
      setIsError(true);
      return;
    }

    // Success
    setMessage('🍕 ¡Inicio de sesión exitoso! Bienvenido a Pizzería Mamma Mía.');
    setIsError(false);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 bg-white">
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-2 text-dark">Iniciar Sesión</h2>
              <p className="text-muted">Ingresa a tu cuenta para pedir tus pizzas favoritas</p>
            </div>
            
            {message && (
              <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} rounded-3`} role="alert">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label fw-semibold text-dark">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold text-dark">Contraseña</label>
                <input
                  type="password"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-dark btn-lg w-100 rounded-pill fw-bold shadow-sm"
              >
                Ingresar a mi cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
