"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import OverviewImage from "../utils/OverviewImage.png"
import Image from 'next/image';

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);


  const slides = [
    { id: 1, image: OverviewImage, video: '/meditation-1.mp4' },
    { id: 2, image: OverviewImage, video: '/meditation-2.mp4' },
    { id: 3, image: OverviewImage, video: '/meditation-3.mp4' },
    { id: 4, image: OverviewImage, video: '/meditation-4.mp4' },
    { id: 5, image: OverviewImage, video: '/meditation-5.mp4' },
    { id: 6, image: OverviewImage, video: '/meditation-6.mp4' },
    { id: 7, image: OverviewImage, video: '/meditation-7.mp4' },
    { id: 8, image: OverviewImage, video: '/meditation-8.mp4' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === slides.length - slidesPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? slides.length - slidesPerView : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideWidth = `${100 / slidesPerView}%`;

  return (
    <div className="2xl:container 2xl:mx-auto relative w-full max-w-8xl bg-gray-100 mx-auto px-4 py-4">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` 
          }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="flex-shrink-0"
              style={{ width: slideWidth }}
            >
              <div className="p-2">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-full object-cover"
                    width={400}
                    height={320}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="p-3 rounded-full border-4 border-gray-300 hover:bg-white/50 transition-colors">
                      <Play className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 py-2 bg-orange-500 rounded-sm hover:bg-black/75 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 py-2 bg-orange-500 rounded-sm hover:bg-black/75 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: slides.length - (slidesPerView - 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-orange-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default VideoCarousel;