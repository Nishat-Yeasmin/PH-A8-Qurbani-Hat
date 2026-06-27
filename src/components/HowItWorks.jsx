const HowItWorks = () => {
  return (
    <section className="py-16 bg-pink-100">

      <h2 className="text-3xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">1. Browse Animals</h3>
          <p className="text-gray-600">
            Explore cows, goats, and other animals from different locations.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">2. View Details</h3>
          <p className="text-gray-600">
            Check price, weight, breed, and full health details.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">3. Book Animal</h3>
          <p className="text-gray-600">
            Fill booking form and reserve your Qurbani animal easily.
          </p>
        </div>

      </div>

    </section>
  );
};

export default HowItWorks;