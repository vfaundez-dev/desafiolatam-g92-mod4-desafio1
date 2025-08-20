import { CartContext } from "./cartContext";
import { useCart } from "../hooks/useCart";

const CartProvider = ({ children }) => {

  const { cart, updateQuantity, updateCart, totalValueCart, sendCartOrder } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        updateQuantity,
        updateCart,
        totalValueCart,
        sendCartOrder
      }}
    >
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider