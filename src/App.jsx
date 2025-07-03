import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AboutUsPage from "./pages/AboutUsPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUsPage from "./pages/ContactUsPage";
import "./styles/index.css";

import product1Image from "./assets/dummy-products/product1.jpg";
import product2Image from "./assets/dummy-products/product2.jpg";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // UseEffect hook to initialize products on load
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (!storedProducts || storedProducts.length === 0) {
      const dummyProducts = [
        {
          id: 1,
          name: "Pizza Margherita",
          price: 12,
          category: "Pizza",
          restaurant: "Restaurant A",
          image: product1Image,
        },
        {
          id: 2,
          name: "Burger Deluxe",
          price: 10,
          category: "Burger",
          restaurant: "Restaurant B",
          image: product2Image,
        },
      ];
      localStorage.setItem("products", JSON.stringify(dummyProducts));
      setProducts(dummyProducts);  // Set dummy products immediately
    } else {
      setProducts(storedProducts); // Load existing products from localStorage
    }
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const updatedProduct = { ...product, id: Date.now() };
    setCart([...cart, updatedProduct]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const cartCount = cart.length;

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} />
        <div className="main-content pt-20">
          <Routes>
            <Route path="/" element={<HomePage addToCart={addToCart} products={products} />} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
