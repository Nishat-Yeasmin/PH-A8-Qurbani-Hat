"use client";

import { useState } from "react";
import { toast } from "react-toastify";


const BookingForm = ({ animal }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     toast.success("Booking Successful!");

  setForm({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

    // 🔐 LOGIN CHECK (dummy example)
    const isLoggedIn = true; // later replace with real auth

    if (!isLoggedIn) {
      alert("Please login first!");
      return;
    }

    console.log("Booking Data:", {
      ...form,
      animalId: animal.id,
    });

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      <input
        name="name"
        placeholder="Your Name"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Address"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="cursor-pointer w-full bg-green-700 text-white py-2 rounded"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;