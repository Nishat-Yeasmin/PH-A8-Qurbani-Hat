import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({ animal }) => {

    const {
        id,
        name, type, breed,price,weight,location,image} = animal
    
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            {/* Animal Image */}
            <div className="relative h-60 w-full">

                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />

            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {name}
                </h2>

                {/* Type & Breed */}
                <div className="flex justify-between text-gray-500 text-sm mb-3">

                    <p>
                        Type: {type}
                    </p>

                    <p>
                        Breed: {breed}
                    </p>

                </div>

                {/* Price */}
                <p className="text-green-700 text-xl font-bold mb-2">
                    ৳ {price}
                </p>

                {/* Weight */}
                <p className="text-gray-600 mb-4">
                    Weight: {weight} KG
                </p>

                {/* Location */}
                <p className="text-gray-500 mb-5">
                    📍 {location}
                </p>

                {/* Details Button */}
                <Link href={`/details/${id}`}>

                    <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition">

                        View Details

                    </button>

                </Link>

            </div>
        </div>
    );
};

export default AnimalCard;