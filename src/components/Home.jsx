import { pizzas } from "../data/pizzas";
import { CardPizza } from "./CardPizza";
import { Header } from "./Header";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          {
            pizzas.map( pizza => <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              description={pizza.desc}
              img={pizza.img}
            />)
          }
        </div>
      </div>
    </>
  )
}
