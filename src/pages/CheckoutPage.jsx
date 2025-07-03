
import React from "react";

const CheckoutPage = ({ cart, removeFromCart }) => {
  // Correctly calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price), 0);
  };

  const handlePlaceOrder = () => {
    // Clear the cart by updating the localStorage and the state
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    // Redirect to the homepage or cart page after placing the order
    window.location.href = "/";
  };

  return (
    <div className="checkout-page p-6">
      <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
      <div className="order-summary">
        <ul className="space-y-4">
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <span>{product.name}</span>
              <span>${product.price}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-6">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">${calculateTotal().toFixed(2)}</span> {/* Fixing the display */}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handlePlaceOrder}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
