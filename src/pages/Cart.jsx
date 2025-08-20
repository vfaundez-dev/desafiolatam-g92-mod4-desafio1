import { useContext } from "react";
import { formatCurrency } from "../data/formatCurrency";
import { CartContext } from "../context/cartContext";
import { UserContext } from "../context/UserContext";

export const Cart = () => {

	const { cart, totalValueCart, updateQuantity, sendCartOrder } = useContext(CartContext);
	const { token } = useContext(UserContext);

	const sendOrder = async () => {
		await sendCartOrder({ token, cart });
	}

  return (
		<div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="card shadow-lg border-0 form-card-container">

						{/* Card Header */}
						<div className="card-header text-center border-0">
              <div className="d-inline-flex align-items-center justify-content-center mb-3 logo-form-header">
								<i className="fas fa-shopping-cart fa-2x text-light"></i>
              </div>
              <h3 className="mb-0">
                Detalles del Pedido
              </h3>
            </div>

						{/* Card Body */}
						<div className="card-body px-4 pb-4 cart-body">
							{ totalValueCart === 0 ? (
									<div className="text-center text-muted">
										<p className="fs-5">Tu carrito está vacío</p>
									</div>
								) : (
									<>
										<div className="mb-4">
											{ cart.map( cartItem => (
												<div key={ cartItem.id } className="d-flex align-items-center mb-3 p-3 cart-item">
													<img src={ cartItem.img } alt={ cartItem.name } className="me-3" />

													<div className="flex-grow-1">
														<h6 className="mb-1 fw-bold cart-item-title">
															{ cartItem.name }
														</h6>
														<p className="mb-0 fw-bold cart-item-price">
															{ formatCurrency(cartItem.price) }
														</p>
													</div>

													{/* Quantity Controls */}
													<div className="d-flex align-items-center">
														<button
															className="btn btn-sm btn-outline-danger me-2"
															onClick={ () => updateQuantity(cartItem.id, 'disminuir') }
														>
															<i className="fas fa-minus"></i>
														</button>

														<span className="mx-2 fw-bold total-quantity">
															{ cartItem.count }
														</span>

														<button
															className="btn btn-sm btn-outline-success ms-2"
															onClick={ () => updateQuantity(cartItem.id, 'incrementar') }
														>
															<i className="fas fa-plus"></i>
														</button>
													</div>

												</div>
											))}
										</div>

										{/* Total */}
										<div className="d-flex justify-content-between align-items-center mb-4 p-3 total-price">
											<h4 className="mb-0 fw-bold"> Total: </h4>
											<h4 className="mb-0 fw-bold total-price-value">
												{ formatCurrency(totalValueCart) }
											</h4>
										</div>

										{/* Pay Button */}
										<button
											className="btn w-100 py-3 btn-pay"
											disabled={ !token }
											onClick={ sendOrder }
										>
											<i className="fas fa-credit-card me-2"></i> Pagar
										</button>
									</>
								)}
						</div>

					</div>
				</div>
			</div>
		</div>
  )
}
