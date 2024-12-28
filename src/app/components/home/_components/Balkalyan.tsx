'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Sec6 from "../../../../../public/images/Section 6 1 Image.jpg";
import Sec7 from "../../../../../public/images/Section 6 2Image.jpg";
import Sec8 from "../../../../../public/images/Section 6 3 Image.jpg";
import Sec9 from "../../../../../public/images/Section 7 1 Image.jpg";
import Sec10 from "../../../../../public/images/Section 7 2Image.jpg";
import Sec11 from "../../../../../public/images/Section 7 3 Image.jpg";
import Sec12 from "../../../../../public/images/Home page BG.png";
import Sec13 from "../../../../../public/images/Design.png";
import Sec14 from "../../../../../public/images/Section 8 image.jpg";
import Sec15 from "../../../../../public/images/Section 8 1 image.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Balkalyan() {
    // State to toggle between expanded and collapsed content
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle content expansion
    const toggleContent = () => setIsExpanded(!isExpanded);

    const slider = useRef<Slider | null>(null);

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
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,

        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    const cardData = [
        { img: Sec9, title: "Vridh Ashram" },
        { img: Sec10, title: "Health Care" },
        { img: Sec11, title: "Gau Seva" },
        { img: Sec9, title: "Vridh Ashram" },
        { img: Sec10, title: "Health Care" },
        { img: Sec11, title: "Gau Seva" },
        { img: Sec9, title: "Vridh Ashram" },
        { img: Sec10, title: "Health Care" },
        { img: Sec11, title: "Gau Seva" },
        { img: Sec9, title: "Vridh Ashram" },
        { img: Sec10, title: "Health Care" },
        { img: Sec11, title: "Gau Seva" },
    ];
    const cardsData1 = [
        {
            id: 1,
            image: Sec14,
            title: "Dharam Kosha",
            description:
                "When we experience a pure inner impulse caused by a higher purpose.",
            buttonText: "Explore",
        },
        {
            id: 2,
            image: Sec15,
            title: "Gyan Mandir",
            description:
                "A place where knowledge and spirituality together harmoniously.",
            buttonText: "Explore",
        },
        {
            id: 3,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 4,
            image: Sec14,
            title: "Dharam Kosha",
            description:
                "When we experience a pure inner impulse caused by a higher purpose.",
            buttonText: "Explore",
        },
        {
            id: 5,
            image: Sec15,
            title: "Gyan Mandir",
            description:
                "A place where knowledge and spirituality together harmoniously.",
            buttonText: "Explore",
        },
        {
            id: 6,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 7,
            image: Sec14,
            title: "Dharam Kosha",
            description:
                "When we experience a pure inner impulse caused by a higher purpose.",
            buttonText: "Explore",
        },
        {
            id: 8,
            image: Sec15,
            title: "Gyan Mandir",
            description:
                "A place where knowledge and spirituality together harmoniously.",
            buttonText: "Explore",
        },
        {
            id: 9,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 10,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 11,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 12,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 13,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 14,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 15,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },
        {
            id: 16,
            image: Sec14,
            title: "Seva Bhavan",
            description:
                "Dedicated to selfless service for the betterment of humanity.",
            buttonText: "Explore",
        },

    ];

    return (
        <section className=" balkaniya relative container mx-auto overflow-hidden mt-0 md:mt-2">
            <div className="min-h-auto ">
                <Image className="h-[3330px]  md:h-[3650px] lg:h-[2860px] xl:h-[2500px] sm:h-[3025px] w-screen" src={Sec12} alt="" />
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full px-5">
                    {/* Section One */}
                    <div className="mx-auto md:mx-24 m-8 lg:m-12">
                        <h1 className="text-center font-cinzel  text-lg md:text-4xl font-semibold text-orange-800">
                            SOCIAL
                        </h1>
                        <h1 className="text-center font-northwell text-3xl md:text-7xl font-normal text-orange-300">
                            Initiatives
                        </h1>
                        <div className='container font-montserrat mx-auto'>
                            <p
                                className={`w-full text-justify mt-5 text-base lg:text-lg ${isExpanded ? "h-auto" : "h-24 overflow-hidden"
                                    }`}
                            >
                                {isExpanded ? (
                                    <>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit voluptatum doloremque. Repellat laborum commodi quod alias voluptatum eos, omnis quidem assumenda aliquam nam minima maxime molestiae perspiciatis harum laudantium ducimus, deleniti ab quisquam natus ad, quibusdam provident incidunt consequuntur odio! Fugit molestiae voluptatum quos blanditiis, quod quas provident tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit voluptatum doloremque. Repellat laborum commodi quod alias voluptatum eos, omnis quidem assumenda aliquam nam minima maxime molestiae perspiciatis harum laudantium ducimus, deleniti ab quisquam natus ad, quibusdam provident incidunt consequuntur odio! Fugit molestiae voluptatum quos blanditiis, quod quas provident tempora</span>
                                        <div className="text-center mt-4">
                                            <button className="cursor-pointer relative group  bg-orange-500 overflow-hidden border-2  px-2 lg:px-10 py-2 md:px-8 md:py-2 hover:bg-white rounded-md border-orange-500">
                                                <span className="font-bold text-white text-base lg:text-xl relative z-10 group-hover:text-orange-500 duration-500">
                                                    Read More
                                                </span>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit voluptatum doloremque. Repellat laborum commodi quod alias voluptatum eos Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit voluptatum doloremque. Repellat laborum commodi quod alias voluptatum eos "
                                )}
                            </p>

                            {/* Plus/Minus Button */}
                            <button
                                onClick={toggleContent}
                                className="text-orange-500 cursor-pointer hover:text-orange-700 ml-auto flex items-center"
                            >
                                {isExpanded ? (
                                    <span className="text-3xl lg:text-4xl">−</span>
                                ) : (
                                    <span className=" text-3xl lg:text-4xl ">+</span>
                                )}
                            </button>
                        </div>



                    </div>

                    {/* Section Two */}
                    <div className="flex flex-wrap-reverse justify-around gap-6 md:gap-20 items-center">
                        <div className="w-full md:max-w-[600px]">
                            <h1 className=" font-semibold font-cinzel bg-yellow-500 text-xl md:text-3xl border-none mx-auto text-center md:w-96  md:p-4">
                                Bal Kaliyan Yojna
                            </h1>
                            <h1 className="font-cinzel font-semibold text-orange-500 text-xl md:text-left text-center md:text-2xl lg:text-4xl mt-4">
                                Kaniya Atmnirbhar Yojna
                            </h1>
                            <p className=" text-justify font-montserrat text-gray-700 text-base md:text-md lg:text-lg mt-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Similique aliquam illo voluptas quasi repellendus facilis ipsa
                                porro adipisci est rerum laudantium, vero sint quia debitis
                                illum modi! Vel ad, et reprehenderit voluptatibus nihil odit
                                quis facere laborum laboriosam quas? Quia?
                            </p>
                            <h2 className="font-cinzel w-80 mx-auto md:mx-0 font-bold md:mt-5 mt-4 text-orange-900 text-xl">
                                Know more...
                            </h2>
                        </div>
                        <div>
                            <Image className="" src={Sec6} alt="" height={250} width={340} />
                        </div>
                    </div>

                    {/* Section Three */}
                    <div className="flex flex-wrap justify-evenly items-center gap-2 md:gap-14 mt-10 md:mt-16 lg:mt-20">
                        <div>
                            <Image className="w-92" src={Sec7} alt="" />
                        </div>
                        <div className="md:max-w-[55%] w-full">
                            <h1 className="font-cinzel font-semibold text-orange-500 text-xl  mx-auto  md:max-text-left text-center md:text-2xl lg:text-4xl mt-2 md:mt-4">
                                Adivasi Public School, Rukka-Khunti
                            </h1>
                            <p className="text-justify font-montserrat text-gray-700 text-base lg:text-lg mt-4 ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
                                dicta! Totam odit exercitationem commodi facilis. Delectus id
                                placeat accusamus nam ea ratione eaque et at distinctio minus
                                est sit, quod cupiditate voluptas atque, iste sint, nisi
                                recusandae ut saepe aspernatur!
                            </p>
                            <h2 className="mt-5 font-cinzel text-xl md:text-2xl w-80 text-orange-900  md:mx-0  mx-auto font-bold">
                                Donate now...
                            </h2>
                        </div>
                    </div>


                    {/* PNG Section */}
                    <div className=" mt-5">
                        <Image className="w-[100px] mx-auto m-6" src={Sec13} alt="" />
                    </div>

                    {/* Section Carousel First */}
                    <div className='overflow-hidden my-4'>
                        <Carousel responsive={responsive} >
                            {cardData.map((card, index) => (
                                <div key={index} className="flex flex-col justify-center items-center mb-5">
                                    <Image src={card.img} alt="VJM" />
                                    <h2 className="bg-yellow-500 p-3 w-72 mx-auto text-center font-semibold font-cinzel text-lg">
                                        {card.title}
                                    </h2>
                                </div>
                            ))}
                        </Carousel>
                    </div>


                    {/* Section Four */}
                    <div className=" text-center  md:w-full  mx-auto font-montserrat text-orange-900 md:text-3xl text-xl font-normal mt-10">
                        <p>
                            Together with its active and dedicated volunteer base, <br />
                            <span className="font-cinzel font-bold text-orange-500 text:3xl md:text-4xl">
                                Vishwa Jagriti Mission's
                            </span>{" "}
                            activities serve as a thriving model for human <br />
                            empowerment and community revitalization throughout the world
                        </p>
                    </div>


                    {/* Section Five */}
                    <div className="flex flex-wrap-reverse justify-center mt-14 items-center gap-4 md:gap-14 ">
                        <div className="md:max-w-[60%] w-full mt-5">
                            <h1 className="font-cinzel md:text-3xl text-xl text-center md:text-right font-semibold  text-orange-500">
                                VOLUNTEERING
                            </h1>
                            <h1 className="font-cinzel md:text-3xl text-xl font-semibold text-center md:text-right text-orange-900">
                                Is the Way of Giving Back
                            </h1>
                            <p className="text-justify md:text-right font-montserrat text-gray-700 text-base md:text-lg mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                                error earum perferendis, dignissimos voluptatibus sequi id ea
                                placeat vel veritatis?
                            </p>
                            <h2 className="font-cinzel text-xl md:text-2xl md:text-right w mt-5 font-semibold text-orange-900">
                                Volunteer now...
                            </h2>
                        </div>
                        <div>
                            <Image
                                className=" rounded-md shadow-[10px_10px_15px_rgba(0,0,0,0.3)]"
                                src={Sec8}
                                alt=""
                            />
                        </div>
                    </div>


                    {/* Section Six */}
                    <div className="flex justify-center gap-14 md:gap-1 lg:gap-2 sm:gap-5 flex-col lg:flex-row md:flex-col xl:flex-row items-center mt-10 xl:mt-40 md:mt-32 sm:mt-10">
                        <div className="text-center mt-5 md:max-w-2/5 w-full mb-5">
                            <h1 className="font-cinzel md:text-3xl text-xl font-semibold text-orange-900">
                                Newly Launched
                            </h1>
                            <h1 className="font-cinzel md:text-3xl text-xl font-semibold text-orange-500">
                                Ventures
                            </h1>
                            <p className="mt-5 font-montserrat text-justify md:m-4">
                                When we experience a pure inner impulse caused by a higher purpose
                                to help others, to express our unconditional gratefulness, it is
                                called Dakshine.
                            </p>
                            <div className="hidden md:flex gap-4 justify-end text-2xl text-orange-600">
                                <FaArrowLeft className='cursor-pointer' onClick={() => slider.current?.slickPrev()} />
                                <FaArrowRight className='cursor-pointer' onClick={() => slider.current?.slickNext()} />
                            </div>
                        </div>

                        <div className="h-[430px] md:w-[685px] w-[90%]">
                            <Slider ref={slider} {...settings}>
                                {cardsData1?.map((card) => (
                                    <div key={card.id} className="border-4 bg-yellow-50 w-[500px] rounded-lg">
                                        <div className="m-4 flex justify-center">
                                            <Image src={card.image} alt={card.title} className="rounded-md" />
                                        </div>
                                        <div className="m-4">
                                            <h1 className="font-cinzel font-semibold text-xl md:text-2xl text-orange-900">
                                                {card.title}
                                            </h1>
                                            <p className="text-gray-700 font-montserrat mt-2">{card.description}</p>
                                            <div className="flex justify-end">
                                                <button className="cursor-pointer relative mt-3 group overflow-hidden border-2 px-2 md:px-4 md:py-3 py-2 rounded-md border-orange-500">
                                                    <span className="font-bold text-white text-sm relative z-10 group-hover:text-orange-500 duration-500">
                                                        {card.buttonText}
                                                    </span>
                                                    <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 group-hover:-translate-x-full h-full"></span>
                                                    <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 group-hover:translate-x-full h-full"></span>
                                                    <span className="absolute top-0 left-0 w-full bg-orange-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                                                    <span className="absolute delay-300 top-0 left-0 w-full bg-orange-500 duration-500 group-hover:translate-y-full h-full"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
