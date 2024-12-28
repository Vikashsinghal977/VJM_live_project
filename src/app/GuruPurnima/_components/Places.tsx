"use client"
import { useRef, useEffect, useState } from "react";

const Places = () => {
  const scrollerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    scrollerRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    scrollerRef.current.scrollLeft += 200;
  };

  const renderScroller = () => {
    const places = [
      { name: "Somnath", location: "Gujrat", image: "/images/somnath.jpg" },
      { name: "Nageshwar", location: "Gujrat", image: "/images/nageshwar.jpg" },
      { name: "Bheemashankar", location: "Pune", image: "/images/bheemashankar.jpg" },
      { name: "Triyambkeshwar", location: "Nasik", image: "/images/triyambkeshwar.jpg" },
      { name: "Ghrashneshwar", location: "Aurangabad", image: "/images/ghrashneshwar.jpg" },
    ];

    return (
      <div className={`
        flex items-center justify-center
        ${isMobile ? 'w-full px-4' : 'w-[900px] left-[200px]'}
        absolute bottom-[-45px] z-10
      `} style={{ height: "60px" }}>
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className={`
            absolute left-[0px] bg-white rounded-full w-10 h-10
            flex items-center justify-center z-10
            ${isMobile ? 'left-1' : 'left-[0px]'}
          `}
          style={{
            transform: "translateY(-15px)",
          }}
        >
          <img
            src="/icons/left-arrow.png" 
            alt="Left Arrow"
            className="w-9 h-9"
          />
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollerRef}
          className="scroller flex overflow-x-auto space-x-8 mx-5 scrollbar-hide"
          style={{
            width: isMobile ? "calc(100% - 80px)" : "calc(100% - 120px)",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            paddingLeft: isMobile ? "40px" : "60px",
            paddingRight: isMobile ? "40px" : "60px",
          }}
        >
          {places.map((place, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0"
              style={{ 
                scrollSnapAlign: "start",
                width: isMobile ? "28vw" : "128px"
              }}
            >
              <div className={`
                rounded-full border-4 border-purple-600 overflow-hidden
                ${isMobile ? 'w-16 h-16' : 'w-24 h-24'}
              `}>
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`font-bold mt-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                {place.name}
              </h3>
              <p className={`text-gray-500 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
                {place.location}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`
            absolute bg-white rounded-full w-10 h-10
            flex items-center justify-center z-10
            ${isMobile ? 'right-1' : 'right-[0px]'}
          `}
          style={{
            transform: "translateY(-15px)",
          }}
        >
          <img
            src="/icons/right-arrow.png" 
            alt="Right Arrow"
            className="w-9 h-9"
          />
        </button>
      </div>
    );
  };

  return (
    <main
      className="bg-cover bg-center w-full h-screen relative"
      style={{
        backgroundImage: "url('./images/places.jpeg')",
      }}
    >
      <div className="text-center pt-10 px-4">
        <h3 className={`font-bold pb-3 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
          Shiv Vardhaan Tirth
        </h3>
        <p className={`text-bold ${isMobile ? 'text-lg px-2' : 'text-2xl px-[95px]'}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quae
          dolore odit ea deserunt ipsam error minima voluptate. Eveniet pariatur
          ut, natus maxime dignissimos consequuntur quas illo error molestiae
          asperiores!
        </p>
      </div>

      {renderScroller()}
    </main>
  );
};

export default Places;