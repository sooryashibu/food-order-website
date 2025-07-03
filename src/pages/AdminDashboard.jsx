import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");
  const [newProductRestaurant, setNewProductRestaurant] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const categories = [
    "Pizza", "Burger", "Pasta", "Salad", "Sushi",
    "Chinese", "Indian", "Desserts", "Beverages", "Fast Food"
  ];

  const restaurants = [
    "Restaurant A", "Restaurant B", "Restaurant C", "Restaurant D",
    "Restaurant E", "Restaurant F", "Restaurant G", "Restaurant H",
    "Restaurant I", "Restaurant J"
  ];

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
          image: "/dummy-products/product1.jpg",
        },
        {
          id: 2,
          name: "Burger Deluxe",
          price: 10,
          category: "Burger",
          restaurant: "Restaurant B",
          image: "/dummy-products/product2.jpg",
        },
      ];
      localStorage.setItem("products", JSON.stringify(dummyProducts));
      setProducts(dummyProducts);
    } else {
      setProducts(storedProducts);
    }
  }, []);

  const saveProductsToLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setNewProductImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const addProduct = () => {
    if (!newProductName || !newProductPrice || !newProductCategory || !newProductRestaurant || !newProductImage) {
      setErrorMessage("All fields are required!");
      return;
    }
    setErrorMessage("");
    const newProduct = {
      id: Date.now(),
      name: newProductName,
      price: newProductPrice,
      category: newProductCategory,
      restaurant: newProductRestaurant,
      image: newProductImage,
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
    setNewProductName("");
    setNewProductPrice("");
    setNewProductCategory("");
    setNewProductRestaurant("");
    setNewProductImage("");
  };

  const removeProduct = (productId) => {
    const updated = products.filter((p) => p.id !== productId);
    setProducts(updated);
    saveProductsToLocalStorage(updated);
  };

  return (
    <div className="admin-dashboard min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
          <div className="flex flex-col space-y-4">
            <input type="text" placeholder="Product Name" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} className="px-4 py-2 border rounded-lg" />
            <input type="number" placeholder="Product Price" value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)} className="px-4 py-2 border rounded-lg" />
            <select value={newProductCategory} onChange={(e) => setNewProductCategory(e.target.value)} className="px-4 py-2 border rounded-lg">
              <option value="">Select a Category</option>
              {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
            </select>
            <select value={newProductRestaurant} onChange={(e) => setNewProductRestaurant(e.target.value)} className="px-4 py-2 border rounded-lg">
              <option value="">Select a Restaurant</option>
              {restaurants.map((r, i) => <option key={i} value={r}>{r}</option>)}
            </select>
            <div className="flex items-center space-x-4">
              <label className="text-lg font-semibold text-gray-700">Product Image</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 rounded-lg" />
            </div>
            {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
            <button onClick={addProduct} className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Add Product</button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Product List</h3>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between items-center p-4 border-b">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{product.name}</span>
                  <span className="text-gray-500">${product.price}</span>
                  <span className="text-sm text-gray-400">Category: {product.category}</span>
                  <span className="text-sm text-gray-400">Restaurant: {product.restaurant}</span>
                </div>
                {product.image && <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />}
                <button onClick={() => removeProduct(product.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;