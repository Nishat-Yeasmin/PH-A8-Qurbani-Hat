import animals from "@/data/animals.json";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export default async function AnimalDetailsPage({ params }) {
  const { id } = await params; // 🔥 IMPORTANT FIX

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return <p className="p-10 text-red-500">Animal not found</p>;
  }

  return (
    <div className="p-6 grid md:grid-cols-2 gap-10">

      <div className="relative h-[400px] w-full">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{animal.name}</h1>

        <p className="mt-2 text-gray-600">{animal.description}</p>

        <div className="mt-4 space-y-2">
          <p><b>Type:</b> {animal.type}</p>
          <p><b>Breed:</b> {animal.breed}</p>
          <p><b>Price:</b> ৳ {animal.price}</p>
          <p><b>Weight:</b> {animal.weight}</p>
          <p><b>Location:</b> {animal.location}</p>
        </div>

        <div className="mt-6">
          <BookingForm animal={animal} />
        </div>
      </div>
    </div>
  );
}