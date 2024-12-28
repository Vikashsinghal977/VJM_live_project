import React from 'react';
import image from '../utils/pic1.png';
import Image from 'next/image';

const Gift = () => {
    return (
        <div className='bg-[#fdf6e3] h-auto'> 
            {/* Text Section */}
            <div className="flex flex-col items-center mx-auto p-4 sm:p-8 sm:w-full md:w-2/3 ">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-4xl font-bold font-serif text-[#6b1f1f] mb-4 sm:mb-7">
                        Gifts / Prasadam to all participants from Maharajshri
                    </h1>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-gray-700 mb-4 container mx-auto px-8 md:px-20 max-w-6xl">
                        Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio. Vel possimus blanditiis est dolores eius hic voluptatem nemo At esse quas aut distinctio distinctio.
                    </p>
                </div>

                {/* Divider Line */}
                <span className="block w-1/2 sm:w-1/3 h-1 bg-[#b58900] my-4 sm:my-7"></span>

                {/* Images Section */}
                <div className="flex flex-row sm:flex-row items-center justify-center sm:space-x-8">
                    <Image
                        src={image}
                        alt="Book cover of 'Geetanjali'"
                        className="w-24 h-24 sm:w-32 sm:h-32 shadow-lg"
                    />
                    <span className="text-2xl sm:text-4xl font-bold text-gray-700">+</span>
                    <Image
                        src={image}
                        alt="Book cover of 'Geetanjali'"
                        className="w-24 h-24 sm:w-32 sm:h-32 shadow-lg"
                    />
                    <span className="text-2xl sm:text-4xl font-bold text-gray-700">+</span>
                    <Image
                        src={image}
                        alt="Book cover of 'Geetanjali'"
                        className="w-24 h-24 sm:w-32 sm:h-32 shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gift;
