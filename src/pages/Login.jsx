import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	// Manejar estados de inputs
	const handleUsernameChange = (e) => setUsername( e.target.value );
	const handlePasswordChange = (e) => setPassword( e.target.value );
	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	// Manejador de Login
	const handleLogin = (e) => {
		e.preventDefault();
		const usernameInput = document.getElementById('username');
		const passwordInput = document.getElementById('password');
		
		// Validaciones
		if (username === '' || password === '') {
			usernameInput.focus();
			return Swal.fire({
			  icon: 'error',
			  title: 'Por favor, completa todos los campos'
			});
		}

		if (password.length < 6) {
			passwordInput.focus();
			return Swal.fire({
			  icon: 'error',
			  title: 'La contraseña debe tener al menos 6 caracteres'
			});
		}

		// Desplegar alerta
		Swal.fire({
			icon: 'success',
			title: 'Login exitoso!'
		});
		// Limpiar campos
		setPassword('');
		setUsername('');
		usernameInput.value = '';
		passwordInput.value = '';
	}
	
	return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="card shadow-lg border-0 form-card-container">

            <div className="card-header text-center border-0">
              <div className="d-inline-flex align-items-center justify-content-center mb-3 logo-form-header">
								<i className="fa-solid fa-user fa-2x text-light"></i>
              </div>
              <h3 className="mb-0">
                Iniciar Sesión
              </h3>
            </div>

            <div className="card-body px-4 pb-4">

              <form id="formLogin" className="form" onSubmit={ handleLogin }>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label fw-bold">
                    <i className="fas fa-envelope me-2"></i> Correo Electrónico
                  </label>
                  <input
                    id="username"
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
                  <div className="input-group">
                    <input
                      id="password"
                      name="password"
                      type={ showPassword ? "text" : "password" }
                      className="form-control"
                      placeholder="••••••••"
                      value={ password }
                      onChange={ handlePasswordChange }
											required
                    />
                    <button
                      className="btn btn-show-hide"
                      type="button"
                      onClick={ togglePasswordVisibility }
										>
                      <i className={ showPassword ? "fas fa-eye-slash" : "fas fa-eye" }></i>
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn w-100 py-3 mt-3 btn-submit">
                  <i className="fas fa-sign-in-alt me-2"></i> Iniciar Sesión
                </button>
              </form>

              <div className="text-center mt-4">
                <Link to="/register" className="text-decoration-none redirect-to">
                  ¿No tienes cuenta? Registrate Aqui!
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
