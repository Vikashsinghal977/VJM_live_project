import React from 'react'
import Image from 'next/image';

export default function ImageTextSection({ imgSrc, title, description, reverse }: any) {
    return (
        <div
            className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-6 my-4 mx-auto flex justify-center md:w-10/12 w-full lg:px-0 md:px-16 px-10`}
        >
            {/* Image */}
            <Image
                src={imgSrc}
                alt={title}
                className="w-full lg:w-1/2 rounded-lg shadow-md object-fit hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-duration="1000"
            />

            {/* Text Section */}
            <div className="flex flex-col lg:w-1/2 w-full">
                {/* Title */}
                <h2 className="md:text-xl text-md  w-11/12 font-bold px-8 text-center py-2 bg-yellow-400 text-red-800 inline-block mx-auto md:mx-0" data-aos="fade-up" data-aos-duration="1000">
                    {title}
                </h2>
                {/* Description */}
                <p className="text-gray-700 mt-4 font-bold md:px-10 px-0 md:text-lg text-sm text-justify lg:text-left" data-aos="fade-up" data-aos-duration="1000">
                    {description}
                </p>
            </div>
        </div>
    )
}
