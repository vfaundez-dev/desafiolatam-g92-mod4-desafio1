import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { UserContext } from "../context/UserContext";

export const Register = () => {
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

	// Manejador de estados de inputs
	const handleEmailChange = (e) => setEmail( e.target.value );
	const handlePassword1Change = (e) => setPassword1( e.target.value );
	const handlePassword2Change = (e) => setPassword2( e.target.value );
  const togglePassword1 = () => setShowPassword1(prev => !prev);
  const togglePassword2 = () => setShowPassword2(prev => !prev);

  const { register } = useContext(UserContext);

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
    
		// Limpiar campos
		setEmail('');
		setPassword1('');
		setPassword2('');
		emailInput.value = '';
		password1Input.value = '';
		password2Input.value = '';
    // Registro de usuario
    register({ email, password: password1 });

	}

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="card shadow-lg border-0 form-card-container">

            <div className="card-header text-center border-0">
              <div className="d-inline-flex align-items-center justify-content-center mb-3 logo-form-header">
								<i className="fa-regular fa-address-card fa-2x text-light"></i>
              </div>
              <h3 className="mb-0">
                Registrarse
              </h3>
            </div>

            <div className="card-body px-4 pb-4">

              <form id="formLogin" className="form" onSubmit={ handleRegister }>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label fw-bold">
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
                  <div className="input-group">
                    <input
                      id="password1"
                      name="password1"
                      type={showPassword1 ? "text" : "password"}
                      className="form-control"
                      placeholder="••••••••"
                      value={password1}
                      onChange={handlePassword1Change}
                      required
                    />
                    <button
                      className="btn btn-show-hide"
                      type="button"
                      onClick={togglePassword1}
                    >
                      <i className={showPassword1 ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-bold">
                    <i className="fas fa-lock me-2"></i> Repetir Contraseña
                  </label>
                  <div className="input-group">
                    <input
                      id="password2"
                      name="password2"
                      type={showPassword2 ? "text" : "password"}
                      className="form-control"
                      placeholder="••••••••"
                      value={password2}
                      onChange={handlePassword2Change}
                      required
                    />
                    <button
                      className="btn btn-show-hide"
                      type="button"
                      onClick={togglePassword2}
                    >
                      <i className={showPassword2 ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn w-100 py-3 mt-3 btn-submit">
                  <i className="fas fa-user-plus me-2"></i> Registrarse
                </button>
              </form>

              <div className="text-center mt-4">
                <Link to="/login" className="text-decoration-none redirect-to">
                  ¿Ya tienes cuenta? Inicia sesión Aqui!
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
