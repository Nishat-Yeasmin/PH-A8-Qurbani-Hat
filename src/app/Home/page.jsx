import AnimalCard from "@/components/AnimalCard";
import animals from "@/data/animals.json";
import Link from "next/link";

export default function HomePage() {

    const featuredAnimals = animals.slice(0, 4);

    return (
        <div>

            {/* Hero Section */}
            <section className="bg-red-50 py-20 px-6">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

                    {/* Left Content */}
                    <div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">

                            Find Healthy Animals For Your Qurbani

                        </h1>

                        <p className="text-gray-600 mt-6 text-lg">

                            Explore premium cows and goats from trusted sellers
                            across Bangladesh for a peaceful Qurbani experience.

                        </p>

                        <Link href="/animals">

                            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">

                                Browse Animals

                            </button>

                        </Link>

                    </div>

                    {/* Right Image */}
                    <div>

                        <img
                            src="https://i.ibb.co.com/x7P24fL/cow-banner.jpg"
                            alt="banner"
                            className="rounded-3xl shadow-xl w-full"
                        />

                    </div>

                </div>

            </section>

            {/* Featured Animals */}
            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-4xl font-bold text-gray-800">

                            Featured Animals

                        </h2>

                        <p className="text-gray-500 mt-4">

                            Explore our premium Qurbani animals

                        </p>

                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {
                            featuredAnimals.map((animal) => (
                                <AnimalCard
                                    key={animal.id}
                                    animal={animal}
                                />
                            ))
                        }

                    </div>

                </div>

            </section>

            {/* Qurbani Tips */}
            <section className="bg-red-50 py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-4xl font-bold text-gray-800">

                            Qurbani Tips

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4">
                                Healthy Animal
                            </h3>

                            <p className="text-gray-600">
                                Always choose a healthy and active animal for Qurbani.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4">
                                Check Teeth
                            </h3>

                            <p className="text-gray-600">
                                Make sure the animal fulfills the Islamic age requirement.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4">
                                Proper Feeding
                            </h3>

                            <p className="text-gray-600">
                                Animals should be fed naturally and cared for properly.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Top Breeds */}
            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-4xl font-bold text-gray-800">

                            Top Breeds

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-green-100 p-10 rounded-2xl text-center">
                            <h3 className="text-3xl font-bold mb-4">
                                Sahiwal
                            </h3>

                            <p>
                                Famous for strength and premium meat quality.
                            </p>
                        </div>

                        <div className="bg-yellow-100 p-10 rounded-2xl text-center">
                            <h3 className="text-3xl font-bold mb-4">
                                Brahman
                            </h3>

                            <p>
                                Large-sized imported breed with excellent health.
                            </p>
                        </div>

                        <div className="bg-red-100 p-10 rounded-2xl text-center">
                            <h3 className="text-3xl font-bold mb-4">
                                Black Bengal
                            </h3>

                            <p>
                                Popular goat breed known for quality meat.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}