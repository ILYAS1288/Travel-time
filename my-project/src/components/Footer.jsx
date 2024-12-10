import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-700 text-white py-6">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold italic mb-2">
          Travel <span className="text-yellow-400">Time</span>
        </h1>
        
        <p className="text-sm md:text-base text-gray-300">
          Discover the world, one adventure at a time.
        </p>
        <div className="mt-4">
          <a 
          
            href="#"
            className="text-yellow-400 hover:text-yellow-500 transition-colors mx-2"
          >
            Facebook
          </a>
          <a 
            href="#"
            className="text-yellow-400 hover:text-yellow-500 transition-colors mx-2"
          >
            Twitter
          </a>
          <a 
            href="#"
            className="text-yellow-400 hover:text-yellow-500 transition-colors mx-2"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
