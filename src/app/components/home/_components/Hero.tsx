import heroBanner from '../../../../../public/images/BannerImage.jpg';
import Image from 'next/image';
import Icon1 from "../../../../../public/images/Icons/Stress.png";
import Icon2 from "../../../../../public/images/Icons/Anger.png";
import Icon3 from "../../../../../public/images/Icons/Depression.png";
import Icon4 from "../../../../../public/images/Icons/Parenting.png";
import Icon5 from "../../../../../public/images/Icons/Sleep.png";
import Icon6 from "../../../../../public/images/Icons/Weight Loss.png";
import Icon7 from "../../../../../public/images/Icons/Wellness.png";
import Icon8 from "../../../../../public/images/Icons/Mental.png";


export default function Hero() {

    return (
        <section className="relative  mb-14 top-0">
            {/* Background Image */}
            <Image
                src={heroBanner}
                alt="Banner Image"
                className="w-full h-[100vh]"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                {/* Main Text */}
                <div className="text-start ml-2 mt-16 space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bodoni font-medium">
                        A Global Movement...
                    </h1>
                    <div className="mt-4 text-sm font-montserrat lg:text-base xl:text-lg md:text-base flex flex-col lg:flex-row gap-2 md:gap-2 justify-center items-start md:lg-items-start lg:items-center xl:items-center">
                        <p>
                            <span className="text-yellow-400">●</span> 40+ National centers
                        </p>
                        <p>
                            <span className="text-yellow-400">●</span> 20+ International centers
                        </p>
                        <p>
                            <span className="text-yellow-400">●</span> 20+ Million followers/devotees
                        </p>
                        <p>
                            <span className="text-yellow-400">●</span> 1000+ Satsang completed
                        </p>
                        <p>
                            <span className="text-yellow-400">●</span> 36 Ashrams
                        </p>
                    </div>
                </div>

                {/* Icon Section */}
                <div className="absolute container mx-auto bottom-[-85px] md:bottom-[-90px] lg:bottom-[-100px] xl:bottom-[-100px] left-1/2 transform -translate-x-1/2 w-full py-6">
                    <p className="text-xl md:text-2xl font-medium text-start ml-2 md:ml-20 lg:ml-20 xl:ml-32 text-white-800 uppercase mb-6 font-cinzel">
                        Find a solution for...
                    </p>
                    <div className="container font-montserrat mx-auto">

                        <div className="flex justify-evenly items-center gap-2 overflow-x-scroll scrollbar-hide">
                            {[
                                { icon: Icon1, label: "Stress" },
                                { icon: Icon2, label: "Anger" },
                                { icon: Icon3, label: "Depression" },
                                { icon: Icon4, label: "Parenting" },
                                { icon: Icon5, label: "Sleep" },
                                { icon: Icon6, label: "Weight Loss" },
                                { icon: Icon7, label: "Wellness" },
                                { icon: Icon8, label: "Mental Health" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center flex-shrink-0"
                                >
                                    <div className="icon-container w-16 h-16 cursor-pointer md:w-20 md:h-20 bg-yellow-900 border-2 border-gray-300 rounded-full flex items-center justify-center shadow-md">
                                        <Image
                                            className="w-10 md:w-12"
                                            src={item.icon}
                                            alt={item.label}
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <p className="mt-2 text-base md:text-lg font-medium text-gray-700">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
