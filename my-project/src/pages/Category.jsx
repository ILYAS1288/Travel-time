import React from "react";

const Category = () => {
  const categories = [
    { name: "Beaches", image: "https://plus.unsplash.com/premium_photo-1723575880167-1b2c0925c921?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mountains", image: "../../public/photos/be.png" },
    { name: "Cities", image: "https://plus.unsplash.com/premium_photo-1675314234288-75cc922c4cb2?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Historical Sites", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/72/a4/73/chaqchan-mosque.jpg?w=900&h=500&s=1" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Explore Travel Categories
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Find your next adventure! Discover breathtaking destinations by category.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-semibold">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
