import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-lg">
            We are passionate travelers dedicated to helping you discover the world’s most beautiful destinations.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="../../public/photos/g5.png"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-lg"></div>
          </div>

          {/* Text Section */}
          <div className="text-gray-700">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4">
              Founded by a group of wanderlust enthusiasts, TravelTime is your ultimate guide to exploring new horizons. From tranquil beaches to bustling cityscapes, we believe every journey is a story worth telling.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to inspire and empower travelers worldwide. Whether you're seeking adventure, relaxation, or cultural experiences, we’re here to provide tips, guides, and the best destinations for your next trip.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "elibU", role: "CEO", image: "../../public/photos/elibu.jpg" },
              { name: "Muhammad Shamim", role: "Travel Expert", image: "../../public/photos/sha.jpg" },
              { name: "Ilyas", role: "Content Creator", image: "../../public/photos/1ubile.jpg" },
              { name: "Muhammad Ali", role: "Photographer", image: "../../public/photos/lms.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
