import React from 'react'
import Prabhavcomponent from './Prabhavcomponent'
import Icon1 from '../utils/Kanya atmanirbhar/Icons/13.jpg'
import Icon2 from '../utils/Kanya atmanirbhar/Icons/12.jpg'
import Icon3 from '../utils/Kanya atmanirbhar/Icons/11.jpg'

export default function Prabhav() {
  return (
    <div className='container md:w-10/12 w-full mx-auto px-16 lg:px-0' id='impact'>
    <h1 className='font-bold text-3xl text-orange-500 text-center mt-3' data-aos="fade-up"
 data-aos-easing="fade-up"
 data-aos-delay="100"
 data-aos-offset="0">प्रभाव</h1>
 <div className=' flex justify-center items-center '>
    <Prabhavcomponent imgSrc={Icon1} number={'2000+'} text={"शिक्षित बालिकाएं "}/>
    <Prabhavcomponent imgSrc={Icon1} number={'300+'} text={"व्यावसायिक प्रशिक्षण"}/>
    <Prabhavcomponent imgSrc={Icon2} number={'200+'} text={"बालिकाओं को रोजगार"}/>
    <Prabhavcomponent imgSrc={Icon3} number={'100+'} text={"रोजगार मई सहायता प्रदान करना "}/>
</div>
</div>
  )
}
