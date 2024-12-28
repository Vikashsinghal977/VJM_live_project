import React from 'react';
import Image from "next/image";
import Sec17 from "../../../../../public/images/Section 10 1 Image.jpg";
import Sec18 from "../../../../../public/images/Section 10 2Image.jpg";
import Sec19 from "../../../../../public/images/Section 10 3 Image.jpg";
import Sec20 from "../../../../../public/images/Section 10 4 Image.jpg";
import Sec21 from "../../../../../public/images/Section 10 5 Image.jpg";
import Sec22 from "../../../../../public/images/Section 10 6Image.jpg";

export default function Wisdom() {
  return (
    <section className="container mx-auto mt-10">
      <div className="stories text-center">
        <h1 className="md:text-3xl lg:text-5xl text-2xl font-bold text-orange-900 mb-5 font-cinzel">
          Wisdom
        </h1>
        <p className="container md:text-lg w-auto mx-2 font-montserrat md:mx-5 lg:mx-16 xl:mx-36 text-base md:font-semibold mb-5 ">
          Love plus wisdom is bliss, Love minus wisdom is Misery Love plus wisdom is bliss, Love minus wisdom is MiseryLove plus wisdom is bliss, Love minus wisdom is Misery Love plus wisdom is bliss, Love minus wisdom is Misery <span className='text-orange-400 font-cinzel'><a href='/blog'>Read More...</a></span>{" "}
        </p>
        <div className="container justify-evenly mx-auto">
          <div className="flex justify-center items-center gap-x-2 md:max-gap-x-6">
            <div className="imgcol1 flex flex-col items-center">
              <div className="img1 m-1 md:m-3 ">
                <Image src={Sec17} alt="" className="w-full h-auto" />
              </div>
              <div className="img2 m-1 md:m-3 ">
                <Image src={Sec18} alt="" className="w-full h-auto" />
              </div>
            </div>

            <div className="imgcol2 m-1 md:m-3">
              <Image src={Sec19} alt="" className="w-full h-auto" />
            </div>

            <div className="imgcol3 flex flex-col items-center">
              <div className="img4 m-1 md:m-3 ">
                <Image src={Sec20} alt="" className="w-full h-auto" />
              </div>
              <div className="img5 m-1 md:m-3 ">
                <Image src={Sec21} alt="" className="w-full h-auto" />
              </div>
            </div>

            <div className="imgcol4 m-1 md:m-3">
              <Image src={Sec22} alt="" className="w-full h-auto" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
