import { useEffect, useState } from "react";
// import { pizzas } from "../data/pizzas";
import useFetchAxios from "../hooks/useFetchAxios";
import { CardPizza } from "./CardPizza";
import { Header } from "./Header";

export const Home = () => {
  
  const { data, errors } = useFetchAxios('http://localhost:5000/api/pizzas');
  const [pizzas, setPizzas] = useState([]);
  
  useEffect(() => {
    if (data) {
      setPizzas(data);
    }
  }, [data]);  

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          { errors && <h5 className="text-center text-danger">Error al cargar pizzas</h5> }

          { pizzas.length <= 0 ? (
              <p className="text-center text-muted my-0">No hay pizzas disponibles</p>
            ) : (
              pizzas.map( pizza => <CardPizza
                key={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                description={pizza.desc}
                img={pizza.img}
              />)
            )
          }
        </div>
      </div>
    </>
  )
}
