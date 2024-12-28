import React from "react";
import image from "../utils/yagna.png";
import Image from "next/image";

const Yagna = () => {
    return (
        <div className="bg-[#fbe5d3] ">
            
            <div className="2xl:mx-auto flex flex-col md:flex-row max-w-7xl">

                {/* Image Section */}
                <div className="w-full md:w-2/4 relative h-[250px] sm:h-[300px] md:h-auto order-2 md:order-1 bg-[#fbe5d3]">
                    <Image
                        src={image}
                        alt="Nav Prabhat Yagna"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-[#5a2c1f] p-6 sm:p-8 md:p-12 order-1 md:order-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif">
                        Nav Prabhat Yagna
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-sans max-w-xl">
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

export default Yagna;
