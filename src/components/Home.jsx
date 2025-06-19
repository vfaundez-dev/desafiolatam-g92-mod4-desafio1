import { CardPizza } from "./CardPizza"
import { Header } from "./Header"

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <CardPizza
              name="Pizza Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://i.pinimg.com/736x/09/62/93/096293d4675c01770e891e77e0b72a9b.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Pizza Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone", "aceitunas"]}
              img="https://www.capodepizzaysushi.cl/wp-content/uploads/2020/08/pizza-espa%C3%B1ola-top-5.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Pizza Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano", "pimienta negra"]}
              img="https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"
            />
          </div>
        </div>
      </div>
    </>
  )
}
