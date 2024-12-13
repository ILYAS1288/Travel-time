function Bookpage() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to the Travel Booking Page!</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Discover the best destinations, plan your trips, and book unforgettable experiences around the world. Let your journey begin here!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Explore Destinations</h2>
          <p className="text-gray-600">Find the perfect location for your next adventure.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Plan Your Itinerary</h2>
          <p className="text-gray-600">Create a personalized plan for your trip with ease.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Book Your Stay</h2>
          <p className="text-gray-600">Reserve top-rated accommodations for your journey.</p>
        </div>
      </div>
    </div>
  );
}

export default Bookpage;
