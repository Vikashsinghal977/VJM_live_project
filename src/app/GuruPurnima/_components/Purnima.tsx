import React from 'react';
import Sharadddd from "../utils/Purnima.png";

const Purnima = () => {
  return (
    <div
      className="min-h-[80vh] bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${Sharadddd.src})`,
      }}
    >
      <div className="flex items-center min-h-[80vh] w-full">
        <div className='container mx-auto flex items-center justify-center lg:mt-44 lg:justify-end'>
          <div className="flex flex-col p-4 lg:p-6 w-full lg:w-1/2">
            {/* Heading Group */}
            <div className="space-y-2 text-center">
              <h1
                className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ 
                  fontFamily: "'Brush Script MT', cursive, Regular",
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word'
                }}
              >
                Purnima
              </h1>
              <h2
                className="text-white font-bold text-2xl sm:text-3xl md:text-4xl"
                style={{ fontFamily: 'Arial Regular' }}
              >
                Darshan
              </h2>
            </div>

            {/* Description */}
            <p className="text-white font-semibold mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
              qui ratione reprehenderit eos voluptatem distinctio. Vel possimus
              blanditiis est dolores eius hic voluptatem nemo At esse quas aut
              distinctio distinctio.voluptatem distinctio. est dolores eius hic voluptatem nemo At esse quas aut
              distinctio distinctio.voluptatem distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purnima;


// import Head from 'next/head';
// import Image from 'next/image';
// import Sharadddd from "../utils/Purnima.png";

// const Purnima = () => {
//   return (
//     <>
//       <Head>
//         <title>Sharad Purnima</title>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@400;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
//         />
//       </Head>

//       <div className=" relative w-full min-h-[60vh] md:min-h-[80vh]">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src={Sharadddd}
//             alt="A large crowd of people celebrating Sharad Purnima"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>
//         <div className='container mx-auto w-full min-h-[60vh] md:min-h-[80vh] relative '>
//         {/* Overlay */}
//         <div className=" absolute flex justify-end bottom-0 right-0 py-8 bg-opacity-50">
//           {/* Content Container */}
//           <div className="relative h-full flex flex-col px-4 sm:px-8 ">
//             <div className="max-w-4xl">
//               {/* Heading Group */}
//               <div className="space-y-2 text-center">
//                 <h1 
//                   className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
//                   style={{ fontFamily: "'Brush Script MT', cursive, Regular" }}
//                 >
//                   Purnima
//                 </h1>
//                 <h2 
//                   className="text-white font-bold text-2xl sm:text-3xl md:text-4xl pl-0"
//                   style={{ fontFamily: 'Arial Regular' }}
//                 >
//                   Darshan
//                 </h2>
                
//               </div>

//               {/* Description */}
//               <p className="text-white font-semibold mt-4 px-10 mr-5 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg max-w-full md:max-w-3xl lg:max-w-xl leading-relaxed">
//                 Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
//                 qui ratione reprehenderit eos voluptatem distinctio. Vel possimus
//                 blanditiis est dolores eius hic voluptatem nemo At esse quas aut
//                 distinctio distinctio.voluptatem distinctio. est dolores eius hic voluptatem nemo At esse quas aut
//                 distinctio distinctio.voluptatem distinctio.
//               </p>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Purnima;