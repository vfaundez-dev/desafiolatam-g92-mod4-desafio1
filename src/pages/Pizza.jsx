import { useEffect, useState } from "react";
import useFetchAxios from "../hooks/useFetchAxios";
import { useParams } from "react-router-dom";
import { CardPizzaDetails } from "../components/CardPizzaDetails";

export const Pizza = () => {

  const [pizza, setPizza] = useState([]);
  const { id } = useParams();

  const url = `http://localhost:5000/api/pizzas/${id}`
  const { data, errors } = useFetchAxios({ url });

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
            <CardPizzaDetails pizza={ pizza } />
          )
        }
      </div>
    </div>
  )

}
