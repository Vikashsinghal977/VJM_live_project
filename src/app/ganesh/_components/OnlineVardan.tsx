"use client";

import React from 'react';
import Image from 'next/image';
import Human from "../utils/Human.png";

const OnlineVardan = () => {
  return (
    <div className='container mx-auto flex flex-col items-center px-4'>
      <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 lg:px-10">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <Image
            src={Human}
            fill
            alt="Vardan"
            className="object-contain"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full flex flex-col md:w-3/4 items-center md:items-start mt-8 mb-8 md:mt-0 md:pl-8">
        {/* Heading Group */}
        <div className="w-full text-center md:text-center mb-6">
          <h1
            className="text-xl sm:text-2xl md:text-3xl text-gray-500 mb-2"
            style={{ fontFamily: 'Arial Black' }}
          >
            Online
          </h1>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-900"
            style={{ font: 'Arial Regular' }}
          >
            Vardaan Siddhi Sadhna
          </h2>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-black mb-8 text-center md:text-left max-w-2xl">
          Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
          qui ratione reprehenderit eos voluptatem distinctio. Vel possimus
          blanditiis est dolores eius hic voluptatem nemo At esse quas aut
          distinctio distinctio.blanditiis est dolores
        </p>

        {/* Button Container */}
        <div className="w-full flex justify-center md:justify-start">
          <button className="bg-yellow-400 hover:bg-yellow-600 text-black text-xl sm:text-2xl font-bold px-8 py-2 rounded transition-colors duration-300">
            Register
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default OnlineVardan;
