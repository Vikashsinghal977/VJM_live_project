'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Foot from "../../../../public/images/Icons/Footer Design.png";
import { IoSearch } from "react-icons/io5";
import google from "../../../../public/images/Icons/playstore.png"
import apple from "../../../../public/images/Icons/app-store.png"
import logo from "../../../../public/images/Icons/Kanya.png";


import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState('accordion1');

  // Check screen size to determine if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // `640px` breakpoint for mobile
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (sectionId: any) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <footer className="relative bg-gradient-to-r from-red-900 to-orange-500 text-black py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="relative max-w-7xl mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col space-y-8">
          {/* Row 1: Logo and Navigation */}
          <div className="flex flex-col items-center lg:items-left md:flex-row md:items-start gap-6 md:gap-8">
            {/* Logo */}
            <div className="flex w-full lg:w-[100px] flex-row">
              <div className="w-24 sm:w-28 md:w-32 text-center">
                <Image src={logo} alt="VJM Logo" className="w-[85%]" />
              </div>

              <div className=" md:hidden space-y-4 text-center mx-auto sm:text-left">
                <h3 className="text-lg text-center sm:text-xl font-bold text-yellow-200">
                  FIND US ON
                </h3>
                <div className="flex gap-4 mx-auto">
                  {[Facebook, Instagram, Youtube, Twitter].map(
                    (Icon, index) => (
                      <Icon
                        key={index}
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-yellow-200 cursor-pointer border border-white rounded-full p-1.5 transition-colors"
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Links Container */}
            <div className="flex flex-col sm:flex-row lg:flex-row w-full md:gap-8">
              {/* Quick Links */}
              <div className="flex flex-col sm:flex-row items-left sm:items-start flex-1">
                <div className="p-2 sm:p-6 text-left">
                  {/* Accordion Header */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => isMobile && toggleSection("accordion1")}
                  >
                    <h3 className="text-sm lg:text-lg md:text-base sm:text-sm font-bold text-yellow-200 font-serif">
                      QUICK LINKS
                    </h3>
                    {/* Accordion Icon: Only visible on mobile */}
                    {isMobile && (
                      <span className="text-yellow-200 text-xl">
                        {openSection === "accordion1" ? "▲" : "▼"}
                      </span>
                    )}
                  </div>

                  {/* Accordion Content */}
                  <ul
                    className={`space-y-2 text-white font-bold text-sm sm:text-base transition-all duration-500 overflow-hidden 
          ${isMobile
                        ? openSection === "accordion1"
                          ? "max-h-screen block"
                          : "max-h-0 hidden"
                        : "max-h-none block"
                      }`}
                  >
                    {[
                      "Home",
                      "About us",
                      "Vision/Mission",
                      "Leadership",
                      "Contact Us",
                      "Join the team",
                      "Privacy Policy",
                      "Terms and Conditions"
                    ].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="hover:text-yellow-500 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden lg:block">
                  <Image
                    src={Foot}
                    alt="Footer Design"
                    className="pt-7 w-auto max-w-xs"
                  />
                </div>
              </div>

              {/* Get Involved */}
              <div className="flex flex-col sm:flex-row items-left sm:items-start flex-1">
                <div className="p-2 sm:p-6 text-left">
                  {/* Accordion Header */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => isMobile && toggleSection("accordion2")}
                  >
                    <h3 className="text-sm lg:text-lg md:text-base sm:text-sm  font-bold text-yellow-200 font-serif">
                      GET INVOLVED
                    </h3>
                    {/* Accordion Icon: Only visible on mobile */}
                    {isMobile && (
                      <span className="text-yellow-200 text-xl">
                        {openSection === "accordion2" ? "▲" : "▼"}
                      </span>
                    )}
                  </div>

                  {/* Accordion Content */}
                  <ul
                    className={`space-y-2 text-white font-bold text-sm sm:text-base transition-all duration-500 overflow-hidden 
          ${isMobile
                        ? openSection === "accordion2"
                          ? "max-h-screen block"
                          : "max-h-0 hidden"
                        : "max-h-none block"
                      }`}
                  >
                    {[
                      "Sponsor a Girl",
                      "Feed Children",
                      "Bring Books for Children",
                      "Let's Make them Skillful",
                      "Mid Day Meal",
                      "Kausala Vikas Yojana",
                      "Donate for library",
                      "Volunteer with Us",
                      "Donate Us"
                    ].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="hover:text-yellow-500 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden lg:block">
                  <Image
                    src={Foot}
                    alt="Footer Design"
                    className="pt-7 w-auto max-w-xs"
                  />
                </div>
              </div>

              {/* Contact Us */}
              <div className="p-2 sm:p-6 flex-1 text-left">
                {/* Accordion Header */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => isMobile && toggleSection("accordion3")}
                >
                  <h3 className="text-sm lg:text-lg md:text-base sm:text-sm  font-bold text-yellow-200 font-serif">
                    CONTACT US
                  </h3>
                  {/* Accordion Icon: Only visible on mobile */}
                  {isMobile && (
                    <span className="text-yellow-200 text-xl">
                      {openSection === "accordion3" ? "▲" : "▼"}
                    </span>
                  )}
                </div>

                {/* Accordion Content */}
                <ul
                  className={`space-y-2 text-white font-bold text-sm sm:text-base transition-all duration-500 overflow-hidden 
        ${isMobile
                      ? openSection === "accordion3"
                        ? "max-h-screen block"
                        : "max-h-0 hidden"
                      : "max-h-none block"
                    }`}
                >
                  {[
                    "Anand Dham Ashram",
                    "Bakkarwala Marg, Nangloi",
                    "Najafgarh Road, New Delhi 110041",
                    "+91 8826891955, 95899 38938",
                    "96859 38938, 7291986653",
                    "© All rights reserved"
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Row 2: Social Media and Apps */}
          <div className=" flex flex-col items-center sm:items-start md:flex-row gap-8 md:gap-8 lg:gap-16 md:pl-40">
            {/* Social Media Links */}
            <div className=" space-y-4 text-center sm:text-left hidden md:block">
              <h3 className="text-lg sm:text-xl font-bold text-yellow-200">
                FIND US ON
              </h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                  <Icon
                    key={index}
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-yellow-200 cursor-pointer border border-white rounded-full p-1.5 transition-colors"
                  />
                ))}
              </div>
            </div>

            {/* App Download */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-sm md:text-base lg:text-lg xl:text-lg font-bold text-white">
                GET THE VISHWA JAGRITI MISSION APP
              </h3>
              <div className="flex gap-4 justify-center sm:justify-start">
                <Image src={google} alt="Google Play" width={40} height={40} />
                <Image src={apple} alt="App Store" width={40} height={40} />
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:block space-y-4 text-center sm:text-left w-full sm:w-auto">
              <h3 className="text-lg font-bold text-white">
                Elements - Our Social Media App
              </h3>
              <div className="relative max-w-md mx-auto sm:mx-0">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full sm:w-72 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                />
                <button className="absolute right-0 top-0 h-full bg-red-700 px-8 sm:px-14 rounded-md text-white hover:bg-orange-500 transition-colors">
                  <IoSearch className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
