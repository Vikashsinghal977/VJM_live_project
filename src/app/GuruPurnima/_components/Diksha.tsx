// import Image from "next/image";
// import React from "react";
// import baba from "../utils/Baba2.png";

// export default function Diksha() {
//   return (
//     <div className="lg:max-h-[84vh] bg-[#f8f8e9] flex items-center justify-center">
//       <div className="w-full max-w-7xl">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="flex flex-col p-6 justify-center md:pl-10 text-white md:w-[55%] w-full">
//             <h1 className="text-3xl md:text-5xl text-center font-bold text-red-900">
//               Guru Mantra
//             </h1>
//             <h2 className="text-2xl md:text-4xl text-center font-bold text-orange-500">
//               Diksha
//             </h2>
//             <p className="mt-4 text-sm md:text-xl text-black">
//               Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui
//               ratione reprehenderit eos voluptatem distinctio. Vel possimus
//               blanditiis est dolores eius hic voluptatem nemo At esse quas aut
//               distinctio distinctio. Lorem ipsum dolor sit amet.
//             </p>
//             <p className="mt-4 text-sm md:text-xl text-black">
//               Qui distinctio porro in dolores autem qui ratione reprehenderit eos
//               voluptatem distinctio. Vel possimus blanditiis est dolores eius hic
//               voluptatem nemo At esse quas aut distinctio distinctio.
//             </p>
//           </div>
//           <div className="flex justify-center items-center md:w-[45%]">
//             <Image
//               src={baba}
//               height={500}
//               width={650}
//               className="w-full md:w-auto h-auto object-contain"
//               alt="Baba"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import React from "react";
import baba from "../utils/Baba2.png";

export default function Diksha() {
  return (
    <div className="flex flex-col bg-[#f8f8e9] md:flex-row justify-between">
      <div className="flex flex-col md:flex-row justify-between 2xl:container 2xl:mx-auto ">
      <div className=" flex flex-col p-6 justify-center md:pl-28 text-white md:w-[55%] w-full">
        <h1 className="text-3xl md:text-5xl text-center font-bold text-red-900">Guru Mantra</h1>
        <h2 className="text-2xl md:text-4xl text-center font-bold text-orange-500">Diksha</h2>
        <p className="mt-4 text-sm md:text-xl text-black">
          Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui
          ratione reprehenderit eos voluptatem distinctio. Vel possimus
          blanditiis est dolores eius hic voluptatem nemo At esse quas aut
          distinctio distinctio. Lorem ipsum dolor sit amet.
        </p>
        <p className="mt-4 text-sm md:text-xl text-black">
          Qui distinctio porro in dolores autem qui ratione reprehenderit eos
          voluptatem distinctio. Vel possimus blanditiis est dolores eius hic
          voluptatem nemo At esse quas aut distinctio distinctio.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={baba}
          height={500}
          width={650}
          className="w-full md:w-auto h-auto"
          alt="Baba"
        />
      </div>
      </div>
    </div>
  );
}
