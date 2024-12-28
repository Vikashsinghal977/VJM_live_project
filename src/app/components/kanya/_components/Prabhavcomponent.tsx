import Image from "next/image";
import React from "react";

export default function Prabhavcomponent(props: any) {
    const { imgSrc, number, text } = props;

    return (
        <div className="impact-box mt-5 lg:ml-14 md:ml-0 ml-3 text-center sm:p-5 flex flex-col md:justify-center justify-evenly items-center sm:h-full">
            <Image
                src={imgSrc}
                alt=""
                className="m-auto lg:w-24 sm:w-20 w-10"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="100"
                data-aos-offset="0"
            />
            <h2
                className=" lg:text-3xl sm:text-2xl text-lg text-orange-400 font-bold m-2"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
            >
                {number}
            </h2>
            <h5
                className=" text-red-800 lg:text-xl sm:text-lg text-xs font-extrabold lg:w-8/12 mx-auto my-auto"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
            >
                {text}
            </h5>
            {/* <h5 className=' text-red-800 text-xl font-extrabold'>बालिकाएं </h5> */}
        </div>
    )
}
