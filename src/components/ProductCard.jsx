import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function ProductCard({
  id,
  title,
  description,
  price,
  thumbnail,
}) {
  const { dispatch } = useContext(CartContext);
  const product = { id, title, price, thumbnail };
  function handleAddToCart() {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between h-full max-w-xs mx-auto">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      <h2 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">
        {description}
      </p>

      <div className="mt-auto">
        <p className="text-lg font-bold text-blue-600 mb-2">₹{price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
