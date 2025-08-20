import { useState } from "react";
import Swal from "sweetalert2";
import useFetchAxios from "./useFetchAxios";

export const useCart = () => {
  const [cart, setCart] = useState(
    JSON.parse( localStorage.getItem('cart') ) || []
  );
  const { fetchData } = useFetchAxios();

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
      let updatedCart;
      const existPizza = prevCart.find( item => item.id === pizza.id );

      if (existPizza) {
        // Si existe, actualizamos su cantidad
        updatedCart = prevCart.map(item =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // Si no existe, agregamos al array como elemento nuevo
        updatedCart = [...prevCart, { ...pizza, count: 1 }];
      }

      // Guardamos en localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;

    });
  }

  const totalValueCart = cart.reduce(
		(acc, pizza) => acc + (pizza.price * pizza.count),
		0
	);

  const sendCartOrder = async ({ token, cart }) => {
    try {

      if (!token) return;

      const url = 'http://localhost:5000/api/checkouts';
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: { cart }
      }

      const result = await fetchData({ url, options });
      
      Swal.fire({
        icon: 'success',
        title: 'Pedido procesado!',
        text: result.message
      })
      
      setCart([]);
      
    } catch (error) {
      console.log('Error procesando pedido', error);
      Swal.fire({
        icon: 'error',
        title: 'Error procesando carrito!',
        text: 'Intente nuevamente'
      })
    }
  }


  return { cart, updateQuantity, updateCart, totalValueCart, sendCartOrder };

}