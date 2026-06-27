"use client";

import { useState } from "react";
import animalsData from "@/data/animals.json";
import AnimalCard from "@/components/AnimalCard";

const AllAnimalsPage = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  // 🔥 sorting logic
  const sortedAnimals = [...animalsData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        All Animals
      </h1>

      {/* SORT BUTTONS */}
      <div className="flex gap-4 mb-6 text-center items-center justify-center">

        <button
          onClick={() => setSortOrder("asc")}
          className={`cursor-pointer px-4 py-2 rounded-2xl ${
            sortOrder === "asc"
              ? "bg-green-700 text-white"
              : "bg-gray-200"
          }`}
        >
          Price: Low → High
        </button>

        <button
          onClick={() => setSortOrder("desc")}
          className={`cursor-pointer px-4 py-2 rounded-2xl ${
            sortOrder === "desc"
              ? "bg-green-700 text-white"
              : "bg-gray-200"
          }`}
        >
          Price: High → Low
        </button>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}

      </div>

    </div>
  );
};

export default AllAnimalsPage;