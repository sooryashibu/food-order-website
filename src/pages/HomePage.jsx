import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";

const HomePage = ({ addToCart, products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product) => (filterCategory ? product.category === filterCategory : true))
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="homepage min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Carousel />
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 mb-4 w-full border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <div className="flex space-x-4 mb-6">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="">All Categories</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="Pasta">Pasta</option>
            <option value="Salad">Salad</option>
            <option value="Sushi">Sushi</option>
            <option value="Chinese">Chinese</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
            <option value="Fast Food">Fast Food</option>
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
