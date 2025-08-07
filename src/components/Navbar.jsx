import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export const Navbar = () => {
  //const total = 25000;
  const token = false;

  const { totalValueCart } = useContext(CartContext);

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#212529" }}>
      <div className="container">

        <Link to="/" className="navbar-brand fw-bold fs-3">
          <i className="fas fa-pizza-slice me-2"></i>
          Pizzería MammaMia!
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active px-3">
                <i className="fas fa-home me-1"></i> Home
              </Link>
            </li>
            {
              token ? (
                <>
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link px-3">
                      <i className="fas fa-user me-1"></i> Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/logout" className="nav-link px-3">
                      <i className="fas fa-sign-out-alt me-1"></i> Logout
                    </Link>
                  </li>
                </>
                
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link px-3">
                      <i className="fas fa-sign-in-alt me-1"></i> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link px-3">
                      <i className="fas fa-user-plus me-1"></i> Register
                    </Link>
                  </li>
                </>
              )
            }
          </ul>

          <Link
            to="/cart"
            className="btn btn-outline-light d-flex align-items-center ms-3 btn-price"
          >
            <i className="fas fa-shopping-cart me-2"></i>
            Total: { totalValueCart.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
          </Link>
          
        </div>
      </div>
    </nav>
  )

}
