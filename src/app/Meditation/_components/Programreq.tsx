


import React from 'react'
import Image from "next/image";
import flower from '../utils/flowerrr.png';
import rocks from '../utils/rocks.png';
import { FaGoogle, FaFacebookF, FaApple, FaMobileAlt, FaHeart } from "react-icons/fa";
import { PiChatsFill } from "react-icons/pi";
// hfguf
const ProgramReq = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 sm:px-10 md:px-20">
        {/* Section: Program Requirement */}
        <section className="mb-12 flex flex-wrap w-11/12 mx-auto justify-between">
          <div className="flex flex-col justify-center w-full lg:w-2/5 md:w-5/12 gap-10">
            <div>
              <h2 className="text-3xl  md:text-4xl text-center md:text-left font-bold text-green-800 mb-6">
                Program Requirement
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-justify md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, saepe. Molestias, non. Consectetur odit aliquid tempore error voluptates obcaecati ipsam!
              </p>
            </div>
            <div className="flex justify-center">
              <Image src={flower} alt="Lotus" className="w-52 sm:w-60 md:w-80" />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-2/5 md:w-1/2 mt-10 md:mt-0">
            <div className="bg-white p-4 shadow-lg rounded-md">
              <h3 className="text-xl sm:text-2xl font-bold text-green-800">Space</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione.
              </p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-md">
              <h3 className="text-xl sm:text-2xl font-bold text-green-800">Age</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Program Fee */}
        <section className="w-11/12 mx-auto relative md:mt-20">
          <div className="flex md:flex-row flex-col items-center justify-center gap-6 lg:py-10 py-4">
            <div className="flex flex-col w-full md:w-2/5">
              <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-green-800 mb-6">
                Program Fee
              </h2>
              <p className="text-gray-600 mb-4 text-base sm:text-lg md:text-xl">
                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione.
              </p>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-full shadow-md flex items-center justify-center gap-4">
                <PiChatsFill /> Select Language
              </button>
              <div className="bg-white mt-10 p-4 shadow flex flex-col gap-3">
                <p className="text-sm sm:text-md text-slate-500 flex items-center text-center">
                  <FaHeart className="text-red-600 text-3xl sm:text-5xl" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, dignissimos.
                </p>
                <div className="w-full sm:w-1/2 mx-auto flex flex-col items-center">
                  <p className="text-gray-600 line-through">INR 6500</p>
                  <p className="text-lg sm:text-xl font-bold text-green-800">INR 4000</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-xl border w-full md:w-3/5 mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-green-700 text-center mb-4">
                Enroll the <span className="text-green-800 font-bold">Program</span>
              </h2>
              <div className="flex justify-between items-center mb-4 bg-amber-700 p-3">
                <select
                  className="bg-amber-700 p-2 rounded-md w-2/3 sm:w-1/2 text-white"
                  defaultValue="English"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Other">Other</option>
                </select>
                <span className="text-sm sm:text-lg font-bold text-white">INR 4000</span>
              </div>
              <button className="bg-orange-500 w-3/4 mx-auto text-white py-2 rounded-3xl mb-4 hover:bg-orange-600 flex items-center justify-center gap-2">
                Continue with
                <span className="flex gap-3">
                  <FaGoogle className="w-3" />
                  <FaFacebookF className="w-2" />
                  <FaApple className="w-3" />
                  <FaMobileAlt className="w-2" />
                </span>
              </button>
              <div className="text-center text-gray-500 mb-4">OR</div>
              <form className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="p-1 h-10 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full p-1 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="p-1 h-10 w-full sm:w-2/5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <select
                    className="border w-full sm:w-16 h-10 border-gray-300 p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="+91 India">+91 India</option>
                    <option value="+1 USA">+1 USA</option>
                    <option value="+44 UK">+44 UK</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="p-1 h-10 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <select
                  className="border block border-gray-300 p-1 w-full sm:w-1/2 h-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
                <button
                  type="submit"
                  className="bg-blue-600 text-white w-1/2 py-3 rounded-full hover:bg-blue-700 mx-auto"
                >
                  Enroll
                </button>
              </form>
              {/* <div className="w-72 h-50 absolute top-60 -right-10 hidden lg:block">
              <Image src={rocks} alt="Rocks" className="w-full h-full" />
            </div> */}
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramReq;
