"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react"; 
import Thumbnail from "../utils/Purnima.jpg";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="h-[80vh] bg-[#f8f5f0]">
         
         {/* video after condition  */}

      {isPlaying ? (
        <div className="border border-gray-400 h-[80vh]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/afFD-0TmIGg?autoplay=1&si=3IBj1j-vqy0t-yol"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div>
          <div className="relative w-full h-[80vh] overflow-hidden">
            <Image
              src={Thumbnail} 
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              width={1280} 
              height={720}
            />
            <div className="absolute inset-0 flex items-center justify-center">

              {/* button  */}

              <button
                className="p-3 rounded-full border-4 border-gray-300 hover:bg-white/50 transition-colors"
                onClick={handlePlayClick}
              >
                <Play className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}