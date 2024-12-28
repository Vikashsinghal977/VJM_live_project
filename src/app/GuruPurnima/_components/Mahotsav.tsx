import Image from "next/image";
import React from "react";
import yog from "../utils/yog.png";
import hands from "../utils/hands.png";
import palm from "../utils/Palm.png";
import ashirvad from "../utils/ashirvad.png";
import music from "../utils/music.png";
import Purnima from "../utils/Purnima.png";

const Mahotsav = () => {
  const activities = [
    { src: yog, text: "Guru Mantra Siddhi Sadhna" },
    { src: hands, text: "Divya Shaktipat Kriya" },
    { src: palm, text: "Guru Mantra Diksha" },
    { src: ashirvad, text: "Purnima Darshan" },
    { src: music, text: "Bhajan" },
  ];

  return (
    <div
      className="flex items-end relative min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${Purnima.src})`,
      }}
    >
      <div className=" w-full bg-opacity-50 p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
        {/* Main Content Container */}
        <div className=" justify-end max-w-7xl mx-auto">
          {/* Header and Description Section */}
          <div className="flex flex-col lg:flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-10">
            {/* Title */}
            <div
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full lg:w-1/2 pt-2 xs:pt-3 sm:pt-4 md:pt-6 lg:pt-12 lg:ml-4 text-center lg:text-left font-bold text-yellow-200 mb-2 xs:mb-3 sm:mb-4"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              <h1 className="leading-tight">Guru Purnima Mahotsav</h1>
            </div>

            {/* Description */}
            <div className="text-center lg:text-left w-full lg:w-1/2 text-xs xs:text-sm sm:text-base md:text-lg text-white mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <p className="mb-2 xs:mb-3 sm:mb-4">
                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores
                autem qui ratione reprehenderit eos voluptatem distinctio. Vel
                possimus blanditiis est dolores eius hic voluptatem nemo. At
                esse quas aut distinctio distinctio. At esse quas aut distinctio
                distinctio.
              </p>
              <p>
                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores
                autem qui ratione reprehenderit eos voluptatem distinctio. Vel
                possimus blanditiis est dolores eius hic voluptatem nemo. At
                esse quas aut distinctio distinctio. At esse quas aut distinctio
                distinctio.
              </p>
            </div>
          </div>

          {/* Activities Section */}
          <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-24 items-start justify-items-center w-full text-center text-orange-400 px-1 xs:px-2 sm:px-4 md:px-6 lg:px-8 mt-2 xs:mt-3 sm:mt-4 md:mt-6">
            {activities.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start w-full max-w-[120px] xs:max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
              >
                <div className="relative w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]">
                  <Image
                    src={item.src}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 3rem, (max-width: 768px) 4rem, (max-width: 1024px) 6rem, 100px"
                    alt={item.text}
                    priority={index < 2}
                  />
                </div>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mt-1 xs:mt-2 sm:mt-3 md:mt-4 text-center leading-tight">
                  {item.text}
                </p> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mahotsav;
