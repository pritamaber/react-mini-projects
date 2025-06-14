import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";

//global css
import "./index.css";

//leaflet css
import "leaflet/dist/leaflet.css";

//cart provider
import { CartProvider } from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
