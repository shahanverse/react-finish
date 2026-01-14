import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./context/CartProvider";
import "./index.css";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </HashRouter>
);
