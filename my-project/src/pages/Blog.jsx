import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Beaches to Visit in 2024",
      description:
        "Discover the most stunning beaches across the globe. From white sandy shores to crystal-clear waters, these destinations are a must-visit for beach lovers.",
      image: "https://plus.unsplash.com/premium_photo-1723575880167-1b2c0925c921?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 12, 2024",
      author: "Travel Guru",
    },
    {
      id: 2,
      title: "Exploring the Alps: A Guide for Adventurers",
      description:
        "Embark on an unforgettable journey through the majestic Alps. Learn about the best hiking trails, ski resorts, and hidden gems.",
      image: "../../public/photos/be.png",
      date: "December 10, 2024",
      author: "Mountain Explorer",
    },
    {
      id: 3,
      title: "City Escapes: The Top Urban Destinations",
      description:
        "Experience the vibrant energy of the world's top cities. Dive into culture, cuisine, and nightlife like never before.",
      image: "https://plus.unsplash.com/premium_photo-1675314234288-75cc922c4cb2?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 8, 2024",
      author: "Urban Nomad",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Blog Header */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Travel Blogs
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Get inspired for your next journey! Read our latest blogs filled with tips, guides, and breathtaking destinations.
        </p>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
