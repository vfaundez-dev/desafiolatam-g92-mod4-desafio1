import { useState } from "react"

export const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	// Manejar estados de inputs
	const handleUsernameChange = (e) => setUsername( e.target.value );
	const handlePasswordChange = (e) => setPassword( e.target.value );
	// Manejador de Login
	const handleLogin = (e) => {
		e.preventDefault();
		const usernameInput = username;
		const passwordInput = password;
		// Validaciones
		if (usernameInput === '' || passwordInput === '') {
			alert('Por favor, completa todos los campos.');
			return;
		}

		if (passwordInput.length < 6) {
			alert('La contraseña debe tener al menos 6 caracteres.');
			return;
		}

		alert('Login exitoso!');
	}
	
	return (
		<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header text-center">
            <h5 className="modal-title w-100" id="loginModalLabel">
              <i className="fas fa-pizza-slice me-2"></i> Iniciar Sesión
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body p-4">
            <form id="formLogin" className="form" onSubmit={ handleLogin }>

              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-bold">
                  <i className="fas fa-envelope me-2"></i> Correo Electrónico
                </label>
                <input
                  id="email"
									name="username"
                  type="email"
                  className="form-control"
                  placeholder="tu@email.com"
									value={ username }
            			onChange={ handleUsernameChange }
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-bold">
                  <i className="fas fa-lock me-2"></i> Contraseña
                </label>
                <input
                  id="password"
									name="password"
                  type="password"
                  className="form-control"
									value={ password }
            			onChange={ handlePasswordChange }
                  required
                />
              </div>

              <button type="submit" className="btn w-100 py-3">
                <i className="fas fa-sign-in-alt me-2"></i> Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
	)
}
