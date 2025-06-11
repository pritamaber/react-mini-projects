import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import RemoveFromCartButton from "./RemoveFromCartButton";
import CartClearButton from "./ClearCartButton";
import CheckoutButton from "./CheckOutButton";
function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-10 text-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">🛒 Cart Summary</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((cartItem) => (
              <li
                key={cartItem.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">{cartItem.title}</p>
                  <p className="text-sm text-gray-500 ">₹{cartItem.price}</p>
                  <img
                    className="w-20 h-20 object-cover rounded-md mt-2"
                    src={cartItem.thumbnail}
                    alt={cartItem.title}
                  />
                </div>
                <RemoveFromCartButton productId={cartItem.id} />
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <CheckoutButton />
          <CartClearButton />
        </>
      )}
    </div>
  );
}

export default Cart;
