import React from "react";
import Image1 from "../utils/Kanya atmanirbhar/Small Banner 1.jpg";
import Image2 from "../utils/Kanya atmanirbhar/Small Banner 2.jpg";
import Image3 from "../utils/Kanya atmanirbhar/Small Banner 3.jpg";
import Image from "next/image";


export default function AvlokanImgtext() {
    return (
        <div className="w-10/12 mx-auto">
            <div className="container2 md:flex-row mt-2 flex flex-col justify-center items-center ">
                <div className="image-box" data-aos="fade-up">
                    <Image src={Image1} alt="Image 1" className="" />
                    <div className="content1 font-bold text-red-800">
                        <h4 className=" lg:text-xl sm:text-lg md:text-xs text-sm font-bold">
                            बालिकाओं <br /> की शिक्षा को <br />
                            प्रायोजित करें{" "}
                        </h4>
                        <button className="btn bg-red-800">अभी दान करे </button>
                    </div>
                </div>

                <div className="image-box ml-3" data-aos="fade-up">
                    <Image src={Image2} alt="Image 2" className="" />
                    <div className="content2 font-bold text-red-800">
                        <h4 className="lg:text-xl sm:text-lg md:text-xs text-sm font-bold">
                            मध्यान्ह <br /> भोजन{" "}
                        </h4>
                        <button className="btn bg-orange-500">अभी दान करे </button>
                    </div>
                </div>

                <div className="image-box ml-3" data-aos="fade-up">
                    <Image src={Image3} alt="Image 3" className="" />
                    <div className="content3 font-bold text-red-800">
                        <h4 className=" lg:text-xl sm:text-lg md:text-xs text-sm font-bold">
                            आइये <br />
                            उन्हें कुशल
                            <br /> बनाये
                        </h4>
                        <button className="btn bg-red-800">अभी दान करे </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
