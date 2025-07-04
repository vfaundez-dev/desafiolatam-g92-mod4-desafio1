import { formatCurrency } from "../data/formatCurrency";

export const CardPizza = ({ img, name, price, description, ingredients }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow border-0">
        <img src={ img } className="card-img-top" alt={ name } />
        <div className="card-body">
          <h5 className="card-title text-center fw-bold text-capitalize mb-3">{ name }</h5>
          <p className="card-text lh-sm small text-center description">{ description }</p>
          {/* Ingredientes */}
          <div className="text-center mb-4">
            <p className="mb-3 ingredients-title">Ingredientes:</p>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2 mb-0 list-ingredients">
              { ingredients.map( (ingredient, index) => (
                <li key={ index } className="badge px-3 py-2 text-capitalize">
                  <i className="fas fa-leaf me-1" style={{ fontSize: "0.7em" }}></i> { ingredient }
                </li>
              ))}
            </ul>
          </div>
          {/* Precio */}
          <div className="text-center mb-4">
            <h4 className="price">
              Precio: { formatCurrency(price) }
            </h4>
          </div>
          {/* Botones */}
          <div className="d-flex justify-content-between mt-auto gap-3 btn-options">
            <button className="btn flex-fill py-2 see-more">
              <i className="fas fa-eye me-2"></i> Ver más
            </button>
            <button className="btn flex-fill py-2 add-to-cart">
              <i className="fas fa-cart-plus me-2"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
