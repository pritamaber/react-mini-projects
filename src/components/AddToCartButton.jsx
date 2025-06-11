import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function AddToCartButton({ product }) {
  const { dispatch } = useContext(CartContext);

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Product added to cart");
  };

  return (
    <button
      className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      onClick={handleAdd}
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
