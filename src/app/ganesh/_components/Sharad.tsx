import Head from 'next/head';
import Image from 'next/image';
import Sharadddd from "../utils/Sharad Purnima Image.png";

const Sharad = () => {
  return (
    <>
      <Head>
        <title>Sharad Purnima</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <div className="relative w-full">
        {/* Background Image */}
        <div className="w-full">
          <Image
            src={Sharadddd}
            alt="A large crowd of people celebrating Sharad Purnima"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Content for Mobile and Tablet Screens */}
        <div className="block md:hidden bg-white py-6 px-5 text-center">
          {/* Heading Group */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1
              className="text-black text-3xl font-bold"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              Sharad
            </h1>
            <h2
              className="text-yellow-500 text-5xl font-extrabold"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Purnima
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base max-w-3xl mx-auto mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui
            ratione reprehenderit eos voluptatem distinctio. Vel possimus blanditiis
            est dolores eius hic voluptatem nemo. At esse quas aut distinctio
            distinctio voluptatem distinctio.
          </p>
        </div>

        {/* Content Overlaid on Image for Desktop Screens */}
        <div className='container mx-auto flex flex-col items-center px-4'>
        <div className="hidden md:block absolute inset-0 container mx-auto px-5 lg:px-10 flex items-center pt-5 justify-center text-left">
          <div className="space-y-4 text-white px-5">
            <h1
              className="text-5xl md:text-4xl font-bold"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              Sharad
            </h1>
            <h2
              className="text-yellow-400 text-7xl md:text-6xl font-extrabold"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Purnima
            </h2>
            <p className="text-white text-base w-1/2 md:text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui
              ratione reprehenderit eos voluptatem distinctio. Vel possimus blanditiis
              est dolores eius hic voluptatem nemo. At esse quas aut distinctio
              distinctio voluptatem distinctio.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Sharad;
 