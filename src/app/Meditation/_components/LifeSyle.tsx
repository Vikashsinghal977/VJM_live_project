import React from "react";
import chakra from '../utils/meditationchakra.png'
import Image from "next/image";
// vagsvdcv
const LifestyleSessions = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto  ">
        {/* Left Content */}
       <div className=" w-11/12 mx-auto flex flex-col md:flex-row items-center gap-8">
       <div className="flex-1">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-green-800 mb-4">
            48 lifestyle modification & <br />
            self-empowerment sessions
          </h2>
        </div>

          <Image src={chakra} alt="chakra"/>
        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center">
          {/* Chakra Image */}

          {/* Bullet Points */}
          <ul className="text-green-800 list-disc pl-6 space-y-2 text-lg">
            <li>Healthy & Blissful Living</li>
            <li>Art of Karma Yoga</li>
            <li>Self-Discipline</li>
            <li>Time Management</li>
            <li>Art of Good Life</li>
            <li>Enhancing the Creative Power</li>
            <li>Kriya Yog etc.</li>
          </ul>
        </div>
       </div>
      </div>
    </div>
  );
};

export default LifestyleSessions;
