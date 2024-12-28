'use client';

import React from 'react';
import blueboy from '../utils/blueboy.png'
import list1 from '../utils/listdes1.png'
import list2 from '../utils/listdes2.png'
import blueflower from '../utils/blueflower.png'
import Image from 'next/image';

const ProgramInfo = () => {
  return (
    <div>
       
              {/* Section 1 */}
     <div className=' bg-white container mx-auto px-6 sm:px-10 md:px-20'>
     <section className="py-10 w-11/12 mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start">
          <div className="flex-1 mb-6 md:mb-0 text-gray-700 text-center md:text-left  ">
        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-green-800 mb-6">
          Why took this program
        </h2>
            <p className=' lg:text-xl text-lg text-justify lg:text-left'>
              Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
              qui ratione Lorem ipsum dolor sit amet. Qui distinctio porro in
              dolores autem qui ratione Lorem ipsum dolor sit amet. Qui
              distinctio porro in dolores autem qui rationeLorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint natus inventore quidem debitis. Expedita, alias. Fugiat, ipsum ullam? Qui!
            </p>
          </div>
          <div className="flex  h-full">
            <Image
              src={blueboy}
              alt="Yoga Illustration"
               className=' w-96'
            />
          </div>
        </div>
      </section>
     </div>

      {/* Section 2 */}
      <div className=' bg-blue-200'>
      <section className="py-10 container mx-auto px-6 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto gap-12">
          <div className="flex flex-col items-center justify-center lg:w-1/4">
        <h2 className="text-center lg:text-5xl text-3xl  text-green-800 mb-6">
          Why This <span className="text-green-600 font-bold ">Course is Different?</span>
        </h2>
            <Image 
              src={blueflower}
              alt="Course Icon"
              className="lg:w-full w-10/12"
            />
          </div>
          <ul className=" lg:text-xl text-lg space-y-4 pl-6 list-disc lg:w-3/4 w-full">
            <li className=' flex'>
              {/* <Image src={list} className=''/> */}
              Start each day with <strong>Maharajshri’s Divine guidance</strong>{' '}
              for the next 365 days.
            </li>
            <li>
              {/* <Image src={list}/> */}
              A unique opportunity to weave meditation into your lifestyle.
            </li>
            <li>
              {/* <Image src={list}/> */}
              The extended duration of meditation will let you penetrate deeper
              within and know yourself.
            </li>
            <li>
              {/* <Image src={list}/> */}
              You will gain countless physical and psychological benefits that
              will help to create a <strong>SMART AND EFFICIENT YOU</strong>.
            </li>
            <li>
              {/* <Image src={list}/> */}
              The program will help you to align with the universal energy and
              reveal your unimaginable potential.
            </li>
          </ul>
        </div>
      </section>
      </div>

      {/* Section 3 */}
      <div className=' bg-gradient-to-r from-blue-200 to-slate-200 border border-blue-200'>
      <section className="py-10 container mx-auto px-6 sm:px-10 md:px-20">
          <div className=' w-11/12 mx-auto'>
        <div className="flex flex-col md:flex-row items-center md:items-start ">
          <div className=" text-xl  text-center md:text-left  lg:w-3/5 w-full">
          <h2 className="lg:text-5xl text-3xl font-semibold text-black mb-6">
          How it will bring a change in <span className="text-lime-700">your life?</span>
        </h2>
           <div className=' flex gap-3 items-center '>
            <Image src={list1} alt='list' className=' w-2/12'/>
            <p className="mb-4 lg:text-xl md:text-xl text-lg">
              Unlike nature, that renews her every year during spring, we too
              must let go of the vulnerabilities and negativity to renew and
              define us in a better way.
            </p>
           </div>
           <div className=' flex gap-3 items-center'>
            <Image src={list2} alt='list' className=' w-2/12'/>
            <p className='lg:text-xl text-lg md:text-xl'>
              Following the natural phenomenon of Renew-Rejuvenate-Redefine, you
              will end up being a transformed and renewed person.
            </p>
           </div>
          </div>
         
        </div>
          </div>
      </section>
      </div>
      
    </div>
  );
};

export default ProgramInfo;
