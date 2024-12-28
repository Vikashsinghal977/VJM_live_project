"use client";

import Image from "next/image";
import { useState } from "react";
import Join from "../utils/Join-app-Bg.png";
import Maharaj from "../utils/Maharaj.png";
import google from "../utils/Google Play.png";
import Apple from "../utils/App store.png";
import Laptop from "../utils/Laptop Mobile.png";
import Footer from "../utils/Footer Rectangle.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${Join.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Main content section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between w-full pt-6 lg:pt-10 gap-8">
        {/* Left side content */}
        <div className="text-center lg:text-left lg:pl-5">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-orange-600" style={{ fontFamily: "Didot" }}>
            JOIN
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-black" style={{ fontFamily: "Serif" }}>
            THROUGH
          </h2>
          <h1 className="text-4xl lg:text-5xl lg:pl-4 font-bold text-orange-600" style={{ fontFamily: "Didot" }}>
            APP
          </h1>

          {/* App download section */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-8 gap-4">
            <Image
              src={Maharaj}
              alt="Sudhanshu Ji Maharaj"
              width={100}
              height={100}
              className="w-20 lg:w-24"
            />
            <div>
              <h3 className="text-lg lg:text-xl text-gray-500 font-bold">Sudhanshu Ji Maharaj App</h3>
              <div className="flex mt-2 gap-2">
                <Image
                  src={google}
                  alt="Google Play"
                  width={120}
                  height={50}
                  className="w-28 lg:w-32"
                />
                <Image
                  src={Apple}
                  alt="App Store"
                  width={120}
                  height={50}
                  className="w-28 lg:w-32"
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
            height={600}
            className="w-full max-w-lg lg:max-w-xl"
          />
        </div>
      </div>

      {/* Information box */}
      <div className="mt-8 p-4 bg-white rounded-xl shadow-xl text-center w-full md:w-4/5 lg:w-3/5 mx-4">
        <p className="text-sm lg:text-lg">
          After registration, kindly share your details on the given contact number with photographs of persons who are joining{" "}
          <span className="font-bold">Maha Shivratri</span> programs online.
        </p>
        <p className="mt-2 font-bold text-sm lg:text-base">
          Kindly Contact: (+91) 9589938938, 9312272625, 9312284390, 8826891955
        </p>
      </div>

      {/* Registration form */}
      <form onSubmit={handleSubmit} className="container mx-auto mt-6 flex flex-col md:flex-col items-center md:px-5 lg:px-10">
        <div className="flex flex-col md:flex-col  items-center justify-center">
          <h3 className="text-xl sm:text-lg font-bold text-black">Register Now</h3>
          <div className="flex flex-col sm:flex-row w-full md:w-auto">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full md:w-auto text-center"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full md:w-auto text-center"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full md:w-auto text-center"
            />
            <button
              type="submit"
              className="bg-red-900 text-white font-semibold py-3 px-6 rounded-full w-full sm:text-sm md:w-auto"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>

      {/* Footer image */}
      <div className="w-screen relative ml-[-50vw] mr-[-50vw] mt-16 lg:mt-28">
        {/* Uncomment if you want to show footer */}
        {/* <Image
          src={Footer}
          alt="Footer decoration"
          width={1920}
          height={600}
          className="w-full h-auto border-t-8 border-gray-500"
        /> */}
      </div>
    </div>
  );
};

export default Contact;
