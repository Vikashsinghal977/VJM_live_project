"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Gift from "../utils/Gift.png";
import Gift2 from "../utils/Gift2.png";
import below from "../utils/below2.png";
import Laminated from "../utils/Laminated.png";
import Suman from "../utils/Sumeri.png";
import Gold from "../utils/Gold.png";
import Vardan from "../utils/Vardan.png";

const Mahayagya = () => {
  return (
    <>
      <Head>
        <title>Maha Yagya Gifts/Souvenir</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container mx-auto text-center py-4 md:py-10">
        <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center justify-center md:px-5 lg:px-10">
          <Image
            src={Gift}
            alt="Description of the image"
            className="w-16 hidden md:block h-24 md:w-20 md:h-28 lg:w-auto mb-4 md:mb-0 md:ml-8 lg:ml-32"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-red-900 font-extrabold my-4 md:my-0">
            Maha Yagya Gifts/Souvenir
          </h1>
          <Image
            src={Gift2}
            alt="Description of the image"
            className="w-16 hidden md:block h-24 md:w-20 md:h-28 lg:w-auto mb-4 md:mb-0 md:mr-8 lg:mr-32"
          />
        </div>

        <div className="flex justify-center mt-2 md:mt-[-24px] mb-2">
          <Image
            src={below}
            alt="Description of the new image"
            className="w-5/6 md:w-2/3 lg:w-1/3 mx-4"
          />
        </div>

        <p className="text-black font-bold mb-8 py-3 px-4 md:px-0">
          Those who participate in this Maha Yagna shall receive a Shri Yantra
          and Sumeru <br className="hidden md:block" /> Yantra sanctified in the Holy presence of Param Pujya
          Maharajshri.
        </p>

        <div className="flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-20 space-y-8 md:space-y-0 px-4 md:px-8">
          <div className="text-center">
            <div className="relative w-[150px] h-[150px] mx-auto mb-2">
              <Image
                src={Laminated}
                alt="Laminated"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-brown-800 font-bold">Laminated Shri Yantra</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet.
              <br />
              Qui distinctio porro in dolores
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-[150px] h-[150px] mx-auto mb-2">
              <Image
                src={Suman}
                alt="Sumeru Shri Yantra (Sphatik)"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-brown-800 font-bold">
              Sumeru Shri Yantra (Sphatik)
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet.
              <br />
              Qui distinctio porro in dolores
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-[150px] h-[150px] mx-auto mb-2">
              <Image
                src={Gold}
                alt="Gold Plated Silver Shri Yantra"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-brown-800 font-bold">
              Gold Plated Silver Shri Yantra
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet.
              <br />
              Qui distinctio porro in dolores
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-[150px] h-[150px] mx-auto mb-2">
              <Image
                src={Vardan}
                alt="Vardaan Siddhi Yantra"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-brown-800 font-bold">Vardaan Siddhi Yantra</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet.
              <br />
              Qui distinctio porro in dolores
            </p>
          </div>
        </div>
      </div>

      {/* <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}</style> */}
    </>
  );
};

export default Mahayagya;
