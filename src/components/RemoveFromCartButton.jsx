import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function RemoveFromCartButton({ productId }) {
  const { dispatch } = useContext(CartContext);
  const handleRemove = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
    toast.error("product removed from cart");
  };
  return (
    <div>
      {" "}
      <button
        onClick={() => handleRemove(productId)}
        className="text-sm text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  );
}

export default RemoveFromCartButton;
