"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    image: "",
  });

 
  if (!isPending && session?.user && form.name === "") {
    setForm({
      name: session.user.name || "",
      image: session.user.image || "",
    });
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Update failed");

      toast.success("Profile updated successfully!");

      router.push("/profile");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  if (isPending) {
    return <p className="p-10 text-center">Loading...</p>;
  }

  if (!session?.user) {
    return (
      <p className="p-10 text-center text-red-500">
        Please login first
      </p>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Update Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Profile Image URL"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="cursor-pointer w-full bg-green-700 text-white py-2 rounded"
        >
          Update Information
        </button>

      </form>
    </div>
  );
}