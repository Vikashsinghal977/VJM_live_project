import React from "react";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import OverviewImage from "../utils/OverviewImage.png"

export default function OverView() {
  return (
    <div className="">
      <div className="bg-[#f8f5f0]
              flex flex-col items-center self-center ">
        {/* First Section */}
        <div className="mx-auto px-4 md:px-10 2xl:px-16 gap-8 pt-8 flex flex-col md:flex-row w-full max-w-7xl self-center">
          {/* Left Content (Text Section) */}
          <div className="md:w-1/2 md:pr-5 md:mr-5">
            <h1 className="text-2xl md:text-3xl text-red-900 font-bold mb-4">
              Overview
            </h1>
            <p className="text-black text-base md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, doloremque? Perferendis tempora est, at minima
              repudiandae similique a id tenetur temporibus consectetur error
              ratione nesciunt, autem impedit, facere labore ipsam! Ipsam
              eveniet, illum mollitia omnis nam voluptatem fuga provident
              placeat, voluptatibus, facilis tempora aliquam reiciendis? Ipsam
              quod at distinctio iusto. Ipsam vitae maxime, cumque totam
              dignissimos porro omnis velit earum. Officia quos ullam
              consectetur laboriosam illo dolor saepe aperiam, quis dolore
              voluptate? Quisquam ducimus eaque velit facilis et saepe ea quo
              excepturi, aperiam, consequatur quam nobis officiis veritatis
              voluptate facere...
            </p>

            <div className="py-7 w-full  max-w-sm">
              <div className="flex justify-between items-center text-black border-green-600 border-2 px-2 py-1 font-bold text-base md:text-xl mb-4">
                <span>Benefits</span>
                <span className="text-lg font-bold">+</span>
              </div>
              <div className="flex justify-between items-center text-black border-green-600 border-2 px-2 py-1 font-bold text-base md:text-xl mb-4">
                <span>Program Schedule</span>
                <span className="text-lg font-bold">+</span>
              </div>
              <div className="flex justify-between items-center text-black border-green-600 border-2 px-2 py-1 text-base md:text-xl font-bold">
                <span>Enquire Now</span>
                <span className="text-lg font-bold">+</span>
              </div>
            </div>
          </div>

          {/* Right Content (Image Section) */}
          <div className="flex flex-col justify-center items-center mt-4 mb-6 md:mt-0">
            <div className="flex justify-center w-full">
              <Image
                src={OverviewImage}
                alt="Overview Image"
                width={500}
                height={500}
                className="" // Removed responsive classes to keep original styling
              />
            </div>

            <div className="my-6">
              <button className="bg-yellow-400 font-bold px-4 text-base md:text-xl py-1 rounded-md flex flex-row text-black">
                <IoPlayCircleOutline className="w-6 h-6 md:w-9 md:h-9 mr-1" />
                <h2 className="pt-1">Watch Glimeses</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
