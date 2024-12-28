import React from 'react'
import Image from "next/image";
import Location from "../../../../../public/images/Icons/Location-Icon.png";
import Sec16 from "../../../../../public/images/Section 9 Image.jpg";
export default function AnandDhamSec() {
    return (
        <section className="relative w-full mt-5 overflow-hidden">
            <div className=" hidden md:block lg:block">
                <Image className="w-screen lg:w-screen h-auto " src={Sec16} alt="" />
                <div className="absolute top-0 left-0 w-full px-5">
                    <div className="container mx-auto">
                        <div className=" text-center md:w-[450px] lg:mt-20 mt-4 ml-auto">
                            <h1 className=" font-cinzel font-semibold lg:text-3xl text-2xl text-purple-900">
                                anand dham ashram,{" "}
                                <span className=" font-sans md:text-base text-sm text-black">
                                    New Delhi
                                </span>
                            </h1>
                            <p className=" text-lg font-montserrat lg:w-auto w-80 text-center font-medium mx-auto lg:mt-2">
                                It is a place to dissolve the boundaries between man and the
                                divine. Not merely His abode, the temple of `God`. A pilgrimage in
                                Anand Dham,kailash Shikhar and Navgrah-Shani temple have been
                                beautifully constracted
                            </p>
                            <Image
                                className=" mx-auto lg:w-24 w-14 mt-3 lg:mt-2"
                                src={Location}
                                alt=""
                            />
                        </div>
                        <div className=" flex md:justify-center justify-evenly gap-2 lg:gap-10 m-2 mt-20 lg:mt-28 xl:mt-40 md:mt-12  font-cinzel font-semibold text-white">
                            <button className=" bg-gradient-to-r from-yellow-600 to-yellow-300 p-1 lg:px-4 lg:text-xl text-sm px-1 rounded-md">
                                time to meet maharajshri
                            </button>
                            <button className=" bg-gradient-to-r from-yellow-600 to-yellow-300 lg:text-xl text-sm  lg:p-4 px-1 rounded-md">
                                explore more center
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="lg:hidden md:hidden block px-5">
                    <div className='text-center'>
                        <h1 className=" font-cinzel font-semibold w-full mx-auto lg:text-3xl text-xl text-purple-900">
                            anand dham ashram{" "}
                        </h1>
                        <span className="md:text-base text-sm text-black">
                            New delhi
                        </span>
                        <p className="text-base text-center font-montserrat mx-auto my-5 lg:mt-5">
                            It is a place to dissolve the boundaries between man and the
                            divine. Not merely His abode, the temple of `God`. A pilgrimage in
                            Anand Dham,kailash Shikhar and Navgrah-Shani temple have been
                            beautifully constracted
                        </p>
                        <Image
                            className="mx-auto lg:w-24 w-14 my-3 lg:mt-2 rounded-lg"
                            src={Location}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image className="w-screen lg:w-screen h-auto rounded-lg md:rounded-none " src={Sec16} alt="" />
                    </div>
                    <div className=" flex  justify-evenly gap-2 m-2   font-cinzel font-semibold text-white">
                        <button className=" bg-gradient-to-r from-yellow-600 to-yellow-300 p-1 lg:text-xl text-sm px-1 rounded-md">
                            time to meet maharajshri
                        </button>
                        <button className=" bg-gradient-to-r from-yellow-600 to-yellow-300 lg:text-xl text-sm  lg:p-4 px-1 rounded-md">
                            explore more center
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
