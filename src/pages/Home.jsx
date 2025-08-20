import { useContext } from "react";
import { CardPizza } from "../components/CardPizza";
import { Header } from "../components/Header";
import { DataApiContext } from "../context/DataApiContext";

export const Home = () => {

  const { pizzas, errors } = useContext(DataApiContext);

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          { errors && <h5 className="text-center text-danger">Error al cargar pizzas</h5> }

          { pizzas.length <= 0 ? (
              <p className="text-center text-muted my-0">No hay pizzas disponibles</p>
            ) : (
              pizzas.map( pizza => <CardPizza key={pizza.id} pizza={ pizza } />)
            )
          }
        </div>
      </div>
    </>
  )
}
