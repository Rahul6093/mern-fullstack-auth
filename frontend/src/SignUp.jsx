import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function SignUp() {
  const [form, setForm] = useState({ firstName: "", lastName: "", username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/signup", form);
      alert("Sign up successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-[url(./assets/bg.jpg)] bg-cover">
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center"> 
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-purple-300 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
      </div>
    </div>
  );
}
