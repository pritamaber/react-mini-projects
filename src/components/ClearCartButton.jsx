import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartClearButton() {
  const { dispatch } = useContext(CartContext);
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: [] });
  };
  return (
    <div>
      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
    </div>
  );
}

export default CartClearButton;
