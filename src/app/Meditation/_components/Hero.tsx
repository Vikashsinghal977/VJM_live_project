import Image from 'next/image'
import React from 'react'
import meditation from '../utils/Meditation.png'
import meditation2 from '../utils/Meditation.jpg'
import laptop from '../utils/laptopmaharaj.png'

const Hero2 = () => {
  return (
    <div className='bg-gradient-to-tl from-orange-200 to-blue-200 border'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center py-20'>
          {/* Left Section */}
          <div className='w-full lg:w-1/2 flex items-center flex-col gap-6 lg:gap-10 lg:pl-20'>
            {/* Meditation Header */}
            <div className='flex gap-3 items-center'>
              <Image src={meditation} alt='Meditation' className='w-16 lg:w-24' />
              <div>
                <h1 className='text-2xl lg:text-4xl text-[#448c74] font-bold'>New Life Meditation</h1>
                <h2 className='text-xl lg:text-2xl text-[#00a3d4] font-bold'>Online Guided Meditation</h2>
              </div>
            </div>
            {/* Opportunity Text */}
            <div className='rounded-xl bg-[#eeecd7] text-center w-11/12 lg:w-10/12 p-1'>
              <h1>A golden opportunity for self-renewal and transformation</h1>
            </div>
            {/* Steps Section */}
            <div className='flex gap-2 items-center md:w-8/12 w-full'>
              <Image src={meditation2} alt="meidtion 2" className='h-12 w-12 lg:h-14 lg:w-14' />
              <span className='border h-6 lg:h-10 border-blue-700'></span>
              <h1 className='font-bold text-lg lg:text-2xl'>12 steps to help reinvent and create a new version of yourself</h1>
            </div>
            {/* Register Button */}
            <div className='lg:text-left text-center'>
              <button className='bg-[#73903a] py-2 px-6 text-white font-bold text-lg rounded-full text-center'>
                Register
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
            <Image src={laptop} alt='leptop image' className='w-10/12' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
