'use client'
import React, { useState, useEffect } from "react";
import Banner1 from "../utils/Kanya atmanirbhar/Banner_Image.jpg"
import Banner2 from "../utils/Kanya atmanirbhar/Section_2_Image.jpg"
import Banner3 from "../utils/Kanya atmanirbhar/Banner_Image.jpg"


const images = [
    {
        img: Banner1.src,
        title: "भारत के प्रत्येक दूसरे क्षेत्र में बालिकाओं का उत्थान सुनिश्चित करे",
        desc: (
            <p className="lead">
                आइये हम सब मिलकर ग्रामीण और सीमांत क्षेत्रों में रह रहे युवाओं सशक्त
                बनाये, इनकी शिक्षा और इनके स्वारगिड़ विकास को सुनिश्चित करे।<br />
                आप भी कन्याओं को आत्मनिर्भर बनाने के लिए VJM के इस मिशन से जुड़े तथा
                यथाशक्ति योगदान करे ।
            </p>
        ),
    },
    {
        img: Banner2.src,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, blanditiis.",
        desc: (
            <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime est sequi eius deleniti accusantium velit architecto odit perspiciatis tempora.<br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nisi. Repellendus quos ducimus omnis?
            </p>
        ),
    },
    {
        img: "https://images.alphacoders.com/904/thumb-1920-904194.png",
        title: "Hi there,",
        desc: (
            <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi nulla corporis illum amet odio impedit minus omnis asperiores possimus!<br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut ipsum provident adipisci quo inventore.
            </p>
        ),
    },
    {
        img: "https://images6.alphacoders.com/108/thumb-1920-1080803.jpg",
        title: "भारत के प्रत्येक दूसरे क्षेत्र में बालिकाओं का उत्थान सुनिश्चित करे",
        desc: (
            <p className="lead">
                आइये हम सब मिलकर ग्रामीण और सीमांत क्षेत्रों में रह रहे युवाओं सशक्त
                बनाये, इनकी शिक्षा और इनके स्वारगिड़ विकास को सुनिश्चित करे।<br />
                Once upon a time there was a thirsty crow.
            </p>
        ),
    },
];

export default function Education() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const handleNext = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setIsSliding(false);
        }, 600);
    };

    const handlePrevious = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setIsSliding(false);
        }, 600);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-section relative overflow-hidden min-h-screen bg-cover bg-no-repeat">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full min-h-screen bg-opacity-50  bg-black "
                        style={{
                            backgroundImage: `url(${image.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between justify-center min-h-screen container mx-auto">
                            <a
                                href="#"
                                className="btn1 inline-block mt-4 bg-red-700 text-white py-2 px-4 rounded lg:ml-28 hover:bg-red-600"
                            >
                                दान करें
                            </a>
                            <div className=" text-white text-center md:text-left p-6 lg:w-1/3 md:w-2/4 md:mt-40 lg:mr-28">
                                <h1 className="display-4 text-3xl lg:text-4xl font-bold mb-4">
                                    {image.title}
                                </h1>
                                <hr className="border-gray-300 mb-4" />
                                {image.desc}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className=" container mx-auto navigation-buttons absolute inset-0 flex justify-between items-center px-4">
                <button
                    onClick={handlePrevious}
                    className=" hidden btn-nav bg-red-900 rounded-full w-10 h-10 md:flex items-center justify-center text-white"
                >
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button
                    onClick={handleNext}
                    className="hidden btn-nav bg-red-900 rounded-full w-10 h-10 md:flex items-center justify-center text-white"
                >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}
