import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../context/DataApiContext";

export const useCart = () => {
  const { pizzas, errors } = useContext(DataApiContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!errors && pizzas.length > 0) {
      setCart( pizzas.slice(0, 3).map(pizza => ({ ...pizza, count: 1 })) );
    }
  }, [pizzas, errors]);

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

  const updateCart = (pizza) => {
    setCart( prevCart => {
      const existPizza = prevCart.find( item => item.id === pizza.id );

      // Comprobamos que si la pizza ha sido ingresada en el carrito, solo actualizamos el contador
      if (existPizza) {
        return prevCart.map(item =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, count: 1 }];
      }

    });
  }

  const totalValueCart = cart.reduce(
		(acc, pizza) => acc + (pizza.price * pizza.count),
		0
	);


  return { cart, updateQuantity, updateCart, totalValueCart };

}