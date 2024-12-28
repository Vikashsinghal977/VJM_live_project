"use client"
import React, { useState, useEffect } from "react";

import CountUp from "react-countup";
import Section11 from "../utils/Kanya atmanirbhar/Section 11 Image.jpg";
import Section11_1 from "../utils/Kanya atmanirbhar/Section 11-1 Image.jpg";
import Image from "next/image";

const ProgressCard = ({
    raised,
    goal,
    title,
    imgSrc,
    description,
    progressPercentage,
}: any) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = progressPercentage;
        const duration = 1000;
        const stepTime = 10;
        const increment = (end - start) / (duration / stepTime);

        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setCurrentPercentage(Math.round(start));
        }, stepTime);

        return () => clearInterval(interval);
    }, [progressPercentage]);

    return (
        <div className="bg-white rounded-lg flex flex-col justify-center items-center shadow-lg md:w-11/12 lg:w-full h w-9/12 h-[720px] ">
            <div className="relative">
                <Image
                    src={imgSrc}
                    alt={title}
                    className="max-w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <div className="w-full bg-gray-200 rounded-full mb-4 relative">
                    <div
                        className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: `${currentPercentage}%` }}
                    />
                    <div
                        className="absolute right-0 top-[-10px] transform -translate-y-1/2 text-sm font-semibold text-black"
                        style={{ right: `${100 - currentPercentage}%` }}
                    >
                        {currentPercentage}%
                    </div>
                </div>
                <p className="text-sm text-center text-red-900 mb-3">
                    <span className="font-bold">उठाया</span>: ₹{" "}
                    <CountUp
                        end={raised}
                        duration={1.5}
                        separator=","
                        decimals={2}
                        decimal="."
                    />{" "}
                    |{" "}
                    <span className="font-bold text-red-900">लक्ष्य</span>: ₹{" "}
                    {goal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </p>
                <h5 className="md:text-xl text-md text-center font-semibold mb-2 text-red-900">
                    {title}
                </h5>
                <p className="text-black text-sm font-bold text-center mb-6">
                    {description}
                </p>
                <div className="flex md:flex-row flex-col items-center gap-4 justify-center">
                    <button className="px-4 py-2 w-full sm:w-auto border text-white bg-orange-500 rounded-md hover:bg-blue-50 transition-colors">
                        और जानें
                    </button>
                    <button className="px-4 py-2 w-full sm:w-auto bg-red-900 text-white rounded-md hover:bg-red-700 transition-colors">
                        दान करें
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function ProfitSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(2); // Default to larger screens

    const progressCards = [
        {
            raised: 649412,
            goal: 2000000,
            progressPercentage: 32,
            title: "एक बालिका को प्रायोजित करें",
            imgSrc: Section11,
            description:
                "बालिका की शिक्षा के लिए अनुदान करे उसके पालक बनने का सुख प्राप्त करें",
        },
        {
            raised: 525615,
            goal: 1000000,
            progressPercentage: 52,
            title: "मध्याह्न भोजन",
            imgSrc: Section11_1,
            description:
                "बालिकाओं के लिए रोजाना / साप्ताहिक / मासिक रूप से पोषणयुक्त भोजन हेतु अनुदान करे",
        },
        {
            raised: 525615,
            goal: 1000000,
            progressPercentage: 52,
            title: "मध्याह्न भोजन",
            imgSrc: Section11_1,
            description:
                "बालिकाओं के लिए रोजाना / साप्ताहिक / मासिक रूप से पोषणयुक्त भोजन हेतु अनुदान करे",
        },
        // Add more cards as needed
    ];

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
        };

        handleResize(); // Set initially
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = Math.ceil(progressCards.length / slidesPerView);

    const goToSlide = (index: any) => setCurrentSlide(index);

    return (
        <div className="profit">
            <div className="w-10/12 mx-auto py-12 container">
                <div className="text-center mb-8">
                    <h2 className="md:text-3xl text-xl font-bold mb-2 text-red-900">
                        कन्या आत्मनिर्भर अभियान
                    </h2>
                    <h3 className="md:text-2xl text-md text-orange-400 font-bold">
                        में बालिकाओं को प्रायोजित करें
                    </h3>
                </div>

                <div className="relative">
                    <div className="flex overflow-x-auto w-full mx-auto scrollbar-hide snap snap-mandatory">
                        <div
                            className="flex transition-transform duration-500 gap-2 items-center "
                            style={{
                                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                            }}
                        >
                            {progressCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 ${slidesPerView === 1 ? "w-full" : "md:w-1/2"
                                        }`}
                                >
                                    <ProgressCard {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots for Navigation */}
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full mx-1 ${index === currentSlide ? "bg-red-500" : "bg-gray-300"
                                }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
