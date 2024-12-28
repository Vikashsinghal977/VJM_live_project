import React from 'react'
import img1 from '../utils/Kanya atmanirbhar/Section 5-1 Image.jpg'
import img2 from '../utils/Kanya atmanirbhar/Section 5-2Image.jpg'
import img3 from '../utils/Kanya atmanirbhar/Section 5-3 Image.jpg'
import img4 from '../utils/Kanya atmanirbhar/Section 5-4 Image.jpg'
import Image from 'next/image'

export default function Uniform() {
  return (
    <div className=' bg-orange-100 p-5'>
    <div className='container flex flex-col lg:flex-row md:w-10/12 w-full mx-auto mt-5 mb-5 lg:px-10 px-10'>
        <div className=' lg:w-9/12 w-full'>
            <div className='flex'>
                <div > <Image src={img1} className='w-72' alt="" /></div>
                <div className='bg-white'> <Image src={img2} className='w-[352px]' alt="" /></div>
            </div>
            <div className='flex'>
                <div> <Image src={img3} className='w-80' alt="" /></div>
                <div className='bg-white'> <Image src={img4} className='w-80' alt="" /></div>
            </div>
        </div>
        <div className='lg:w-1/2 w-full lg:px-10 font-bold'>
            <h1 className=' font-bold text-xl  bg-yellow-500 text-red-700 md:p-4 text-center mt-8 mb-4'>
            किताबे, यूनिफार्म , चिकत्सीय सुविधाएं , मध्यान्ह भोजन 
            </h1>
            <p className='text-md lg:text-left text-justify '>
            VJM में हम बालिकाओं को शिक्षा के साथ साथ पढाई पूरी करने हेतु जरुरी सामान की सुगम उपलब्धि भी सुनिश्चित करते ह।  यहाँ हम बालिकाओं को उनकी कक्षा अनुसार किताबे, स्टेशनरी, स्कूल, यूनिफार्म  वितरित करते ह। वही हर बालिका को VJM में रोजाना पोषणयुक्त मध्यान्ह भोजन भी परोसा जाता है जिससे वंचित वर्ग की इन बच्चियों को दिन भर का पोषण मिल सक। हम यह बच्चियों को पोषण को ध्यान में रखते हुए समय समय पर हेल्थ चेकउप एवं डॉक्टर परामर्श कार्यकर्म आयोजित करते है जिससे बढ़ती हुयी बच्चियों को शारीरिक सुरक्षा हेतु सारी जरूरी जानकारी मिल सके। 
            </p>
        </div>
    </div>
</div>
  )
}
