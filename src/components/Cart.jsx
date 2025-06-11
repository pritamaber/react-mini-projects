import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import RemoveFromCartButton from "./RemoveFromCartButton";
import CartClearButton from "./ClearCartButton";
import CheckoutButton from "./CheckOutButton";

function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md max-w-md mx-auto text-gray-900">
      <h2 className="text-xl lg:text-2xl font-bold mb-4 text-blue-600">
        🛒 Cart Summary
      </h2>

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
                  <p className="font-medium text-sm sm:text-base">
                    {cartItem.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    ₹{cartItem.price.toFixed(2)}
                  </p>

                  {/* Hide image on mobile, show only on lg */}
                  <img
                    className="hidden lg:block w-20 h-20 object-cover rounded-md mt-2"
                    src={cartItem.thumbnail}
                    alt={cartItem.title}
                  />
                </div>

                {/* Reuse existing button, but scale it down on mobile if needed */}
                <RemoveFromCartButton productId={cartItem.id} />
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between font-semibold text-base sm:text-lg">
            <span>Total</span>
            <span>
              ₹
              {new Intl.NumberFormat("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(total)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
            <CheckoutButton />
            <CartClearButton />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
