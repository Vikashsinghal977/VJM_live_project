import React from 'react';
import Section14 from '../utils/Kanya atmanirbhar/Section 14 Image.jpg';
// import { Image } from 'lucide-react';
import Image from 'next/image';


export default function HelpinDonation() {
    return (
        <div className="helpindonation md:p-10">
            <div className="container w-11/12 md:w-10/12 px-10 md:px-0 flex flex-col lg:flex-row justify-between mx-auto lg:gap-6 gap-y-10">
                {/* Left Section */}
                <div className="w-full lg:w-5/12 px-3">
                    <hr className=' border border-orange-500 w-40 mb-2 mt-4' />
                    <h1 className="text-xl md:text-3xl md:text-left text-center text-black font-bold mt-4">
                        दान देने में हमारी मदद करें
                    </h1>
                    <h2 className="text-xl md:text-3xl md:text-left text-center text-red-900 font-extrabold mb-4 mt-2">
                        दान देना शुरू करें
                    </h2>
                    <div>
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border p-2 rounded-lg w-full md:w-1/2 shadow-md"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border p-2 rounded-lg w-full md:w-1/2 shadow-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <input
                                placeholder="Email Address"
                                type="text"
                                className="mb-4 border p-2 rounded-lg mt-4 shadow-md"
                            />
                            <input
                                placeholder="Write a message"
                                type="text"
                                className="mb-4 border p-2 h-32 rounded-lg shadow-md"
                            />
                            <button className="bg-orange-500 text-white w-full md:w-1/2 py-2 rounded-lg p-1">
                                SEND A MESSAGE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-7/12 mb-4 md:mb-0">
                    <Image src={Section14} alt="" className="w-full" />
                    <div className="bg-yellow-500 text-center p-6">
                        <a href="mailto:info@vishwajagrimission.org" className="md:text-lg text-center">
                            <span className="font-bold">Just mail us: </span>
                            info@vishwajagrimission.org
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
