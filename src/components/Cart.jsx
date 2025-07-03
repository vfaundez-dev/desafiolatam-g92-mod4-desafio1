import { useState } from "react";
import { formatCurrency } from "../data/formatCurrency";
import { pizzaCart } from "../data/pizzas";

export const Cart = () => {

	const [cart, setCart] = useState(pizzaCart);

	const updateQuantity = (id, action) => {
		setCart( prevState => {
			// prevState es el estado anterior, el cual recorremos y actualizamos
			return prevState.map( item => {
				if (item.id === id) {
					// newCount: nueva cantidad segun la accion a ejecutarse
					const newCount = action === 'incrementar' ? item.count + 1 : item.count - 1;
					return { ...item, count: newCount }; // Retornamos todo el item con la cantidad actualizada
				}
				return item;
			})
			.filter( item => item.count > 0 ); // Eliminar elementos con cantidad igual a 0
		});
	}

	const totalPrice = cart.reduce(
		(acc, pizza) => acc + (pizza.price * pizza.count),
		0
	);

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="cartModalLabel">
							<i className="fas fa-shopping-cart me-2"></i> Detalles del pedido:
						</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body cart-container">
						{/* Listado de elementos */}
						<div className="cart-elements">
							{ totalPrice === 0 ? (
									<div className="text-center">
										<p className="fs-5">Tu carrito está vacío</p>
									</div>
								) :
								(
									<>
										{cart.map( pizza => (
											<div key={ pizza.id } className="d-flex align-items-center p-3" >
												<img src={ pizza.img } alt={pizza.name} className="me-3" />

												<div className="flex-grow-1">
													<h6 className="mb-1 fw-bold name">
														{ pizza.name }
													</h6>
													<p className="mb-0 fw-bold price">
														{ formatCurrency(pizza.price) }
													</p>
												</div>

												<div className="d-flex align-items-center">
													<button
														className="button-quantity btn btn-sm btn-outline-danger me-2 bg-danger"
														onClick={ () => updateQuantity(pizza.id, 'disminuir') }
													>
														<i className="fas fa-minus"></i>
													</button>

													<span className="mx-2 fw-bold total-quantity">
														{ pizza.count }
													</span>

													<button
														className="btn btn-sm ms-2 button-quantity bg-success"
														onClick={ () => updateQuantity(pizza.id, 'incrementar') }
													>
														<i className="fas fa-plus"></i>
													</button>
												</div>
											</div>
										))}
									</>
								)
							}
						</div>
						{/* Total Carrito */}
						<div className="border-top pt-4 mt-4 total-container">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0 fw-bold total-title">
                  Total:
                </h4>
                <h4 className="mb-0 fw-bold total-amount">
                  { formatCurrency(totalPrice) }
                </h4>
              </div>

              {/* Pay Button */}
              <button className="btn w-100 py-2 btn-pay">
                <i className="fas fa-credit-card me-2"></i> Pagar
              </button>
            </div>
					</div>
				</div>
			</div>
		</div>
  )
}
