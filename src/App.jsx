import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CartContext } from "./context/CartContext";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoutes";

const App = () => {
  const [search, setSearch] = useState("");
  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar search={search} setSearch={setSearch} cartCount={cart.length} />

      {/* Page content grows */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Products search={search} />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
