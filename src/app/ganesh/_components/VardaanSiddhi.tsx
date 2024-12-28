import React from 'react';
import Image from 'next/image';
import Vardan from "../utils/Vardaan Siddhi Sadhana Bg Image.png";

const VardaanSiddhi = () => {
  return (
    <div className='relative min-h-[95vh]'>
      <div className='absolute inset-0'>
        <Image
          src={Vardan}
          alt="A group of people in orange robes meditating"
          fill
          className="object-cover"
          priority
        />
      </div>


      {/* container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 gap-3 lg:px-10 */}
      {/* container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 lg:px-10 */}
      <div className="container mx-auto flex flex-col items-center justify-between min-h-screen px-4">
        <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 lg:px-10">
          <div className="relative z-10">
            {/* Header section with title and button */}
            <div className="flex flex-col sm:flex-row justify-between items-start text-red-900 sm:items-center mb-4 space-y-4 sm:space-y-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pl-0 sm:pl-2" 
                  style={{ font: 'Arial Regular' }}>
                Vardaan Siddhi Sadhna
              </h1>
              <button className="bg-yellow-400 text-black font-bold text-xl sm:text-2xl py-1 px-4 sm:px-5 
                               hover:bg-yellow-500 transition-colors self-start sm:self-center 
                               sm:mr-0 lg:mr-28 sm:mt-0">
                Register
              </button>
            </div>

            <p className="text-base sm:text-lg md:w-2/4 w-0 lg:text-xl mb-6 sm:mb-8">
              Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione 
              reprehenderit eos voluptatem distinctio. Vel possimus blanditiis est dolores eius hic 
              voluptatem nemo At esse quas aut distinctio distinctio.voluptatem distinctio. 
              autem qui ratione reprehenderit eos voluptatem distinctio.
            </p>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-b from-transparent  pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default VardaanSiddhi;