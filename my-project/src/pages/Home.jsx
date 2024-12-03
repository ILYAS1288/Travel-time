import React from 'react'

const Home = () => {
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
    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none">
      BOOK NOW
    </button>
    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none">
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
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">HUNZA</h1>
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
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">SKARDU</h1>
      </div>
      <p>This is a very beautiful place located in the north of Pakistan.</p>
    </div>
  </div>
</div>



</main>
  )
}

export default Home
