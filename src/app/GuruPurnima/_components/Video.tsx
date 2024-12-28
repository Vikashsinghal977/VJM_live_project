"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react"; // Import a play icon or use your own
import Thumbnail from "../utils/Purnima.png"; // Ensure the path is correct

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="h-[80vh] bg-[#f8f5f0]">
      {isPlaying ? (
        <div className="border border-gray-400 h-[75vh]">
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
          <div className="relative w-full h-[75vh] overflow-hidden">
            <Image
              src={Thumbnail} // Replace with your thumbnail image path
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              width={1280} // Provide a width that matches the video aspect ratio
              height={720} // Provide a height that matches the video aspect ratio
            />
            <div className="absolute inset-0 flex items-center justify-center">
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
