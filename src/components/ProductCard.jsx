
import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded mb-4"
        />
      )}
      <h3 className="text-lg font-semibold mb-1 dark:text-white">{product.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
        Category: {product.category}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
        Restaurant: {product.restaurant || "N/A"}
      </p>
      <p className="text-lg font-bold text-orange-500 mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
