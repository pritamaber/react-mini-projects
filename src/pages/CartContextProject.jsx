import React from "react";
import Productlist from "../components/ProductList";
import Cart from "../components/Cart";
import { CartProvider } from "../context/CartProvider";

function CartContextProject() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-2 sm:px-6 lg:px-12 py-6 text-gray-900 dark:text-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Productlist />
          </div>
          <div className="lg:col-span-1">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default CartContextProject;
