import Image from "next/image";
import React from "react";
import Video11 from "../utils/Video Thumbnail.png";
import BgI from "../utils/Bg.png";

function Video() {
  return (
    <div
      className="relative h-[80vh] w-full bg-cover bg-center flex justify-center items-center p-4"
      style={{
        backgroundImage: `url(${BgI.src})`,
      }}
    >
      {/* Container for the video thumbnail */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-video">
        <Image
          src={Video11}
          alt="Video thumbnail"
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
}

export default Video;
