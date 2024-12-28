import Image from "next/image";
import React from "react";
import yog from "../utils/pic1.png";
import hands from "../utils/pic1.png";
import palm from "../utils/pic1.png";
import ashirvad from "../utils/pic1.png";
import music from "../utils/pic1.png";

const Meditate = () => {
  const benefits = [
    { image: yog, title: "Reduce Stress Naturally" },
    { image: hands, title: "Sparks Creativity" },
    { image: palm, title: "Maintains Good Health" },
    { image: ashirvad, title: "Sharpens your Focus" },
    { image: music, title: "Invoke Positive Change" },
  ];

  return (
    <div className=" 2xl:h-auto bg-[#fdf6e6] py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6B7BA8] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Why Meditate on New Year's Day?
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-items-center items-start flex-grow">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2 sm:mb-3 md:mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 128px"
                  priority={index < 2}
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meditate;