import React from "react";
import logo1 from "../utils/pic1.png";
import Image from "next/image";

const CardIcon = ({ children }) => (
  <div className="text-orange-500 flex justify-center mb-4">
    <div className="w-28 h-28 flex items-center justify-center"> {/* Increased size */}
      {children}
    </div>
  </div>
);

const Card = ({ icon, title, description }) => (
  <div className="bg-white p-8 text-center shadow-sm">
    <CardIcon>{icon}</CardIcon>
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Overview = () => {
  const cardData = [
    {
      icon: (
        <Image
          src={logo1}
          alt="Spiritual growth"
          width={100} 
          height={100} 
        />
      ),
      title: "Spiritual growth",
      description: "Lorem ipsum dolor sit amet. Qui distinctio porro in",
    },
    {
      icon: (
        <Image
          src={logo1}
          alt="Karmic balance"
          width={100}
          height={100}
        />
      ),
      title: "Karmic balance",
      description: "Lorem ipsum dolor sit amet. Qui distinctio porro in",
    },
    {
      icon: (
        <Image
          src={logo1}
          alt="Prosperity"
          width={100}
          height={100}
        />
      ),
      title: "Prosperity",
      description: "Lorem ipsum dolor sit amet. Qui distinctio porro in",
    },
    {
      icon: (
        <Image
          src={logo1}
          alt="Inner Bliss"
          width={100}
          height={100}
        />
      ),
      title: "Inner Bliss",
      description: "Lorem ipsum dolor sit amet. Qui distinctio porro in",
    },
    {
      icon: (
        <Image
          src={logo1}
          alt="Purifies the Pancha Koshas"
          width={100}
          height={100}
        />
      ),
      title: "Purifies the Pancha Koshas",
      description: "Lorem ipsum dolor sit amet. Qui distinctio porro in",
    },
    {
      icon: (
        <Image
          src={logo1}
          alt="Empowers the mind"
          width={100}
          height={100}
        />
      ),
      title: "Empowers the mind",
      description: "Lorem ipsum dolor sit amet. Qui distinctio porro in",
    },
  ];

  return (
    <div className="-h-screen bg-[#fdf6e3] py-12">
      <div className="container mx-auto px-8 md:px-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:gap-12 mb-16">
          <div>
            <h1 className="text-4xl font-bold text-[#8B4513] mb-4">
              Overview
            </h1>
            <div className="w-32 h-1 bg-[#CD853F] mb-6"></div>
          </div>

          <div>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
              qui ratione reprehenderit eos voluptatem distinctio. Vel possimus
              blanditiis est dolores eius hic voluptatem nemo At esse quas aut
              distinctio distinctio. Lorem ipsum dolor sit amet. Qui distinctio
              porro in dolores autem qui ratione reprehenderit eos voluptatem
              distinctio. Vel possimus blanditiis est dolores eius hic
              voluptatem nemo At esse quas aut distinctio distinctio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 text-lg hover:bg-yellow-500 transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
