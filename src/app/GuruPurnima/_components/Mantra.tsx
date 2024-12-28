import React from 'react';
import Purnima from "../utils/Purnima.png";

export default function Mantra() {
  return (
    <div
      className=" min-h-[60vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Purnima.src})`,
      }}
    >
      <div className=" flex justify-end lg:justify-end items-center h-full lg:mr-12 px-4 lg:px-0">
        <div className='flex container mx-auto lg:justify-end'>
        <div className="flex flex-col p-4 lg:p-6 text-white w-full lg:max-w-xl">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-center text-red-900">
            Guru Mantra Siddhi Sadhna
          </h1>
          <p className="text-lg lg:text-xl text-white mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat incidunt cum vel facere
            excepturi, inventore veritatis? Error totam aliquid mollitia ratione aperiam quisquam fuga, facere dolore
            .
          </p>
          <p className="text-lg lg:text-xl text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat incidunt cum vel facere
            excepturi, inventore veritatis? Error totam aliquid mollitia ratione aperiam quisquam fuga, facere dolore
            ipsum quae perspiciatis.
          </p>
          <div className="flex justify-center lg:justify-end mt-4">
            <button className="bg-yellow-400 w-32 text-black text-lg lg:text-xl font-bold py-1">
              Register
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}