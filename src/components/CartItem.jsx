// src/components/CartItem.jsx
import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  if (!item) return null; // Guard clause in case item is undefined

  return (
    <div className="cart-item flex justify-between items-center py-4 border-b">
      {/* Product Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
      )}

      <div className="flex flex-col flex-1 ml-4">
        <span className="font-semibold text-lg">{item.name}</span>
        <span className="text-gray-500">${item.price}</span>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
