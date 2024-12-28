import Image from "next/image";
import img1 from "../utils/Sadhna.png";

const Sadhna = () => {
  return (
    <div className="bg-[#fdf6e3] ">
    <div className="flex flex-col md:flex-row justify-between 2xl:container 2xl:mx-auto py-6">
      {/* Text Content */}
      
      <div className="w-full md:w-1/2 pl-4 pr-4 md:pl-12 md:pr-2 md:ml-8 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#5b2c06] font-vollkorn mb-4">
          Jeevan Nirman Sadhna
        </h1>
        <p className="text-base md:text-xl text-[#3a3a3a] font-roboto mb-4">
          Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui
          ratione reprehenderit eos voluptatem distinctio. Vel possimus
          blanditiis est dolores eius hic voluptatem nemo At esse quas aut
          distinctio distinctio.
        </p>
      </div>

      {/* Image Content */}
      <div className="relative w-full md:w-1/2 bg-[#fdf6e3] pb-8 px-4 md:px-0">
        <div className="relative">
          <Image
            src={img1}
            alt="A large group of people dressed in orange robes, sitting in a hall and meditating."
            className="w-full h-auto rounded"
            width={400}
            height={400}
          />
          {/* Button */}
          <button className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-yellow-400 text-[#000] font-bold py-2 px-4 hover:bg-yellow-500 transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Sadhna;
