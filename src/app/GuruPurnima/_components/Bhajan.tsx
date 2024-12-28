"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import OverviewImage from "../utils/OverviewImage.png";
import baba from "../utils/Baba2.png";
import Maharaj from "../utils/Maharaj.png";
import google from "../utils/Google Play.png";
import Apple from "../utils/App store.png";
import Laptop from "../utils/Laptop Mobile.png";

const images = [OverviewImage, baba, OverviewImage, baba];

const Bhajan = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // States to handle the visibility of each dropdown
  const [benefitsOpen, setBenefitsOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full bg-white">
      <div className="py-12 px-4 lg:px-0">
        <div className="w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-6 items-start 2xl:container 2xl:mx-auto">
          {/* Left Section */}
          <div className="bg-[#eae5dc] p-6 lg:p-8 lg:pl-36 lg:h-full">
            <h1 className="text-3xl lg:text-4xl font-bold text-brown-900 mb-4">
              <span className="text-brown-800">Bhajan</span>
              <span className="text-stone-400 px-1">&amp;</span>
              <span className="text-brown-800">Satsang</span>
            </h1>
            <p className="text-gray-600 mb-6 lg:mb-8 pr-0 lg:pr-10">
              Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
              qui ratione reprehenderit eos voluptatem distinctio.
            </p>
            <p className="text-gray-600 mb-8 lg:mb-12 pr-0 lg:pr-10">
              Vel possimus blanditiis est dolores eius hic voluptatem nemo At
              esse quas aut distinctio distinctio.
            </p>
            <div className="relative">
              <span
                className="text-5xl lg:text-7xl font-script text-white absolute -bottom-4 -left-5  lg:-left-20"
                style={{ fontFamily: "'Brush Script MT', cursive, Regular" }}
              >
                Bhajan
              </span>
              <div className="flex justify-end">
                <button className="px-4 py-1 border-2 border-green-600 text-black font-semibold bg-white hover:bg-stone-100 transition-colors">
                  View Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Image Slider */}
          <div className="relative bg-white border p-4 lg:p-8">
            {/* Main Image */}
            <div className="relative h-48 lg:h-80 overflow-hidden">
              <Image
                src={images[currentImageIndex]}
                alt="Bhajan ceremony"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail Strip with Navigation Arrows */}
            <div className="flex justify-center gap-2 lg:gap-3 mt-4">
              <button
                onClick={prevSlide}
                className="bg-orange-500 py-2 rounded-sm text-white hover:bg-orange-600 transition-colors flex-shrink-0"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2 lg:gap-4 overflow-x-auto">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`w-20 lg:w-36 h-16 lg:h-24 flex-shrink-0 cursor-pointer overflow-hidden ${
                      currentImageIndex === index
                        ? "ring-2 ring-orange-500"
                        : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-orange-500 py-2 rounded-sm text-white hover:bg-orange-600 transition-colors flex-shrink-0"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between w-full px-4 lg:px-16 pt-6 lg:pt-2 gap-8">
        {/* Left side content */}
        <div className="text-center lg:text-left lg:pl-5">
          <h1
            className="text-3xl lg:text-5xl font-extrabold text-orange-600"
            style={{ fontFamily: "Didot" }}
          >
            JOIN
          </h1>
          <h2
            className="text-xl lg:text-3xl font-bold text-black"
            style={{ fontFamily: "Serif" }}
          >
            THROUGH
          </h2>
          <h1
            className="text-3xl lg:text-5xl lg:pl-4 font-bold text-orange-600"
            style={{ fontFamily: "Didot" }}
          >
            APP
          </h1>

          {/* App download section */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-6 lg:mt-8 gap-4">
            <Image
              src={Maharaj}
              alt="Sudhanshu Ji Maharaj"
              width={100}
              height={100}
              className="w-16 lg:w-24"
            />
            <div>
              <h3 className="text-base lg:text-lg text-gray-500 font-bold">
                Sudhanshu Ji Maharaj App
              </h3>
              <div className="flex mt-2 gap-2">
                <Image
                  src={google}
                  alt="Google Play"
                  width={100}
                  height={40}
                  className="w-24 lg:w-32"
                />
                <Image
                  src={Apple}
                  alt="App Store"
                  width={100}
                  height={40}
                  className="w-24 lg:w-32"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={Laptop}
            alt="Laptop showing Maha Shivratri program"
            width={600}
            height={800}
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="container mx-auto py-10 w-full px-4 lg:px-20">
        <h1 className="text-center text-3xl lg:text-5xl font-bold text-red-900 pb-5">
          Frequently Asked Benefits
        </h1>
        <div className="flex justify-between bg-gray-200 items-center text-red-900 shadow-[-6px_-6px_10px_rgba(0,0,0,0.2)] rounded-sm px-4 lg:px-8 py-2 font-semibold text-sm lg:text-2xl mb-4">
          <span>Benefits</span>
          <span
            className="text-lg font-bold"
            onClick={() => setBenefitsOpen(!benefitsOpen)}
          >
            <IoIosArrowDown
              className={`w-6 lg:w-8 h-6 hover:cursor-pointer lg:h-8 transition-transform ${
                benefitsOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>
        {benefitsOpen && (
          <div className="bg-gray-100 p-4 mb-4 text-sm rounded-sm lg:text-lg">
            <p>Here are some details about the benefits...</p>
            <p>Here are the program schedules...</p>
          </div>
        )}

        <div className="flex justify-between bg-gray-200 items-center text-red-900 shadow-[-6px_-6px_10px_rgba(0,0,0,0.2)] px-4 lg:px-8 py-2 font-semibold text-sm lg:text-2xl mb-4">
          <span>Program Schedule</span>
          <span
            className="text-lg font-bold"
            onClick={() => setScheduleOpen(!scheduleOpen)}
          >
            <IoIosArrowDown
              className={`w-6 lg:w-8 h-6 hover:cursor-pointer lg:h-8 transition-transform ${
                scheduleOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>
        {scheduleOpen && (
          <div className="bg-gray-100 p-4 mb-4 text-sm rounded-sm lg:text-lg">
            <p>Here are the program schedules...</p>
          </div>
        )}

        <div className="flex justify-between bg-gray-200 items-center text-red-900 shadow-[-6px_-6px_10px_rgba(0,0,0,0.2)] px-4 lg:px-8 py-2 font-semibold text-sm lg:text-2xl">
          <span>Enquire Now</span>
          <span
            className="text-lg font-bold"
            onClick={() => setEnquireOpen(!enquireOpen)}
          >
            <IoIosArrowDown
              className={`w-6 lg:w-8 h-6 hover:cursor-pointer lg:h-8 transition-transform ${
                enquireOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>
        {enquireOpen && (
          <div className="bg-gray-100 p-4 mt-4 text-sm rounded-sm lg:text-lg">
            <p>Here you can enquire about our services...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bhajan;


// "use client";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
// import OverviewImage from "../utils/OverviewImage.png";
// import baba from "../utils/Baba2.png";
// import Maharaj from "../utils/Maharaj.png";
// import google from "../utils/Google Play.png";
// import Apple from "../utils/App store.png";
// import Laptop from "../utils/Laptop Mobile.png";

// const images = [OverviewImage, baba, OverviewImage, baba];

// const Bhajan = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   // States to handle the visibility of each dropdown
//   const [benefitsOpen, setBenefitsOpen] = useState(false);
//   const [scheduleOpen, setScheduleOpen] = useState(false);
//   const [enquireOpen, setEnquireOpen] = useState(false);

//   const nextSlide = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="w-full bg-white">
//       <div className="py-12 px-4 lg:px-0">
//         <div className="w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-6 items-start 2xl:container 2xl:mx-auto">
//           {/* Left Section */}
//           <div className="bg-[#eae5dc] p-6 lg:p-8 lg:pl-48 lg:h-full">
//             <h1 className="text-3xl lg:text-4xl font-bold text-brown-900 mb-4">
//               <span className="text-brown-800">Bhajan</span>
//               <span className="text-stone-400 px-1">&amp;</span>
//               <span className="text-brown-800">Satsang</span>
//             </h1>
//             <p className="text-gray-600 mb-6 lg:mb-8 pr-0 lg:pr-10">
//               Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
//               qui ratione reprehenderit eos voluptatem distinctio.
//             </p>
//             <p className="text-gray-600 mb-8 lg:mb-12 pr-0 lg:pr-10">
//               Vel possimus blanditiis est dolores eius hic voluptatem nemo At
//               esse quas aut distinctio distinctio.
//             </p>
//             <div className="relative">
//               <span
//                 className="text-5xl lg:text-8xl font-script text-white absolute -bottom-4 -left-5  lg:-left-20"
//                 style={{ fontFamily: "'Brush Script MT', cursive, Regular" }}
//               >
//                 Bhajan
//               </span>
//               <div className="flex justify-end">
//                 <button className="px-4 py-1 border-2 border-green-600 text-black font-semibold bg-white hover:bg-stone-100 transition-colors">
//                   View Gallery
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Image Slider */}
//           <div className="relative bg-white border p-4 lg:p-8">
//             {/* Main Image */}
//             <div className="relative h-48 lg:h-80 overflow-hidden">
//               <Image
//                 src={images[currentImageIndex]}
//                 alt="Bhajan ceremony"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* Thumbnail Strip with Navigation Arrows */}
//             <div className="flex items-center gap-2 lg:gap-3 mt-4">
//               <button
//                 onClick={prevSlide}
//                 className="bg-orange-500 py-2 rounded-sm text-white hover:bg-orange-600 transition-colors flex-shrink-0"
//               >
//                 <ChevronLeft size={24} />
//               </button>

//               <div className="flex gap-2 lg:gap-4 overflow-x-auto flex-grow">
//                 {images.map((img, index) => (
//                   <div
//                     key={index}
//                     className={`w-20 lg:w-36 h-16 lg:h-24 flex-shrink-0 cursor-pointer overflow-hidden ${
//                       currentImageIndex === index
//                         ? "ring-2 ring-orange-500"
//                         : ""
//                     }`}
//                     onClick={() => setCurrentImageIndex(index)}
//                   >
//                     <Image
//                       src={img}
//                       alt={`Thumbnail ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={nextSlide}
//                 className="bg-orange-500 py-2 rounded-sm text-white hover:bg-orange-600 transition-colors flex-shrink-0"
//               >
//                 <ChevronRight size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto flex flex-col lg:flex-row justify-between w-full px-4 lg:px-16 pt-6 lg:pt-2 gap-8">
//         {/* Left side content */}
//         <div className="text-center lg:text-left lg:pl-5">
//           <h1
//             className="text-3xl lg:text-5xl font-extrabold text-orange-600"
//             style={{ fontFamily: "Didot" }}
//           >
//             JOIN
//           </h1>
//           <h2
//             className="text-xl lg:text-3xl font-bold text-black"
//             style={{ fontFamily: "Serif" }}
//           >
//             THROUGH
//           </h2>
//           <h1
//             className="text-3xl lg:text-5xl lg:pl-4 font-bold text-orange-600"
//             style={{ fontFamily: "Didot" }}
//           >
//             APP
//           </h1>

//           {/* App download section */}
//           <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-6 lg:mt-8 gap-4">
//             <Image
//               src={Maharaj}
//               alt="Sudhanshu Ji Maharaj"
//               width={100}
//               height={100}
//               className="w-16 lg:w-24"
//             />
//             <div>
//               <h3 className="text-base lg:text-lg text-gray-500 font-bold">
//                 Sudhanshu Ji Maharaj App
//               </h3>
//               <div className="flex mt-2 gap-2">
//                 <Image
//                   src={google}
//                   alt="Google Play"
//                   width={100}
//                   height={40}
//                   className="w-24 lg:w-32"
//                 />
//                 <Image
//                   src={Apple}
//                   alt="App Store"
//                   width={100}
//                   height={40}
//                   className="w-24 lg:w-32"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right side image */}
//         <div className="flex justify-center lg:justify-end">
//           <Image
//             src={Laptop}
//             alt="Laptop showing Maha Shivratri program"
//             width={600}
//             height={800}
//             className="max-w-full h-auto"
//           />
//         </div>
//       </div>
//       <div className="container mx-auto py-10 w-full px-4 lg:px-20">
//         <h1 className="text-center text-3xl lg:text-5xl font-bold text-red-900 pb-5">
//           Frequently Asked Benefits
//         </h1>
//         <div className="flex justify-between bg-gray-200 items-center text-red-900 shadow-[-6px_-6px_10px_rgba(0,0,0,0.2)] rounded-sm px-4 lg:px-8 py-2 font-semibold text-sm lg:text-2xl mb-4">
//           <span>Benefits</span>
//           <span
//             className="text-lg font-bold"
//             onClick={() => setBenefitsOpen(!benefitsOpen)}
//           >
//             <IoIosArrowDown
//               className={`w-6 lg:w-8 h-6 hover:cursor-pointer lg:h-8 transition-transform ${
//                 benefitsOpen ? "rotate-180" : ""
//               }`}
//             />
//           </span>
//         </div>
//         {benefitsOpen && (
//           <div className="bg-gray-100 p-4 mb-4 text-sm rounded-sm lg:text-lg">
//             <p>Here are some details about the benefits...</p>
//             <p>Here are the program schedules...</p>
//           </div>
//         )}

//         <div className="flex justify-between bg-gray-200 items-center text-red-900 shadow-[-6px_-6px_10px_rgba(0,0,0,0.2)] px-4 lg:px-8 py-2 font-semibold text-sm lg:text-2xl mb-4">
//           <span>Program Schedule</span>
//           <span
//             className="text-lg font-bold"
//             onClick={() => setScheduleOpen(!scheduleOpen)}
//           >
//             <IoIosArrowDown
//               className={`w-6 lg:w-8 h-6 hover:cursor-pointer lg:h-8 transition-transform ${
//                 scheduleOpen ? "rotate-180" : ""
//               }`}
//             />
//           </span>
//         </div>
//         {scheduleOpen && (
//           <div className="bg-gray-100 p-4 mb-4 text-sm rounded-sm lg:text-lg">
//             <p>Here are the program schedules...</p>
//           </div>
//         )}

//         <div className="flex justify-between bg-gray-200 items-center text-red-900 shadow-[-6px_-6px_10px_rgba(0,0,0,0.2)] px-4 lg:px-8 py-2 font-semibold text-sm lg:text-2xl">
//           <span>Enquire Now</span>
//           <span
//             className="text-lg font-bold"
//             onClick={() => setEnquireOpen(!enquireOpen)}
//           >
//             <IoIosArrowDown
//               className={`w-6 lg:w-8 h-6 hover:cursor-pointer lg:h-8 transition-transform ${
//                 enquireOpen ? "rotate-180" : ""
//               }`}
//             />
//           </span>
//         </div>
//         {enquireOpen && (
//           <div className="bg-gray-100 p-4 mt-4 text-sm rounded-sm lg:text-lg">
//             <p>Here you can enquire about our services...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bhajan;
