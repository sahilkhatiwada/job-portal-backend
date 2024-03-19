// src/components/ForgotPasswordForm.jsx
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (error) => {
    error.preventDefault();
    console.log("Forgot password request submitted for email:", email);
    // Implement your password reset logic here (e.g., send a reset link via email)
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-40">
      <h2 className="text-xl font-semibold mb-4">Forgot Your Password?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          placeholder="Enter your email"
          value={email}
          onChange={(err) => setEmail(err.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
