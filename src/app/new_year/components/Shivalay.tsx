import React from 'react';
import pic1 from "../utils/shivalayPic.png";
import pic2 from "../utils/handPic.png";
import Image from 'next/image';

const Shivalay = () => {
    return (
        <div className="relative w-full lg:h-[400px] bg-[#b0dcf2]">
            {/* Main container */}
            <div className="relative lg:absolute inset-0 2xl:container 2xl:mx-auto">
                <div className="flex flex-col h-full">
                    {/*  Text Content */}
                    <div className="w-full px-4 py-4 lg:hidden bg-customBlue">
                        <h1 className="text-2xl font-bold mb-4 text-gray-900 font-serif">
                            Shivalay Prangan Me Divya
                            Shaubhagya Uday Prapti Path
                        </h1>
                        <p className="text-sm text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio.
                            Vel possimus blanditiis est dolores eius hic voluptatem nemo At esse quas aut distinctio distinctio.
                            Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio.
                        </p>
                    </div>

                 
                    <div className="hidden lg:flex lg:flex-row h-full">
                        {/* Left section */}
                        <div className="w-1/3 h-full relative">
                            <Image
                                src={pic1}
                                alt="Temple"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Middle section with text content */}
                        <div className="w-2/3 px-8 py-6 pr-32 bg-transparent">
                            <h1 className="text-4xl font-bold mb-4 text-gray-900 font-serif">
                                Shivalay Prangan Me Divya
                                Shaubhagya Uday Prapti Path
                            </h1>
                            <p className="text-base text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio.
                                Vel possimus blanditiis est dolores eius hic voluptatem nemo At esse quas aut distinctio distinctio.
                                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio.
                            </p>
                        </div>

                        {/* Right section with hand image */}
                        <div className="2xl:hidden absolute bottom-0 right-0 w-34 h-44">
                            <Image
                                src={pic2}
                                alt="Decorative"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Temple image for mobile */}
                    <div className="w-full h-[250px] relative lg:hidden">
                        <Image
                            src={pic1}
                            alt="Temple"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shivalay;