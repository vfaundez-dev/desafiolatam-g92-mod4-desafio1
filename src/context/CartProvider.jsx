import { CartContext } from "./cartContext";
import { useCart } from "../hooks/useCart";

const CartProvider = ({ children }) => {

  const { cart, updateQuantity, updateCart, totalValueCart } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        updateQuantity,
        updateCart,
        totalValueCart
      }}
    >
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider