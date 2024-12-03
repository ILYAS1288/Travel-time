import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-text-black  text-xl">
         <h1>Travel <br />time</h1>
        </div>

        {/* Desktop Navigation buttons */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-black hover:text-gray-300">Home</Link>
          <Link to="/category" className="text-black hover:text-gray-300">Category</Link>
          <Link to="/blog" className="text-black hover:text-gray-300">Blog</Link>
          <Link to="/about" className="text-black hover:text-gray-300">About Us</Link>
        </div>

        {/* Mobile menu (hamburger icon) */}
        <div className="md:hidden flex items-center">
          <button className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
