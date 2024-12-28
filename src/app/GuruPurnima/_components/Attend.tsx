import React from 'react';
import Image from 'next/image';
import img from '../utils/OverviewImage.png'; 

const Attend = () => {
  const attendOptions = [
    {
      title: "Attend the celebration In-person",
      image:img,
      description: "Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio."
    },
    {
      title: "Attend the Online",
      image:img,
      description: "Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio."
    }
  ];

  return (
    <div className="overflow-x-hidden max-w-7xl mx-auto px-4 py-6 md:px-20 pt-2">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-red-900 mb-8">
        Ways to Attend
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {attendOptions.map((option, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image container */}
            <div className="relative w-full aspect-[4/3] mb-4">
              {/* White background shadow effect */}
              <div className="absolute -inset-4 bg-white shadow-sm transform rotate-6" />
              {/* Brown frame */}
              <div className="absolute inset-0 transform -rotate-6 border-8 border-brown-600" />
              <div className="relative h-full w-full">
                <Image
                  src={option.image}
                  alt={option.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
            </div>

            {/* Title container */}
            <div className="relative w-11/12 -mt-2 mb-6">
              {/* White background with shadow */}
              <div className="absolute inset-0 bg-white shadow-md" />
              <div className="relative bg-white p-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                  {option.title}
                </h2>
              </div>
            </div>

            {/* Description container with fixed height */}
            <div className="w-full px-4 mb-6">
              <p className="text-center text-gray-800 text-sm md:text-lg">
                {option.description}
              </p>
            </div>

            {/* Button container */}
            <div className="mt-auto">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-8 text-lg">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attend;



// import Image from 'next/image'; 
// import React from 'react'; 
// import img from '../utils/OverviewImage.png'; 

// const Attend = () => { 
//   const attendOptions = [ 
//     { 
//       title: "Attend the celebration In-person", 
//       image: img, 
//       description: "Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio." 
//     }, 
//     { 
//       title: "Attend the Online", 
//       image: img, 
//       description: "Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione reprehenderit eos voluptatem distinctio." 
//     } 
//   ]; 

//   return ( 
//     <div className="max-w-7xl mx-auto px-6 py-6 md:px-20 pt-2"> 
//       <h1 className="text-3xl md:text-5xl font-bold text-center text-red-900 mb-4">Ways to Attend</h1> 
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-10"> 
//         {attendOptions.map((option, index) => ( 
//           <div 
//             key={index} 
//             className="flex flex-col items-center text-center md:text-left"
//           > 
//             <div className="relative w-full h-64 md:h-full mb-4 overflow-hidden"> 
//               <Image 
//                 src={option.image} 
//                 alt={option.title} 
//                 className="w-full h-full object-cover" 
//               /> 
//             </div>

//             {/* Title below the image */}
//             <div className="bg-white w-full p-4 shadow-md"> 
//               <h2 className="text-xl md:text-3xl font-bold text-gray-800"> 
//                 {option.title} 
//               </h2> 
//             </div>
            
//             <p className="px-3 pt-4 text-gray-800 text-sm md:text-lg mb-6"> 
//               {option.description} 
//             </p> 
            
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg md:text-2xl font-bold py-2 px-6 md:py-1 md:px-5 transition-colors duration-200"> 
//               Register 
//             </button> 
//           </div> 
//         ))} 
//       </div> 
//     </div> 
//   ); 
// }; 

// export default Attend;
