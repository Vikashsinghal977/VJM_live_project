import Image from 'next/image';
import React from 'react'
import flower from '../utils/flowerr.png'
import maharaj from '../utils/maharajjii.png'

// gdfgewfew
const Feature = ({ icon, title, description }) => (
  <div className="flex items-center gap-4">
    <Image src={flower} alt={title} className="w-12 h-12" />
    <div>
      <h3 className="md:text-2xl text-xl font-semibold text-[#38723f]">{title}</h3>
      <p className="text-gray-600 md:text-xl text-lg">{description}</p>
    </div>
  </div>
);



const Newlife = () => {
  return (
    <div className=" border border-blue-50 bg-blue-50">
    {/* Main Section */}
    <div className=' container mx-auto px-6 sm:px-10 md:px-20 '>
    <section className="mx-auto flex flex-col w-11/12 lg:flex-row pt-10 items-center gap-8  ">
      {/* Left Content */}
      <div className="flex flex-col  lg:w-1/2 w-full">
        <h1 className="md:text-4xl text-3xl text-center md:text-left font-bold text-[#38723f]">New Life Meditation</h1>
        <p className="mt-4 md:text-xl text-lg text-justify md:text-left">
          Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione
          reprehenderit eos voluptatem distinctio. Vel possimus blanditiis est dolores
          eius hic voluptatem nemo At esse quas aut distinctio distinctio.
        </p>

        {/* Features */}
        <div className="mt-6 space-y-6">
          <Feature
            icon="/path/to/renew-icon.svg"
            title="Renew"
            description="Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione"
          />
          <Feature
            icon="/path/to/rejuvenate-icon.svg"
            title="Rejuvenate"
            description="Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione"
          />
          <Feature
            icon="/path/to/redefine-icon.svg"
            title="Redefine"
            description="Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione"
          />
        </div>
      </div>

      {/* Right Image */}
      <div className=' lg:w-1/2 w-full border'>
        <Image
          src={maharaj}
          alt="Meditation"
          // width={400}
          // height={400}
          className=' w-full'
        />
      </div>
    </section>

    {/* About Section */}
    <section className=" w-11/12 mx-auto mt-16 text-center ">
      <h2 className="text-2xl font-bold text-[#38723f]">About the course</h2>
      <p className="mt-4 text-gray-600 md:text-lg text-md leading-relaxed text-justify md:text-center">
        Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione
        reprehenderit eos voluptatem distinctio. Vel possimus blanditiis est dolores
        eius hic voluptatem nemo At esse quas aut distinctio distinctio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minus quos nulla maiores exercitationem modi minima assumenda dolores. Reiciendis dolore itaque cumque amet quasi, quod officiis possimus nulla autem enim?
      </p>
    </section>
    </div>

  </div>
  )
}

export default Newlife
