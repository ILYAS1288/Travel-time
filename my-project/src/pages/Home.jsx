import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSpan = () => {
    setIsOpen(!isOpen);
  }

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleSpan1 = () => {
    setIsOpen1(!isOpen1);
  }

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleSpan2 = () => {
    setIsOpen2(!isOpen2);
  }

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log("Submitted Email:", email);
    // Add your API call or form submission logic here
  };

  const navigate = useNavigate();
  return (
    <main>
      <div className="bg-cover bg-center h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]" style={{ backgroundImage: "url('../../public/photos/3023.jpg')" }}>
        <h1 className="text-center text-black text-3xl  md:text-4xl lg:text-5xl font-bold pt-24 sm:pt-12 px-4">
          EXPLORE <span className='text-white'>BEAUTIFULL</span> WORLD!
        </h1>
        <p className="text-center text-white text-lg sm:text-sm md:text-lg lg:text-xl lg:mt-11 px-4 ">
          Baltistan, nestled in the Karakoram Range, is a stunning paradise with towering peaks, <br />
          serene valleys, and crystal-clear lakes.
        </p>

        <div className="flex justify-center lg:mt-11 space-x-4 mt-6 px-4">
        <button
      className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none"
      onClick={() => navigate("/bookpage")}
    >
      BOOK NOW
    </button>

      <button
      className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none"
      onClick={() => (window.location.href = "/check-schedule")}
    >
      CHECK SCHEDULE
    </button>
        </div>
      </div>

      {/* 2nd div for Popular Places */}
      <div className="bg-blue-200 p-4">
        {/* Subheadings: "BEACH", "MOUNTAIN", etc. */}
        <div className="flex flex-wrap justify-between space-x-4 mt-4">
          <h1 className="text-left text-lg sm:text-xl md:text-3xl font-semibold m-2">
            <span className='text-blue-600'>POPULAR</span> PLACES
          </h1>
          <h1 className="text-sm sm:text-base text-blue-600 md:text-lg font-semibold m-2">BEACH</h1>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold m-2">MOUNTAIN</h1>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold m-2">WATER FALL</h1>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold m-2">ICEBERGS</h1>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold m-2">VIEW ALL</h1>
        </div>

        {/* Cards with images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="../../public/photos/G.jpg" alt="Beach" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h1 className=" text-xl sm:text-2xl font-semibold">GILGIT</h1>
            <div className="flex items-center space-x-2 mt-4">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 8.5c0 2.7 1.91 5.42 4.71 8.32 2.74 2.75 5.42 5.18 5.42 5.18s2.68-2.43 5.42-5.18C17.09 13.92 19 11.2 19 8.5 19 5.13 15.87 2 12 2z" />
              </svg>
              {/* Location Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">GILGIT-BALTISTAN</h1>
            </div>
            <p>This is a very beautiful place located in the north of Pakistan.</p>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="../../public/photos/h.png" alt="Mountain" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h1 className=" text-xl sm:text-2xl font-semibold">HUNZA</h1>
            <div className="flex items-center space-x-2 mt-4">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 8.5c0 2.7 1.91 5.42 4.71 8.32 2.74 2.75 5.42 5.18 5.42 5.18s2.68-2.43 5.42-5.18C17.09 13.92 19 11.2 19 8.5 19 5.13 15.87 2 12 2z" />
              </svg>
              {/* Location Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">GILGIT-BALTISTAN</h1>
            </div>
            <p>This is a very beautiful place located in the north of Pakistan.</p>
          </div>

          {/* Third Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="../../public/photos/s.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h1 className=" text-xl sm:text-2xl font-semibold">SKARDU</h1>
            <div className="flex items-center space-x-2 mt-4">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 8.5c0 2.7 1.91 5.42 4.71 8.32 2.74 2.75 5.42 5.18 5.42 5.18s2.68-2.43 5.42-5.18C17.09 13.92 19 11.2 19 8.5 19 5.13 15.87 2 12 2z" />
              </svg>
              {/* Location Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">GILGIT-BALTISTAN</h1>
            </div>
            <p>This is a very beautiful place located in the north of Pakistan.</p>
          </div>
        </div>
      </div>
      {/* 3rd div main  */}

      <div className="flex flex-col md:flex-row  justify-between px-12 py-6">
        {/* Image Section */}
        <div className="bg-blue-400 shadow-md rounded-full overflow-hidden">
  <div className="relative py-4">
    {/* Avatar section */}
    <div className="flex justify-center  mb-2">
      <img src="https://via.placeholder.com/40" alt="Avatar" className="w-8 h-8 rounded-full" />
      <img src="https://via.placeholder.com/40" alt="Avatar" className="w-8 h-8 rounded-full" />
      <img src="https://via.placeholder.com/40" alt="Avatar" className="w-8 h-8 rounded-full" />
      <img src="https://via.placeholder.com/40" alt="Avatar" className="w-8 h-8 rounded-full" />
      <img src="https://via.placeholder.com/40" alt="Avatar" className="w-8 h-8 rounded-full" />
    </div>

    {/* Image Section */}
    <img
      src="../../public/photos/F.png"
      alt="World of the best agency"
      className="w-full h-48 object-cover mb-4"
    />

    {/* Text Section */}
    <h3 className="flex items-start text-sm pl-4 md:pl-8 lg:pl-12">
      <i className="fas fa-star text-yellow-500 mr-2"></i> World of  the best agency
    </h3>
  </div>
</div>





        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Explore all corners of <br /> The world with us
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus, esse provident, minima nemo amet rem quae quam molestias reiciendis tenetur ipsam, fuga quisquam debitis neque excepturi animi iusto.
          </p>

          {/* Icons Section */}
          <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
            {/* Left Icons (Flight, Hotel) */}
            <div className="flex flex-col gap-4 md:gap-10">
              <span className="flex items-center pb-4 md:pb-0">
                <i className="fas fa-plane mr-2"></i>Flight
              </span>
              <span className="flex items-center pb-4 md:pb-0">
                <i className="fa-solid fa-hotel text-black mr-2"></i>Hotel
              </span>
            </div>

            {/* Right Icons (Wifi, Food) */}
            <div className="flex flex-col gap-4 md:gap-10">
              <span className="flex items-center pb-4 md:pb-0">
                <i className="fa-solid fa-wifi mr-2"></i>Wifi
              </span>
              <span className="flex items-center pb-4 md:pb-0">
                <i className="fa-solid fa-utensils text-black mr-2"></i>Food
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-blue-200 p-4">
        {/* Subheadings: "BEACH", "MOUNTAIN", etc. */}
        <div className="flex flex-wrap justify-between space-x-4 mt-4">
          <h1 className="text-left text-lg sm:text-xl md:text-3xl font-semibold m-2">
            <span className='text-blue-600'>POPULAR</span> PLACES
          </h1>
          <h1 className="text-sm sm:text-base text-blue-600 md:text-lg font-semibold m-2">BEACH</h1>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold m-2">MOUNTAIN</h1>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold m-2">WATER FALL</h1>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold m-2">ICEBERGS</h1>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold m-2">VIEW ALL</h1>
        </div>

        {/* Cards with images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="../../public/photos/G.jpg" alt="Beach" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h1 className=" text-xl sm:text-2xl font-semibold">GILGIT</h1>
            <div className="flex items-center space-x-2 mt-4">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 8.5c0 2.7 1.91 5.42 4.71 8.32 2.74 2.75 5.42 5.18 5.42 5.18s2.68-2.43 5.42-5.18C17.09 13.92 19 11.2 19 8.5 19 5.13 15.87 2 12 2z" />
              </svg>
              {/* Location Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">GILGIT-BALTISTAN</h1>
            </div>
            <p>This is a very beautiful place located in the north of Pakistan.</p>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="../../public/photos/h.png" alt="Mountain" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h1 className=" text-xl sm:text-2xl font-semibold">HUNZA</h1>
            <div className="flex items-center space-x-2 mt-4">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 8.5c0 2.7 1.91 5.42 4.71 8.32 2.74 2.75 5.42 5.18 5.42 5.18s2.68-2.43 5.42-5.18C17.09 13.92 19 11.2 19 8.5 19 5.13 15.87 2 12 2z" />
              </svg>
              {/* Location Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">GILGIT-BALTISTAN</h1>
            </div>
            <p>This is a very beautiful place located in the north of Pakistan.</p>
          </div>

          {/* Third Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="../../public/photos/s.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h1 className=" text-xl sm:text-2xl font-semibold">SKARDU</h1>
            <div className="flex items-center space-x-2 mt-4">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 8.5c0 2.7 1.91 5.42 4.71 8.32 2.74 2.75 5.42 5.18 5.42 5.18s2.68-2.43 5.42-5.18C17.09 13.92 19 11.2 19 8.5 19 5.13 15.87 2 12 2z" />
              </svg>
              {/* Location Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">GILGIT-BALTISTAN</h1>
            </div>
            <p>This is a very beautiful place located in the north of Pakistan.</p>
          </div>
        </div>
      </div>





      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl text-blue-600 font-semibold mb-4">25+</h1>
          <p className="text-black text-4xl">Cities</p>
        </div>


        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl text-blue-600 font-semibold mb-4">700+</h1>
          <p className="text-black text-4xl"> Places</p>
        </div>


        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl text-blue-600 font-semibold mb-4">200+</h1>
          <p className="text-black text-4xl">Hotels</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl text-blue-600 font-semibold mb-4">2k+</h1>
          <p className="text-black text-4xl">Reviews</p>
        </div>
      </div>

{/* our Gallery */}
<div className="bg-blue-200 p-6">
  <div className="flex justify-between items-center mb-6">
    <h4 className="text-lg font-bold">OUR GALLERY</h4>
    <p className="text-blue-600 cursor-pointer">VIEW ALL</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <img src="../../public/photos/g1.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg" />
    <img src="../../public/photos/g2.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg" />
    <img src="../../public/photos/g3.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg" />
    <img src="../../public/photos/g4.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg" />
    <img src="../../public/photos/g5.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg" />
    <img src="../../public/photos/g6.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg" />
    <img src="../../public/photos/g7.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg" />
    <img src="../../public/photos/g8.png" alt="Waterfall" className="w-full h-40 object-cover rounded-lg" />
  </div>
</div>



<div className='bg-white justify-center'>
  <h2 className='text-center text-4xl mt-8 mb-9 font-bold'>
    <span className='text-blue-500'>FREQUENTLY</span> ASKED QUESTIONS
  </h2>

  {/* q1 */}
  <div className="p-4 text-center mx-auto my-4 rounded-3xl border border-gray-400 max-w-xl w-full">
    <p 
      className="text-xl font-semibold text-blue-600 cursor-pointer" 
      onClick={toggleSpan}
    >
      Why do dreams sometimes feel so vivid, yet slip away from memory so quickly upon 
      waking? <i className="fa-solid fa-angle-down ml-4"></i>
    </p>
    
    {isOpen && (
      <span className="block mt-4 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat nisi vel pariatur nemo molestias aspernatur,<br /> velit eos beatae temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos sunt, doloribus fuga odio tenetur.
      </span>
    )}
  </div>

  {/* q2 */}
  <div className="p-4 text-center mx-auto my-4 rounded-3xl border border-gray-400 max-w-xl w-full">
    <p 
      className="text-xl font-semibold text-blue-600 cursor-pointer" 
      onClick={toggleSpan1}
    >
      Why do dreams sometimes feel so vivid, yet slip away from memory so quickly upon
       waking? <i className="fa-solid fa-angle-down ml-4"></i>
    </p>
    
    {isOpen1 && (
      <span className="block mt-4 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat nisi vel pariatur nemo molestias aspernatur,<br /> velit eos beatae temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos sunt, doloribus fuga odio tenetur.
      </span>
    )}
  </div>

  {/* q3 */}
  <div className="p-4 text-center mx-auto my-4 rounded-3xl border border-gray-400 max-w-xl w-full">
    <p 
      className="text-xl font-semibold text-blue-600 cursor-pointer" 
      onClick={toggleSpan2}
    >
      Why do dreams sometimes feel so vivid, yet slip away from memory so quickly upon
       waking? <i className="fa-solid fa-angle-down ml-4"></i>
    </p>
    
    {isOpen2 && (
      <span className="block mt-4 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat nisi vel pariatur nemo molestias aspernatur,<br /> velit eos beatae temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos sunt, doloribus fuga odio tenetur.
      </span>
    )}
  </div>

  {/* q4 */}
  <div className="p-4 text-center mx-auto my-4 rounded-3xl border border-gray-400 max-w-xl w-full">
    <p 
      className="text-xl font-semibold text-blue-600 cursor-pointer" 
      onClick={toggleSpan}
    >
      Why do dreams sometimes feel so vivid, yet slip away from memory so quickly upon
       waking? <i className="fa-solid fa-angle-down ml-4"></i>
    </p>
    
    {isOpen && (
      <span className="block mt-4 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat nisi vel pariatur nemo molestias aspernatur,<br /> velit eos beatae temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos sunt, doloribus fuga odio tenetur.
      </span>
    )}
  </div>
  <h2 className='text-center text-4xl mt-8 mb-9 text-blue-500 font-bold'>
   Sign up to our newsletter
  </h2>
  {/* /email button */}



  <div className="flex justify-center items-center mb-9">
  <form 
    onSubmit={handleSubmit} 
    className="flex flex-col sm:flex-row items-center gap-4"
  >
    <input
      type="email"
      id="email"
      name="email"
      className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      placeholder="you@example.com"
      required
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
    >
      Submit
    </button>
  </form>
</div>

</div>

    </main>
  )
}

export default Home;
