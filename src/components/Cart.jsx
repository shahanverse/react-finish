import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600">Cart is empty 🛒</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 mb-4 p-4 border rounded-lg"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-20 h-20 object-cover rounded"
          />

          <div className="flex-1">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-gray-600">₹ {item.price}</p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-2">
              <button
                className="px-3 py-1 border rounded hover:bg-gray-300"
                onClick={() => decreaseQty(item.id)}
              >
                −
              </button>

              <span className="font-medium">{item.quantity}</span>

              <button
                className="px-3 py-1 border rounded hover:bg-gray-300"
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>
            </div>
          </div>

          <div className="text-right">
            <p className="font-semibold">₹ {item.price * item.quantity}</p>

            <button
              className="text-sm bg-red-400 text-black-500 mt-2 hover:bg-red-500 rounded-2xl p-3"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <h3 className="text-xl font-semibold">Total</h3>
        <h3 className="text-xl font-bold">₹ {total}</h3>
      </div>

      <button className="btn-primary w-full mt-6">Checkout</button>
    </div>
  );
};

export default Cart;
