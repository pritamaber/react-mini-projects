import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
