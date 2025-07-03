
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Mock login process (replace with actual validation logic)
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin/dashboard"); // Navigate to the admin dashboard after successful login
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="admin-login min-h-screen bg-gray-100 py-8 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-4">Admin Login</h2>
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
