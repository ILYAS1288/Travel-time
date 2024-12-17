import React, { useState } from 'react';

const View = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "../../public/photos/g1.png",
    "../../public/photos/g2.png",
    "../../public/photos/g3.png",
    "../../public/photos/g4.png",
    "../../public/photos/g5.png",
    "../../public/photos/g6.png",
    "../../public/photos/g7.png",
    "../../public/photos/g8.png",
    "../../public/photos/h.png",
    "../../public/photos/g5.png",
    "../../public/photos/g1.png",
    "../../public/photos/g3.png",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-700 mb-6">Gallery</h1>
      <p className="text-lg text-gray-600 mb-4 text-center max-w-2xl">
        Explore our collection of beautiful images. Enjoy a responsive gallery layout that adapts to any screen size.
      </p>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Gilgit-Baltistan, often referred to as the jewel of Pakistan, is renowned for its breathtaking landscapes, snow-capped mountains, and vibrant culture. Home to the world's highest peaks, lush valleys, and serene lakes, it is a paradise for nature enthusiasts and adventure seekers alike. Discover the captivating charm of this region through our gallery.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-6xl px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="mt-12 text-center px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Famous Viewpoints</h2>
        <p className="text-lg text-gray-600">
          Gilgit-Baltistan offers a multitude of famous viewpoints that leave visitors in awe. The majestic Hunza Valley, with its
          panoramic views of Rakaposhi and Ultar Sar peaks, is a favorite among travelers. Skardu's Shangrila Resort and Satpara Lake
          provide tranquil yet stunning landscapes, while Deosai National Park, known as the "Land of Giants," mesmerizes with its
          vast plateaus and rich biodiversity. Whether it's the enchanting Fairy Meadows under the shadow of Nanga Parbat or the
          serene beauty of Attabad Lake, these iconic spots offer an unforgettable glimpse into the splendor of nature.
        </p>
      </div>
      
    </div>
  );
};

export default View;
