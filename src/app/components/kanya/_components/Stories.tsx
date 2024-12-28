import React from 'react';
import StoryImg1 from '../utils/Kanya atmanirbhar/Stories 1 Image.jpg';
import StoryImg2 from '../utils/Kanya atmanirbhar/Stories 2 Image.jpg';
import StoryImg3 from '../utils/Kanya atmanirbhar/Stories 3 Image.jpg';
import StoryImg4 from '../utils/Kanya atmanirbhar/Stories 4 Image.jpg';
import StoryImg5 from '../utils/Kanya atmanirbhar/Stories 5 Image.jpg';
import StoryImg6 from '../utils/Kanya atmanirbhar/Stories 6 Image.jpg';
import Image from 'next/image';

export default function Stories() {
  return (
    <div className="stories text-center container mx-auto" id='stories'>
      <h1 className="text-3xl font-bold text-orange-500 m-6"  data-aos="fae-up" data-aos-duration="1000">स्टोरीज</h1>
      <div className="storiesbody md:flex justify-center md:w-11/12 px-10 mx-auto">
       <div className=' flex justify-center items-center'>
         {/* First Column */}
            <div className="imgcol1 flex flex-col items-center">
                <div className="img1 m-3 relative" data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
                    <Image src={StoryImg1} alt="" className="w-full h-auto"/>
                    <p className="absolute bottom-0 text-white font-bold mb-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            <div className="img2 m-3 relative"data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
                    <Image src={StoryImg2} alt="" className="w-full h-auto"/>
                    <p className="absolute bottom-0 text-white font-bold mb-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Lorem ipsum dolor sit amet consectetur.
                    </p>
            </div>
            </div>

           {/* Second Column */}
            <div className="imgcol2 m-3 relative" data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
            <Image src={StoryImg3} alt="" className="w-full h-auto" />
            <p className="absolute bottom-0 text-white font-bold mb-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            </div>
       </div>

       <div className='flex justify-center items-center'>
          {/* Third Column */}
        <div className="imgcol3 flex flex-col items-center">
          <div className="img4 m-3 relative" data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
            <Image src={StoryImg4} alt="" className="w-full h-auto" />
            <p className="absolute bottom-0 text-white font-bold mb-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="img5 m-3 relative" data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
            <Image src={StoryImg5} alt="" className="w-full h-auto" />
            <p className="absolute bottom-0 text-white font-bold mb-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="imgcol4 m-3 relative" data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
          <Image src={StoryImg6} alt="" className="w-full h-auto" />
          <p className="absolute bottom-0 text-white font-bold mb-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
       </div>
      </div>
    </div>
  )
}
