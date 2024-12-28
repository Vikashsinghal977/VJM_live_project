"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import Section1 from "../utils/Section_1_Side_Imag.png";
import Design1 from "../utils/Design3.png";
import Design2 from "../utils/Design4.png";
import Section2 from "../utils/Section 2 Side Image.png";
import Section21 from "../utils/Section 2 1 Side Image.png";
import Sankalpit from "../utils/Sankalpit Yajman.png";

function Overview() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };
  return (
    <div className="bg-yellow-100">
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* sm:px-6 lg:px-10*/}

        {/* First Section Overview */}
        <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 lg:px-10">
          {/* Left continer */}
          <div className="md:w-1/2 md:pr-8 md:mr-6">
            <div className="text-2xl md:text-3xl text-orange-900 font-bold mb-4">
              <h1>Overview</h1>
            </div>

            <div className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              necessitatibus, tempore minus fugit cupiditate quidem ut aliquid
              qui obcaecati alias possimus doloremque perferendis voluptates ea
              perspiciatis, corporis voluptatibus cum, voluptate ipsa atque!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              similique voluptatibus suscipit omnis nulla assumenda voluptatum
              vel nesciunt animi est dolorum, veritatis reprehenderit commodi ut
              totam dicta aliquid quia cumque?
            </div>
            <div className="py-7 w-full max-w-sm">
            {/* Benefits Section */}
            <div>
              <div
                className="flex justify-between items-center text-orange-800 border-orange-800 border-2 px-4 py-2 font-bold text-base md:text-lg lg:text-xl mb-2 cursor-pointer"
                onClick={() => toggleSection('benefits')}
              >
                <span>Benefits</span>
                <span className="text-lg font-bold">{openSection === 'benefits' ? '-' : '+'}</span>
              </div>
              {openSection === 'benefits' && (
                <div className="px-4 py-2 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra, dui a suscipit vestibulum, purus ligula vulputate lorem.
                </div>
              )}
            </div>

            {/* Program Schedule Section */}
            <div>
              <div
                className="flex justify-between items-center text-orange-800 border-orange-800 border-2 px-4 py-2 font-bold text-base md:text-lg lg:text-xl mb-2 cursor-pointer"
                onClick={() => toggleSection('schedule')}
              >
                <span>Program Schedule</span>
                <span className="text-lg font-bold">{openSection === 'schedule' ? '-' : '+'}</span>
              </div>
              {openSection === 'schedule' && (
                <div className="px-4 py-2 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra, dui a suscipit vestibulum, purus ligula vulputate lorem.
                </div>
              )}
            </div>

            {/* Enquire Now Section */}
            <div>
              <div
                className="flex justify-between items-center text-orange-800 border-orange-800 border-2 px-4 py-2 font-bold text-base md:text-lg lg:text-xl cursor-pointer"
                onClick={() => toggleSection('enquire')}
              >
                <span>Enquire Now</span>
                <span className="text-lg font-bold">{openSection === 'enquire' ? '-' : '+'}</span>
              </div>
              {openSection === 'enquire' && (
                <div className="px-4 py-2 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra, dui a suscipit vestibulum, purus ligula vulputate lorem.
                </div>
              )}
            </div>
          </div>
          </div>

          {/* right container */}
          <div className="flex flex-col justify-center items-center mt-6 md:mt-0 md:w-1/2">
          <div className="flex justify-center w-full">
            <Image
              src={Section1}
              alt="Overview Image"
              className="sm:w-95 md:w-full  sm:max-w-sm md:max-w-lg lg:max-w-lg rounded-lg" 
            /> {/* max-w-xs*/}
          </div>
          <div className="mt-6">
            <button className="bg-yellow-400 font-bold px-6 text-base md:text-lg lg:text-xl py-2 flex items-center text-black">
              <IoPlayCircleOutline className="w-6 h-6 md:w-8 md:h-8 mr-3" />
              Watch Glimpses
            </button>
          </div>
        </div>
        </div>

        {/*Second Section  Ganesh Lakshmi Yagya  */}
        <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 lg:px-10">
          <div className="hidden md:flex md:w-1/4 justify-center -mt-16 mb-4 md:mb-0">
            <Image
              src={Design1}
              alt="Ganesh Image"
              width={500}
              height={500}
              className="w-full max-w-xs rounded-lg"
            />
          </div>

          {/* Center Content Section */}
          <div className="w-full text-center px-4 md:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-900 mb-2 mt-8">
              Ganesh Lakshmi Yagya
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-700 mb-4">
              Celebrations
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
              blanditiis quaerat labore dicta modi, non obcaecati natus.
            </p>
          </div>


          {/* Right Image Section */}
          <div className="hidden md:flex md:w-1/4 justify-center -mt-16 mb-4">
            <Image
              src={Design2}
              alt="Lakshmi Image"
              width={500}
              height={500}
              className="w-full max-w-xs rounded-lg "
            />
          </div>
        </div>

        {/* Third Section  */}
        <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 gap-3 lg:px-10">

          {/* Left Content Section (Text) */}
          <div className="md:w-4/5 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-textColor mb-4 mt-2">
              Pran Pratistha of Shree Yantra
            </h1>
            <p className="text-black leading-relaxed text-base sm:text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil
              ipsa cumque, quasi provident eaque nemo, saepe iste ratione totam illo
              necessitatibus, tenetur perferendis voluptates molestias! Laborum quod
              tenetur inventore ipsa assumenda fuga ut accusantium, voluptatum amet
              maiores officiis cupiditate distinctio? Fugit earum illum blanditiis odio
              consequuntur saepe accusantium inventore, officia eaque debitis mollitia
              qui, adipisci quod consectetur aliquam accusamus eum! Laudantium harum
              dolores assumenda dolorum.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 mt-4 md:mt-0">
            <Image
              src={Section2}
              alt="Overview Image"
              width={450}
              height={450}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

        </div>

        {/* 4 Section */}
        <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 gap-3 lg:px-10">
          {/* Left Image Section */}
          <div className="md:w-2/5 flex justify-center md:justify-start items-center mt-4 md:mt-0">
            <Image
              src={Section21}
              alt="Overview Image"
              width={450}
              height={450}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
            
          {/* Right Content */}
          <div className="md:w-4/5 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-3xl md:text-3xl font-bold text-textColor mb-4 pt-2">
            Shree Ganesh Lakshmi Oblation (Mantrahuti)
            </h1>
            <p className="text-black leading-relaxed text-base sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil
              ipsa cumque, quasi provident eaque nemo, saepe iste ratione totam illo
              necessitatibus, tenetur perferendis voluptates molestias! Laborum quod
              tenetur inventore ipsa assumenda fuga ut accusantium, voluptatum amet
              maiores officiis cupiditate distinctio? Fugit earum illum blanditiis odio
              consequuntur saepe accusantium inventore, officia eaque debitis mollitia
              qui, adipisci quod consectetur aliquam accusamus eum! Laudantium harum
              dolores assumenda dolorum.
            </p>
          </div>




        </div>

        {/* 5 Section */}
        <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center md:px-5 gap-3 lg:px-10">

          {/* left Side */}
          <div className="md:w-4/5 text-center md:text-left">
            <h1 className="text-3xl md:text-3xl text-red-900 font-bold mb-3 pt-5">
            Yagya by
            </h1>
            <h2 className="text-4xl md:text-4xl text-red-900 font-bold mb-4">
            Sankalpit Yajman
            </h2>
            <p className="text-black leading-relaxed text-base sm:text-lg md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            quae repellendus dolorem nobis? Quaerat dignissimos enim, explicabo
            eaque reprehenderit fuga animi dolor, dolore odit deleniti
            praesentium ab nostrum magnam blanditiis accusamus eligendi
            temporibus aliquid. Eveniet et quisquam qui consectetur nemo
            deleniti cupiditate quia mollitia est, nobis, ratione officiis quae
            possimus, excepturi explicabo. Adipisci odit deserunt possimus sed
            explicabo sapiente.
            </p>
            <div className="my-6">
              <button className="bg-yellow-400 font-bold px-4 text-xl md:text-2xl py-1 text-black">Register</button>
            </div>
          </div>
          {/* right side */}
          <div>
          <Image
            src={Sankalpit}
            alt="Overview Image"
            width={450}
            height={450}
            // className="w-full max-w-md rounded-lg shadow-lg"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
