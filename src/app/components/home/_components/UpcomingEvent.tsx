'use client';
import React, { useState } from 'react';
import Sec1 from "../../../../../public/images/Section 1 1 Image.jpg";
import Sec2 from "../../../../../public/images/Section 1 2 Image.jpg";
import Sec3 from "../../../../../public/images/Section 1 3 Image.jpg";
import Design from "../../../../../public/images/Black Design.png";
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';



// Event Static Data
const events = [
  {
    title: "BHAKTI SATSANG - BHOPAL",
    type: "Satsang",
    date: "15, Feb, 2023",
    location: "Bhopal",
    image: Sec1,
    category: "SATSANG",
  },
  {
    title: "CHANDRAYAN TAP - MANALI",
    type: "Meditation",
    date: "19, May, 2023",
    location: "Manali",
    image: Sec2,
    category: "MEDITATION",
  },
  {
    title: "GANESH LAXMI YAGYA - DELHI",
    type: "Yugrishi",
    date: "23, May, 2023",
    location: "Delhi",
    image: Sec3,
    category: "YUGRISHI ANUSTHAN",
  },
  // Duplicate events to maintain original array length
  {
    title: "BHAKTI SATSANG - BHOPAL",
    type: "Satsang",
    date: "15, Feb, 2023",
    location: "Bhopal",
    image: Sec1,
    category: "SATSANG",
  },
  {
    title: "CHANDRAYAN TAP - MANALI",
    type: "Meditation",
    date: "19, May, 2023",
    location: "Manali",
    image: Sec2,
    category: "MEDITATION",
  },
  {
    title: "GANESH LAXMI YAGYA - DELHI",
    type: "Yugrishi",
    date: "23, May, 2023",
    location: "Delhi",
    image: Sec3,
    category: "YUGRISHI ANUSTHAN",
  },
  {
    title: "GANESH LAXMI YAGYA - DELHI",
    type: "Monthly",
    date: "23, May, 2023",
    location: "Delhi",
    image: Sec3,
    category: "MONTHLY",
  },
  {
    title: "GANESH LAXMI YAGYA - DELHI",
    type: "Monthly",
    date: "23, May, 2023",
    location: "Delhi",
    image: Sec3,
    category: "MONTHLY",
  },
  {
    title: "GANESH LAXMI YAGYA - DELHI",
    type: "Monthly",
    date: "23, May, 2023",
    location: "Delhi",
    image: Sec3,
    category: "MONTHLY",
  }
];

export default function UpcomingEvent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredEvents =
    selectedFilter === "ALL"
      ? events
      : events.filter((event) => event.category === selectedFilter);

  // Carousel responsive value is:
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1
    }
  };


  // Event Single Card UI
  const EventCard = ({ event }: { event: any }) => (
    <div className="w-full px-1">
      <div className="bg-white shadow-md border-4 p-2 lg:h-[340px] rounded-md">
        <Image
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="mt-4 font-cinzel font-bold text-sm md:text-xl text-orange-700">
          {event.title}
        </h2>
        <div className="flex gap-1 justify-between items-center mt-3 text-sm md:text-lg">
          <button className="cursor-pointer relative group overflow-hidden border-2 p-1 rounded-md border-orange-500">
            <span className="font-bold text-white md:text-base text-sm  relative z-10 group-hover:text-orange-500 duration-500">
              {event.type}
            </span>
            <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 group-hover:translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-orange-500 duration-500 group-hover:translate-y-full h-full"></span>
          </button>
          <p className='flex items-center font-montserrat text-sm'>
            <FaCalendarAlt /> {event.date}
          </p>
          <p className='flex font-montserrat items-center'>
            <IoLocation className='text-sm' /> {event.location}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto mt-24">
      <div className="responsive-events mt-20 md:mt-28 lg:mt-28 lg:mx-12 m-0 px-4" id="Events">
        {/* Title Section */}
        <div className="text-center font-cinzel font-semibold text-2xl md:text-3xl lg:text-4xl text-orange-600">
          <h1>UPCOMING EVENTS</h1>
          <Image
            className="mx-auto w-24 md:w-32 mt-4 md:mt-6"
            src={Design}
            alt="Design Element"
          />
        </div>

        {/* Description Section */}
        <div className="text-center font-semibold font-montserrat text-sm md:text-base lg:text-lg xl:text-xl my-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            hic excepturi magnam fugit labore. Dolor, animi. Labore, nam
            dolorum. Molestiae
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 justify-start md:justify-center font-cinzel font-bold mt-8 overflow-x-auto scrollbar-hide">
          {["ALL", "MONTHLY", "SATSANG", "MEDITATION", "YUGRISHI ANUSTHAN"].map(
            (filter) => (
              <button
                key={filter}
                className={`cursor-pointer py-2 px-3 sm:py-2 md:px-4 rounded-md whitespace-nowrap ${selectedFilter === filter
                  ? "bg-orange-900 text-white text-sm lg:text-lg md:text-base"
                  : "bg-orange-600 text-white text-sm lg:text-lg md:text-base"
                  }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Carousel */}
        <Carousel responsive={responsive}
          showDots={true}>
          {filteredEvents?.map((event, index) => (
            <div key={index} className="md:snap-start flex-shrink-0 w-full my-10">
              <EventCard event={event} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
