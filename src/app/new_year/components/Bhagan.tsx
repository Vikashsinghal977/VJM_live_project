"use client"
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import image from '../utils/pic1.png';
import Image from 'next/image';

const Bhajan = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="min-h-[400px] bg-[#fdf6e3] p-4 md:p-8 font-['Open_Sans']">
            {/* Main content section */}
            <div className="2xl:container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center">
                {/* Content section - Left */}
                <div className="flex flex-col justify-center w-full lg:w-1/2">
                    <div className="flex items-center mb-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-red-800 font-['Merriweather']">
                            Soulful Bhajan and Satsang
                        </h1>
                    </div>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione
                        reprehenderit eos voluptatem distinctio. Vel possimus blanditiis est dolores
                        eius hic voluptatem nemo At esse quas aut distinctio distinctio voluptatem
                        distinctio.
                    </p>
                </div>

                {/* Video section - Right */}
                <div className="w-full h-[300px] sm:w-[300px] sm:h-[375px] lg:h-[375px] bg-[#f8f5f0] shadow-lg overflow-hidden">
                    <div className="relative w-full h-full">
                        {!isPlaying ? (
                            <div className="relative h-full">
                                <Image
                                    src={image}
                                    alt="Video thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button 
                                        onClick={() => setIsPlaying(true)}
                                        className="p-3 rounded-full border-4 border-gray-300 hover:bg-white/50 transition-colors"
                                    >
                                        <Play className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/afFD-0TmIGg?autoplay=1"
                                title="Soulful Bhajan Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bhajan;