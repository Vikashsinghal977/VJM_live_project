import React from 'react';
import Image from 'next/image';
import News from '../../../../../public/images/Newsletter-Image.png'

export default function InputEmail() {
    return (
        <div className="flex md:mt-10 flex-col md:flex-row justify-center md:gap-36 items-center px-4 mt-5">
            <div>
                <Image src={News} alt="" className="md:w-full w-56 max-w-xs md:max-w-md lg:max-w-lg" />
            </div>
            <div>
                <div className="md:text-start text-center  py-10 md:py-14">
                    <h1 className="text-xl md:text-2xl lg:text-3xl md:w-auto w-80 md:mx-0 mx-auto font-medium mb-4 text-orange-500">Get early access to the new episodes</h1>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-cinzel w-80 lg:w-full md:mx-0 mx-auto font-semibold  mb-6 text-orange-900">Subscribe for newsletter!</h1>

                    <div className="relative w-full max-w-md">

                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail address"
                            className="py-5 pl-5 md:pl-10 w-full text-xl border-2 border-black rounded-full focus:outline-none shadow-md shadow-slate-700" />
                        <button className="cursor-pointer absolute top-[5px] right-[6px] group overflow-hidden py-4 px-10 rounded-full border-orange-500">
                            <span className="font-bold text-white text-xl relative z-10 group-hover:text-orange-500 duration-500">GO</span>
                            <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 group-hover:translate-x-full h-full"></span>

                            <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-orange-500 duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
