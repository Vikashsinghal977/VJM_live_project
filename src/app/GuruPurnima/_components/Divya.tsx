// import Image from "next/image";
// import React from "react";
// import divya from "../utils/Baba.png";

// export default function Divya() {
//   return (
//     <div className=" lg:max-h-[84vh] bg-[#e3d7c7] flex items-center justify-center">
//       <div className="w-full max-w-7xl">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="flex flex-col p-4 md:p-6 justify-center md:pl-10 text-white w-full md:w-[55%]">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4 text-red-900 text-center md:text-left">
//               Guru Mantra Siddhi Sadhna
//             </h1>
//             <p className="text-lg md:text-xl text-black pl-0 md:pl-2 mb-4">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat
//               incidunt cum vel facere excepturi, inventore veritatis? Error totam
//               aliquid mollitia ratione aperiam quisquam fuga, facere dolore.
//             </p>
//             <p className="text-lg md:text-xl text-black pl-0 md:pl-2">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat
//               incidunt cum vel facere excepturi, inventore veritatis? Error totam
//               aliquid mollitia ratione aperiam quisquam fuga, facere dolore ipsum
//               quae perspiciatis.
//             </p>
//             <div className="flex justify-center md:justify-end mt-4">
//               <button className="bg-yellow-400 w-32 text-black text-xl font-bold py-1">
//                 Register
//               </button>
//             </div>
//           </div>
//           <div className="flex justify-end items-end md:w-[45%]">
//             <Image 
//               src={divya} 
//               height={500} 
//               width={650}
//               className="w-full md:w-auto h-auto object-contain"
//               priority
//               alt="Divya"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import React from "react";
import divya from "../utils/Baba.png";

export default function Divya() {
  return (
    <div className="bg-[#e3d7c7] flex flex-col md:flex-row justify-between ">
      <div className="flex flex-col md:flex-row justify-between 2xl:container 2xl:mx-auto">
      <div className=" flex flex-col p-4 md:p-6 justify-center md:pl-28 text-white w-full md:w-[55%]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-red-900 text-center md:text-left">
          Divya Shakti Path Kriya
        </h1>
        <p className="text-lg md:text-xl text-black pl-0 md:pl-2 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat
          incidunt cum vel facere excepturi, inventore veritatis? Error totam
          aliquid mollitia ratione aperiam quisquam fuga, facere dolore.
        </p>
        <p className="text-lg md:text-xl text-black pl-0 md:pl-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quaerat
          incidunt cum vel facere excepturi, inventore veritatis? Error totam
          aliquid mollitia ratione aperiam quisquam fuga, facere dolore ipsum
          quae perspiciatis.
        </p>
        <div className="flex justify-center md:justify-end mt-4">
          <button className="bg-yellow-400 w-32 text-black text-xl font-bold py-1">
            Register
          </button>
        </div>
      </div>
      <div className="w-full md:w-auto">
        <Image 
          src={divya} 
          alt="Divya image"
          height={500} 
          width={650}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      </div>
    </div>
  );
}