"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Agni from "../utils/Agni2.png";
import Solar from "../utils/Solar2.png";
import below2 from "../utils/below2.png";

const Science = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/VIDEO_ID1",
    "https://www.youtube.com/embed/VIDEO_ID2",
    "https://www.youtube.com/embed/VIDEO_ID3",
  ];

  // Adjust the scroll handler to properly detect the current video based on scroll position
  const handleScroll = (e: any) => {
    const index = Math.round(e.target.scrollLeft / e.target.clientWidth);
    setActiveIndex(index);
  };

  return (
    <>
      <style jsx global>{`
  body {
    font-family: "Roboto", sans-serif;
  }
  .title {
    font-family: "Merriweather", serif;
  }
  .scroll-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
    scrollbar-width: none; /* For Firefox */
  }
  .scroll-container::-webkit-scrollbar {
    display: none; /* For Webkit browsers (Chrome, Safari, etc.) */
  }
  .scroll-item {
    flex: none;
    scroll-snap-align: start;
    width: 100%;
  }
  .scroll-dots {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .scroll-dot {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }
  .scroll-dot.active {
    background-color: #333;
  }
`}</style>


      <div className="p-4 md:p-8 bg-yellow-200 md:px-5">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg md:text-2xl font-semibold px-4">
              <i className="fas fa-quote-left"></i>
              "गीता के अठारहवें अध्याय के पांचवे श्लोक में लिखा है कि यज्ञ, दान और
              तप- ये तीनों मनुष्यों को पावन करते हैं, इसलिए हर एक व्यक्ति को अपने
              जीवन में इन चीजों को अवश्य अपनाना चाहिए।"
              <i className="fas fa-quote-right"></i>
            </p>
          </div>

          <div className="text-center mb-4">
            <div className="flex flex-col md:flex-row justify-center items-center mb-4">
              <Image
                src={Agni}
                alt="Agni"
                className="w-32 hidden md:block md:w-auto mb-4 md:mb-0 md:mr-32"
              />

              <h1 className="title text-3xl md:text-5xl font-bold text-brown-800 mb-4 md:mb-0">
                The Science of Yagna
              </h1>

              <Image
                src={Solar}
                alt="Solar"
                className="w-32 hidden md:block md:w-auto mt-4 md:mt-0 md:ml-32"
              />
            </div>

            <div className="flex justify-center md:mt-[-24px] mb-2">
              <Image
                src={below2}
                alt="Below Image"
                className="w-2/3 md:w-1/3 ml-4"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="w-full md:w-1/2 p-4 md:pt-16">
              <p className="text-base md:text-lg">
                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
                qui ratione reprehenderit eos voluptatem distinctio. Vel possimus
                blanditiis est dolores eius hic voluptatem nemo At esse quas aut
                distinctio distinctio.voluptatem distinctio. autem qui ratione
                reprehenderit eos voluptatem distinctio.
              </p>
              <button className="w-full md:w-auto mt-8 px-6 py-2 bg-yellow-400 text-black hover:bg-yellow-600 flex items-center justify-center">
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <div
                className="scroll-container rounded-lg"
                onScroll={handleScroll}
                style={{ scrollBehavior: "smooth" }}
              >
                {videos.map((video, index) => (
                  <div className="scroll-item" key={index}>
                    <iframe
                      width="100%"
                      height="315"
                      src={video}
                      title={`YouTube video player ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>

              <div className="scroll-dots">
                {videos.map((_, index) => (
                  <div
                    key={index}
                    className={`scroll-dot ${index === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Science;
