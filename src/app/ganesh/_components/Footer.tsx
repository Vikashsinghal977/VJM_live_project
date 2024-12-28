import React from "react";
import Image from "next/image";
import Footer2 from "../utils/Footer_Bg_Image.png"
import Goo from "../utils/google.png"
import App from "../utils/Apple.png"
import foo from "../utils/Footer Design.png"

import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  PlayCircle,
  Apple,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#3b0a02]  text-black py-8 px-4 sm:px-8 md:px-16 footer-with-borders">
      <div className="relative max-w-7xl mx-auto">
        {/* Row 1 */}
        <div className="pl-0 md:pl-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo and Heading */}
          <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
            <div className="w-36 md:w-48 pt-4 md:pt-6">
              <img
                src="https://www.vishwajagritimission.org/wp-content/uploads/2018/01/VJM-new-logo.png"
                alt="VJM Logo"
                className="w-full"
              />
            </div>
            <div className="text-center md:text-left pt-4 md:pt-10">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-200" style={{fontFamily:"Times New Roman"}}>
                VISHWA JAGRITI MISSION
              </h1>
              <p className="text-white font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus incidunt nulla minus, explicabo non totam excepturi.
                At!
              </p>
            </div>
          </div>

          {/* Modified Responsive Gallery Section */}
          <div className="hidden justify-center md:block">
            <div className="w-full ml-12 max-w-sm">
              {" "}
              <div>
                <Image src={Footer2} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-0 md:pl-12">
          {/* Communication Section */}
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-4 mb-6">
              <h3 className="text-lg font-bold mb-3 text-yellow-200">
                FIND US ON
              </h3>
              <div className="flex justify-center md:justify-start gap-3">
                <Facebook className="w-8 h-8 text-white hover:text-blue-500 cursor-pointer border border-white
                border-r-2 rounded-full p-1" />
                <Instagram className="w-8 h-8 text-white hover:text-pink-500 cursor-pointer border border-white
                border-r-2 rounded-full p-1" />
                <Youtube className="w-8 h-8 text-white hover:text-red-500 cursor-pointer border border-white
                border-r-2 rounded-full p-1" />
                <Twitter className="w-8 h-8 p-1 text-white hover:text-blue-400 cursor-pointer border border-white
                border-r-2 rounded-full" />
              </div>
            </div>
            <div className="mb-3">
              <h2 className="text-lg font-bold">
                <span className="text-white">
                  GET THE SUDHANSU JI
                  <br />
                  MAHARAJ APP
                </span>
              </h2>
            </div>
            <div className="flex justify-center md:justify-start gap-2">
              <Image
                src={Goo}
                alt="google.png"
                width={45}
                height={45}
                className="mx-0"
              />
              <Image
                src={App}
                alt="Apple.png"
                width={45}
                height={45}
                className="ml-2"
              />
            </div>
            <p className="mt-6 font-bold text-xl text-yellow-200 ">
              100% Secure Payment
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col lg:flex-row ml-0 md:ml-20">
            <div className="flex flex-col md:flex-row items-start">
              <div className="p-4 md:p-6 bg-[#3b0a02] rounded-lg shadow-md md:mr-4 w-full md:w-max">
                <h3 className="text-lg text-center md:text-left font-bold mb-3 text-yellow-200" style={{fontFamily:"Times New Roman"}}>
                  QUICK LINKS
                </h3>
                <ul className="space-y-1 text-white font-bold text-center md:text-left text-sm">
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Vision/Mission
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Join the team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="hidden lg:block">
                <Image
                  src={foo}
                  alt="Footer Design"
                  className="pt-7 md:w-auto max-w-xs"
                />
              </div>
            </div>

            {/* Get Involved */}
            <div className="flex flex-col md:flex-row items-start mt-8 md:mt-0">
              {/* Get Involved Section */}
              <div className="p-4 md:p-6 bg-[#3b0a02] rounded-lg shadow-md md:mr-4 w-full md:w-max">
                <h3 className="text-lg font-bold mb-3 text-center md:text-left text-yellow-200" style={{fontFamily:"Times New Roman"}}>
                  GET INVOLVED
                </h3>
                <ul className="space-y-1 text-white font-bold text-center md:text-left text-sm">
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Sponsor a Girl
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Feed Children
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Bring Books for Children
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Lets Make them Skillful
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Mid Day Meal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Kausala Vikas Yojana
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Donate for library
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Volunteer with Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Donate Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Image Section for Get Involved */}
              <div className="hidden lg:block">
                <Image
                  src={foo}
                  alt="Footer Design"
                  className="pt-7 md:w-auto max-w-xs"
                />
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col md:flex-row items-start mt-8 md:mt-0">
              <div className="p-4 md:p-6 bg-[#3b0a02] rounded-lg shadow-md md:mr-4 w-full md:w-max">
                <h3 className="text-lg font-bold mb-3 text-center md:text-left text-yellow-200" style={{fontFamily:"Times New Roman"}}>
                  CONTACT US
                </h3>
                <ul className="space-y-1 text-white font-bold text-center md:text-left text-sm">
                  <li>Anand Dham Ashram</li>
                  <li>Bakkarwala Marg, Nangloi</li>
                  <li>Najafgarh Road, New Delhi 110041</li>
                  <li>
                    <br />
                    +91 8826891955, 95899 38938
                  </li>
                  <li className="pl-5">96859 38938, 7291986653</li>
                  <li>
                    <br />© All rights reserved
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


