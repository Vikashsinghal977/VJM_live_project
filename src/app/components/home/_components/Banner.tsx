import React from 'react';
import Human1 from "../../../../../public/images/human1.png";
import Human2 from "../../../../../public/images/human2.png";
import Sec4 from "../../../../../public/images/Bg.jpg";
import Bg1 from "../../../../../public/images/BackG.png";
import Icon9 from "../../../../../public/images/Icons/Meditation.png";
import Icon10 from "../../../../../public/images/Icons/Med.png";
import logo from "../../../../../public/images/Icons/Meditation.jpg";
import Icon11 from "../../../../../public/images/Icons/Yoga.png";
import Icon12 from "../../../../../public/images/Icons/Flower.png";
import Icon13 from "../../../../../public/images/Sudunshu Ji.jpg";
import Icon14 from "../../../../../public/images/file.png";
import Icon15 from "../../../../../public/images/Google Play.png";
import Icon16 from "../../../../../public/images/AppleImage.png";
import Image from 'next/image';

export default function Banner() {
    return (
        <section className='overflow-hidden mt-10'>
            <div className="banner1 bg-cover bg-center"
                style={{ backgroundImage: `url(${Bg1.src})`, }}>
                <div
                    className="px-5 container mx-auto"
                >
                    <div className="flex flex-col md:flex-row md:justify-evenly lg:gap-28 justify-center items-center md:mb-16">
                        <div className=" flex flex-col md:flex-row items-center justify-center ">
                            <div>
                                <Image alt="VJM" src={Icon9} className=" md:w-28 w-24" />
                            </div>
                            <div className="md:ml-7">
                                <h1 className=" text-blue-600 font-semibold lg:text-4xl md:text-2xl text-3xl text-center">New Life Meditation</h1>
                                <h2 className=" text-blue-400 lg:text-2xl md:text-lg text-xl text-center">Online Guided Meditation</h2>
                                <h3 className=" bg-orange-300 rounded-2xl p-1 lg:p-2 xl:p-2 font-montserrat text-xs lg:text-md text-center">A golden opportunity for self renewal and transformation</h3>
                            </div>
                        </div>
                        <div className="flex justify-center md:h-2/3 md:pb-12 mt-5 md:mt-0">
                            <div className="">
                                <Image alt="VJM" src={logo} className=" w-16" />
                            </div>
                            <hr className=" border border-slate-500 h-14 ml-2 mr-2" />
                            <div className="md:w-1/3 font-montserrat w-2/5">
                                <p className="font-bold md:text-sm text-md">
                                    12 steps to help
                                    reinvent and create
                                    a new version of yourself

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around mt-5">
                        <div className="md:w-2/5 w-full py-5 lg:py-8">
                            <div>
                                <div className="flex justify-evenly ">
                                    <Image alt="VJM" src={Icon10} className="w-14 h-12 " />
                                    <Image alt="VJM" src={Icon11} className="w-10 h-12 " />
                                    <Image alt="VJM" src={Icon12} className="w-16 h-12 " />

                                </div>
                                <h2 className=" font-bold text-amber-900 text-center lg:text-lg text-sm mt-2">Refresh, Revitalize, and Redefine your Existence</h2>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                                <h1 className=" font-bold lg:text-md md:text-md text-lg text-amber-900">Offered on</h1>
                                <div className="flex justify-center items-center mt-4">
                                    <Image alt="VJM" src={Icon13} className="w-1/4 md:w-36 lg:w-20 mx-3 my-2 md:my-0" />
                                    <Image alt="VJM" src={Icon14} className="w-2/4 float-right md:hidden block" />
                                </div>
                                <div>
                                    <h1 className="font-semibold text-slate-600 lg:text-md md:text-md text-xl mt-3 md:mt-0 text-center lg:text-left">Sudhanhsu Ji Maharaj App</h1>
                                    <div className="flex flex-row md:flex-col lg:flex-row items-center justify-center m-2">
                                        <Image alt="VJM" src={Icon15} className=" w-20" />
                                        <Image alt="VJM" src={Icon16} className=" w-20 lg:ml-5 ml-2 md:ml-0 md:mt-3 mt-0 lg:mt-0 rounded-md" />
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image alt="VJM" src={Icon14} className="lg:w-11/12 w-full float-right hidden md:block" />
                        </div>
                    </div>
                </div>
            </div>

            {/*........Banner1...........*/}



            <div className="banner2 bg-cover bg-center my-5"
                style={{
                    backgroundImage: `url(${Sec4.src})`,
                }}>
                <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center px-5 lg:px-10">
                    <div className="md:w-3/5 sm:w-full text-center md:text-left lg:px-4 order-2 md:order-1">
                        <div className="hidden md:block">
                            <h2 className="font-cinzel font-medium text-xl md:text-3xl lg:text-4xl text-orange-900">
                                Founder, Vishwa Jagriti Mission
                            </h2>
                            <h2 className="font-cinzel font-bold text-xl md:text-3xl lg:text-4xl text-orange-500 mt-2">
                                His Holiness Sudhanshu Ji Maharaj
                            </h2>
                        </div>
                        <p className="text-gray-700 text-base font-montserrat lg:text-lg mt-6 text-justify">
                            Eum molesae autem sed voluptas facilis et fugit debis At molesae
                            commodi qui minima impedit vel omnis deserunt! Lorem ipsum dolor sit
                            amet. Aut soluta consequatur est culpa magnam qui rerum repellat eos
                            reiciendis labore.
                        </p>
                        <h2 className="font-cinzel mb-5 font-bold text-sm text-end md:text-lg lg:text-xl text-orange-900 mt-6">
                            Biography...
                        </h2>
                    </div>
                    <div className="md:hidden block text-center">
                        <h2 className="font-cinzel font-medium text-xl md:text-3xl lg:text-4xl text-orange-900">
                            Founder, Vishwa Jagriti Mission
                        </h2>
                        <h2 className="font-cinzel font-bold text-xl md:text-3xl lg:text-4xl text-orange-500 mt-2">
                            His Holiness Sudhanshu Ji Maharaj
                        </h2>
                    </div>
                    <div className=" lg:w-2/5 w-9/12 order-1 md:order-2">
                        <Image
                            src={Human1}
                            alt="Human Image"
                            className=" float-right"
                        />
                    </div>
                </div>
            </div>

            {/*............Banner2..........*/}

            <div className="banner2 bg-cover bg-center my-5"
                style={{
                    backgroundImage: `url(${Sec4.src})`,
                }}>
                <div className=" container mx-auto mt-6 flex flex-col md:flex-row items-center px-5 lg:px-10">

                    <div className="md:w-3/5 w-full text-center md:text-left lg:px-4 order-2">
                        <div className="hidden md:block">
                            <h2 className="font-cinzel font-medium text-xl md:text-3xl lg:text-4xl text-orange-900">
                                Taking forward the message
                            </h2>
                            <h2 className="font-cinzel font-bold text-xl md:text-3xl lg:text-4xl text-orange-500 mt-2">
                                Dhyan Guru Dr. Archika Didi
                            </h2>
                        </div>
                        <p className="text-gray-700 font-montserrat text-base lg:text-lg mt-6 text-justify">
                            Eum molesae autem sed voluptas facilis et fugit debis At molesae
                            commodi qui minima impedit vel omnis deserunt! Lorem ipsum dolor sit
                            amet. Aut soluta consequatur est culpa magnam qui rerum repellat eos
                            reiciendis labore.
                        </p>
                        <h2 className="font-cinzel font-bold  mb-5 text-sm text-end md:text-lg lg:text-xl text-orange-900 mt-6">
                            Biography...
                        </h2>
                    </div>
                    <div className="md:hidden block text-center">
                        <h2 className="font-cinzel font-medium text-xl md:text-3xl lg:text-4xl text-orange-900">
                            Taking forward the message
                        </h2>
                        <h2 className="font-cinzel font-bold text-xl md:text-3xl lg:text-4xl text-orange-500 mt-2">
                            Dhyan Guru Dr. Archika Didi
                        </h2>
                    </div>
                    <div className=" lg:w-2/5 w-9/12 order-1">
                        <Image
                            src={Human2}
                            alt="Human Image"
                            className=" float-right"
                        />
                    </div>
                </div>
            </div>


        </section>
    )
}
