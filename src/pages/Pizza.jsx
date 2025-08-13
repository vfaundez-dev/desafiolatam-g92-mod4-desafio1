import { useEffect, useState } from "react";
import { formatCurrency } from "../data/formatCurrency";
import useFetchAxios from "../hooks/useFetchAxios";
import { useParams } from "react-router-dom";

export const Pizza = () => {

  const [pizza, setPizza] = useState([]);
  const { id } = useParams();

  const { data, errors } = useFetchAxios(`http://localhost:5000/api/pizzas/${id}`);

  useEffect(() => {
    if (errors) {
      setPizza([]);
    } else if (data) {
      setPizza(data);
    }
  }, [data, errors]);

  return (
    <div className="container my-5">
      <div className="card shadow border-0 card-details">
        { errors && <h5 className="text-center text-danger">Error al cargar pizza</h5> }

        {
          pizza.length <= 0 ? (
            <p className="text-center text-muted my-0">Pizza no disponible</p>
          ) : (
              <div className="row g-0 h-100">
              {/* Imagen */}
              <div className="col-md-5">
                <img
                  src={ pizza.img }
                  className="img-fluid h-100"
                  alt={ pizza.name }
                />
              </div>
              {/* Contenido a la derecha */}
              <div className="col-md-7">
                <div className="card-body p-4 d-flex flex-column h-100">

                  {/* Nombre de la pizza */}
                  <h3 className="card-title mb-0">
                    { pizza.name }
                  </h3>

                  <hr className="mb-4 w-100 bg-success" />

                  {/* Precio */}
                  <div className="mb-3">
                    <h4 className="fw-bold price">
                      <i className="fas fa-tag me-2"></i> { formatCurrency(pizza?.price || 0) }
                    </h4>
                  </div>

                  {/* Ingredientes */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-leaf me-2"></i> Ingredientes:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      { pizza?.ingredients && pizza.ingredients.map( (ingredient, index) => (
                        <span key={ index } className="badge px-3 py-2 ingredient">
                          { ingredient }
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Descripción */}
                  <div className="mb-4 flex-grow-1 description">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-info-circle me-2"></i> Descripción:
                    </h6>
                    <p className="card-text description">
                      { pizza.desc }
                    </p>
                  </div>

                  {/* Botón Añadir al carrito */}
                  <div className="mt-auto">
                    <button className="btn px-4 py-3 text-light btn-add-to-cart">
                      <i className="fas fa-cart-plus me-2 text-light"></i> Añadir al Carrito
                    </button>
                  </div>

                </div>
              </div>

            </div>
          )
        }
      </div>
    </div>
  )

}
