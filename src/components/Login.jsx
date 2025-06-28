import { useState } from 'react';
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

		// Cerrar modal
		document.querySelector('#loginModal .btn-close')?.click();
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
								<div className="input-group mb-3">
									<input
										id="password"
										name="password"
										type={ showPassword ? 'text' : 'password' }
										className="form-control"
										value={ password }
										onChange={ handlePasswordChange }
										required
									/>
									<button className="btn btn-outline-secondary btn-view-password" type="button" onClick={ togglePasswordVisibility }>
										<i className={ showPassword ? 'fas fa-eye-slash' : 'fas fa-eye' }></i>
									</button>
								</div>
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
