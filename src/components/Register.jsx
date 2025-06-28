import { useState } from "react";
import Swal from 'sweetalert2';

export const Register = () => {
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	// Manejador de estados de inputs
	const handleEmailChange = (e) => setEmail( e.target.value );
	const handlePassword1Change = (e) => setPassword1( e.target.value );
	const handlePassword2Change = (e) => setPassword2( e.target.value );

	// Manejador de registro
	const handleRegister = (e) => {
		e.preventDefault();
		const emailInput = document.getElementById('email');
		const password1Input = document.getElementById('password1');
		const password2Input = document.getElementById('password2');

		// Validaciones
		if (email === '' || password1 === '' || password2 === '') {
			emailInput.focus();
			return Swal.fire({
				icon: 'error',
				title: 'Por favor, completa todos los campos'
			});
		}

		if (password1.length < 6 || password2.length < 6) {
			password1Input.focus();
			return Swal.fire({
				icon: 'error',
				title: 'La(s) contraseña(s) debe tener al menos 6 caracteres'
			});
		}

		if (password1 !== password2) {
			password2Input.focus();
			return Swal.fire({
				icon: 'error',
				title: 'Las contraseñas no coinciden'
			});
		}

		// Cerrar modal
		document.querySelector('#registerModal .btn-close')?.click();
		// Desplegar alerta
		Swal.fire({
			icon: 'success',
			title: 'Usuario registrado exitosamente!'
		});
		// Limpiar campos
		setEmail('');
		setPassword1('');
		setPassword2('');
		emailInput.value = '';
		password1Input.value = '';
		password2Input.value = '';

	}
	

  return (
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header text-center">
            <h5 className="modal-title w-100" id="registerModalLabel">
              <i className="fas fa-pizza-slice me-2"></i> Registrarse
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
            <form id="formRegister" className="form" onSubmit={ handleRegister }>

              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-bold">
                  <i className="fas fa-envelope me-2"></i> Correo Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="tu@email.com"
									value={ email }
									onChange={ handleEmailChange }
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-bold">
                  <i className="fas fa-lock me-2"></i> Contraseña
                </label>
                <input
                  id="password1"
                  name="password1"
                  type="password"
                  className="form-control"
									value={ password1 }
									onChange={ handlePassword1Change }
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-bold">
                  <i className="fas fa-lock me-2"></i> Repetir Contraseña
                </label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  className="form-control"
									value={ password2 }
									onChange={ handlePassword2Change }
                  required
                />
              </div>

              <button type="submit" className="btn w-100 py-3">
                <i className="fas fa-user-plus me-2"></i> Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
