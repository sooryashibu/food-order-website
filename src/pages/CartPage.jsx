// src/pages/CartPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  // Calculate total price safely (defaulting to 0 if price is NaN)
  const totalPrice = cart.reduce(
    (total, item) => total + (parseFloat(item.price) || 0), 
    0
  );

  const handleProceedToCheckout = () => {
    navigate("/checkout"); // Navigate to Checkout Page
  };

  return (
    <div className="cart-page min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty!</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </ul>
        )}

        {/* Cart Totals */}
        <div className="flex justify-between mt-6">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-xl font-semibold">${totalPrice.toFixed(2)}</span>
        </div>

        {/* Proceed to Checkout Button */}
        <button
          onClick={handleProceedToCheckout}
          className="mt-6 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
