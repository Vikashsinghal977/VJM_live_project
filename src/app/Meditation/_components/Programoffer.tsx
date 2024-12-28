import Image from 'next/image';
import React from 'react';
import offerimg from '../utils/offerimg.png'
// fgyguf
const ProgramOffer = () => {
  return (
    <div className="bg-green-700 text-white py-10 ">
      <div className="container mx-auto px-6 sm:px-10 md:px-20">
        <div className=' w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-8'>
        <div className="md:w-3/5 w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            The program will offer you
          </h2>
          <p className="text-lg md:text-xl font-medium mb-6">
            12 phases of meditation including:
          </p>
          <ul className="list-disc ml-6 space-y-4 text-base md:text-lg">
            <li>
              <strong>Universal Power Meditation</strong>{' '}
              <span className="italic">(विष्व शक्ति ध्यान)</span>
            </li>
            <li>
              <strong>Art of Blissful Life</strong>{' '}
              <span className="italic">(आनन्दमयी ध्यान)</span>
            </li>
            <li>
              <strong>Experiencing the God Meditation</strong>{' '}
              <span className="italic">(प्रभु दर्शन ध्यान)</span>
            </li>
          </ul>
          <p className="mt-4 italic text-sm md:text-base">
            Meditation for activating energy centers & 8 more such meditation
            sessions
          </p>
          <p className="mt-2 text-sm md:text-base">
            will take you deeper within and you will explore a different
            dimension of life.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-2/5 w-full flex justify-end">
          {/* Replace this placeholder with the actual SVG or image */}
        
            <Image src={offerimg} alt='offers' className=' lg:w-7/12 w-full '/>
          
        </div>
        </div>

      </div>
    </div>
  );
};

export default ProgramOffer;
