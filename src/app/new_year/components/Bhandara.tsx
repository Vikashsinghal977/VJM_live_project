import React from "react";
import image from "../utils/bhandara_pic.png";
import Image from "next/image";

const Bhandara = () => {
    return (
        <div className="bg-customGray min-h-[400px] sm:min-h-0 sm:max-h-[60vh] 2xl:h-auto">
            <div className="flex flex-col 2xl:container mx-auto sm:flex-row items-start sm:items-start justify-between">
                {/* Image Section */}
                <div className="flex-shrink-0 sm:w-1/2 w-full h-[250px] sm:h-[400px] 2xl:h-[500px] order-2 sm:order-1">
                    <Image 
                        src={image} 
                        alt="Bhandara Event" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="sm:w-1/2 w-full text-left text-[#5a2c1f] px-4 sm:px-0 sm:pl-10 py-6 sm:py-12 order-1 sm:order-2">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-5 font-serif sm:w-10/12 w-full">
                        Bhandara 
                        as part of food feeding 
                    </h1>
                    <p className="text-sm sm:text-base leading-5 sm:leading-6 mb-6 sm:mb-4 w-full sm:w-10/12 font-sans">
                        Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione
                        reprehenderit eos voluptatem distinctio. Vel possimus blanditiis est dolores eius hic
                        voluptatem nemo. At esse quas aut distinctio distinctio. Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione
                        reprehenderit eos voluptatem distinctio. Vel possimus blanditiis est dolores eius hic
                        voluptatem nemo. At esse quas aut distinctio distinctio.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bhandara;