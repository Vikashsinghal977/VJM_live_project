'use client'
import React, { useRef, useState } from 'react';
import Image from "next/image";
import Review1 from "../../../../../public/images/Testimonial.jpg";
import Review2 from "../../../../../public/images/Testimonial-Image.png";
import img1 from "../../../../../public/images/delivery-woman.png";
import img2 from "../../../../../public/images/man.png";
import img3 from "../../../../../public/images/profileMern.png";
import { text } from 'stream/consumers';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// Define the ITestimonial interface
interface ITestimonial {
    id: number;
    name: string;
    image: any;
    rating: number;
    text: string;
    occupation: string;
    type: 'text' | 'video';
    videoUrl?: string;
}

const TestimonialData: ITestimonial[] = [
    {
        id: 1,
        image: img1,
        name: 'Rakesh Sharma',
        occupation: 'Testing Developer',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum vero nulla veniam a id perspiciatis aliquam corrupti ut impedit?",
        rating: 3,
        type: 'text', // Explicitly define type as "text"
    },
    {
        id: 2,
        image: img2,
        name: 'Ramesh Yadav',
        occupation: 'Sales Expert',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum vero nulla veniam a id perspiciatis aliquam corrupti ut impedit?",
        rating: 1,
        type: 'text', // Explicitly define type as "text"
    },
    {
        id: 3,
        image: img3,
        name: 'Arpit',
        occupation: 'Marketing Team Head',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum vero nulla veniam a id perspiciatis aliquam corrupti ut impedit?",
        rating: 4,
        type: 'text', // Explicitly define type as "text"
    },
    {
        id: 4,
        image: img1,
        name: 'Shivam Jaiswal',
        occupation: ' Java Developer',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum vero nulla veniam a id perspiciatis aliquam corrupti ut impedit?",
        rating: 2,
        type: 'text', // Explicitly define type as "text"
    },
    {
        id: 5,
        image: img2,
        name: 'Vishal',
        occupation: 'HR',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum vero nulla veniam a id perspiciatis aliquam corrupti ut impedit?",
        rating: 5,
        type: 'text', // Explicitly define type as "text"
    },
    {
        id: 6,
        image: img3,
        name: 'Shop Owner',
        occupation: 'Testing Developer',
        text: "Lorem ipum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum vero nulla veniam a id perspiciatis aliquam corrupti ut impedit?",
        rating: 2,
        type: 'text', // Explicitly define type as "text"
    },
    {
        id: 7,
        image: img1,
        name: 'Arpit (Video)',
        occupation: 'Marketing Team Head',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum vero nulla veniam a id perspiciatis aliquam corrupti ut impedit?",
        rating: 4,
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/IyJaPesOYso?si=r1qp7DW32QX1ePlG',
    },
    {
        id: 8,
        image: img2,
        name: 'Ankit (Video)',
        occupation: 'Video Editor',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum vero nulla veniam a id perspiciatis aliquam corrupti ut impedit?",
        rating: 4,
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/IyJaPesOYso?si=r1qp7DW32QX1ePlG',
    },
];


export default function TestimonialSec() {
    const [currentTestimonial, setCurrentTestimonial] = useState<ITestimonial | null>(TestimonialData[1] || null);
    const slider = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (oldIndex: number, newIndex: number) => {
            // Highlight the middle profile during slide transition
            const middleIndex = newIndex + Math.floor(settings.slidesToShow / 2);
            const updatedTestimonial = TestimonialData[middleIndex % TestimonialData.length];
            setCurrentTestimonial(updatedTestimonial);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                }
            }
        ]
    };

    return (
        <div className='mx-auto mt-7 mb-6 px-5'>
            <div className=' text-center'>
                <h1 className='  text-2xl text-orange-500'>Our Testimonial</h1>
                <h1 className=' font-cinzel text-xl md:text-2xl lg:text-3xl text-orange-900  font-semibold'>Review from users</h1>
            </div>
            <div className='flex flex-wrap flex-col-reverse font-montserrat md:max-flex-row lg:flex-row justify-center gap-5 md:gap-10 mt-8 items-center'>
                <div className='w-36 xl:w-72 lg:w-72 h-auto'>
                    <Slider
                        ref={slider}
                        {...settings}
                        beforeChange={(oldIndex, newIndex) => {
                            // Calculate the middle profile index
                            const middleIndex = newIndex + Math.floor(settings.slidesToShow / 2);
                            const updatedTestimonial = TestimonialData[middleIndex % TestimonialData.length];
                            setCurrentTestimonial(updatedTestimonial);
                        }}
                    >
                        {TestimonialData.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={` ${currentTestimonial?.id === testimonial.id ? 'border-4 border-orange-600 rounded-full' : 'bg-transparent border-none cursor-pointer'
                                    }`}
                                onClick={() => setCurrentTestimonial(testimonial)}
                            >
                                <Image src={testimonial.image} alt="User Profile" className='rounded-full' />
                            </div>
                        ))}
                    </Slider>
                    <div className="hidden lg:flex gap-4 justify-end mt-6 text-2xl text-orange-600">
                        <FaArrowLeft className='cursor-pointer' onClick={() => slider.current?.slickPrev()} />
                        <FaArrowRight className='cursor-pointer' onClick={() => slider.current?.slickNext()} />
                    </div>
                </div>

                {/* Conditional Rendering Section */}
                {currentTestimonial && (
                    <div className='flex flex-col items-center md:flex-row lg:flex-row xl:flex-row justify-start mt-6 gap-2 md:gap-2 lg:gap-3'>
                        <div
                            className="flex flex-col md:flex-row gap-4 items-center md:items-start lg:items-start"
                            style={{ minHeight: '300px' }} // Set a consistent height for the container
                        >
                            {/* Testimonial Content */}
                            {currentTestimonial.type === 'text' ? (
                                <>
                                    <Image className='h-20 w-20 items-start md:w-52 md:h-52 rounded-full' src={currentTestimonial.image} alt="" />
                                    <div className='md:max-w-80 w-full'>
                                        <p className='text-justify text-base'>{currentTestimonial.text}</p>
                                        <div className="flex flex-col mt-4 items-start lg:items-start md:items-start">
                                            <div>
                                                <h4 className=''><strong>{currentTestimonial.name}</strong></h4>
                                                <p>{currentTestimonial.occupation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className='md:max-w-80 w-full'>
                                    <iframe
                                        width="100%"
                                        height="200"
                                        src={currentTestimonial.videoUrl}
                                        title="Video Testimonial"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <div className="flex flex-col mt-4 items-center lg:items-start md:items-start">
                                        <h4 className=''><strong>{currentTestimonial.name}</strong></h4>
                                        <p>{currentTestimonial.occupation}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
