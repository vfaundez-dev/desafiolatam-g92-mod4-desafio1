import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { UserContext } from "../context/UserContext";

export const Navbar = () => {

  const { totalValueCart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  // Links Activos
  const getNavLinkClass = ({ isActive }) =>  isActive ? "nav-link active px-3" : "nav-link px-3";

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
              <NavLink to="/" className={ getNavLinkClass }>
                <i className="fas fa-home me-1"></i> Home
              </NavLink>
            </li>
            {
              token ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/profile" className={ getNavLinkClass }>
                      <i className="fas fa-user me-1"></i> Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link px-3" onClick={ logout }>
                      <i className="fas fa-sign-out-alt me-1"></i> Logout
                    </button>
                  </li>
                </>
                
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className={ getNavLinkClass }>
                      <i className="fas fa-sign-in-alt me-1"></i> Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register" className={ getNavLinkClass }>
                      <i className="fas fa-user-plus me-1"></i> Register
                    </NavLink>
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
