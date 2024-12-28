import Image from 'next/image';
import logo from '../utils/Benefitslogo.png';

const benefits = [
    {
        image: logo,
        title: "Decreased stress response",
        description: "Yoga and advanced meditation techniques address both physical and mental stress. They help in reducing the stress hormone (cortisol) levels."
    },
    {
        image: logo,
        title: "Keeps the brain young",
        description: "The advanced meditation techniques have the potential to reverse brain ageing and minimise the degeneration of grey matter in the brain."
    },
    {
        image: logo,
        title: "Positively impacts parts of the brain",
        description: "Meditation also boosts the connectivity between the amygdala and prefrontal cortex, leading to better regulation of the emotional brain center."
    },
    {
        image: logo,
        title: "Higher creativity and problem-solving capacities",
        description: "Meditation brings about mental clarity, setting the stage for imagination to flourish, innovative ideas to take shape and problem-solving abilities to enhance."
    },
    {
        image: logo,
        title: "Boost the immunity and raise the energy level",
        description: "Meditation activates the IFN response genes critical for an immune response. It also enhances the energy levels by improving sleep and reducing stress."
    },
    {
        image: logo,
        title: "Manage illness and diseases",
        description: "Meditation is helpful in managing a range of stress-related medical conditions like asthma, anxiety, depression, high blood pressure, insomnia, etc."
    }
];

const Benefits = () => {
    return (
        <div className="w-full bg-[#f8f5f0] pb-8" style={{fontFamily: 'Arial, sans-serif'}}>
            <h1 className="px-4 pt-8 text-3xl font-bold text-center lg:text-5xl">
                Benefits of Guru Mantra Siddhi Sadhna
            </h1>
            <div className="container mx-auto px-4 lg:px-10 xl:px-18 2xl:px-28">
                <div className="bg-white">
                    <div className="grid grid-cols-1 gap-12 p-3 md:grid-cols-2 lg:gap-20">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.title}
                                        layout="fill"
                                        className="text-orange-500"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold mb-2">{benefit.title}</h2>
                                    <p className="text-gray-700">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;


// import Image from 'next/image';
// import logo from '../utils/Benefitslogo.png';

// const benefits = [
//     {
//         image: logo,
//         title: "Decreased stress response",
//         description: "Yoga and advanced meditation techniques address both physical and mental stress. They help in reducing the stress hormone (cortisol) levels."
//     },
//     {
//         image:logo,
//         title: "Keeps the brain young",
//         description: "The advanced meditation techniques have the potential to reverse brain ageing and minimise the degeneration of grey matter in the brain."
//     },
//     {
//         image:logo,
//         title: "Positively impacts parts of the brain",
//         description: "Meditation also boosts the connectivity between the amygdala and prefrontal cortex, leading to better regulation of the emotional brain center."
//     },
//     {
//         image:logo,
//         title: "Higher creativity and problem-solving capacities",
//         description: "Meditation brings about mental clarity, setting the stage for imagination to flourish, innovative ideas to take shape and problem-solving abilities to enhance."
//     },
//     {
//         image:logo,
//         title: "Boost the immunity and raise the energy level",
//         description: "Meditation activates the IFN response genes critical for an immune response. It also enhances the energy levels by improving sleep and reducing stress."
//     },
//     {
//         image:logo,
//         title: "Manage illness and diseases",
//         description: "Meditation is helpful in managing a range of stress-related medical conditions like asthma, anxiety, depression, high blood pressure, insomnia, etc."
//     }
// ];

// const Benefits = () => {
//     return (
//         <div className=" lg:max-h-[75vh] pb-8 bg-[#f8f5f0] w-full "style={{fontFamily: 'Arial, sans-serif' }} >
//             <h1 className="text-4xl lg:text-5xl px-1 font-bold text-center pt-8">
//                 Benefits of Guru Mantra Siddhi Sadhna
//             </h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 p-10 container mx-auto" style={{ backgroundColor: '#fff', fontFamily: 'Arial, sans-serif' }}>
//                 {benefits.map((benefit, index) => (
//                     <div key={index} className="flex items-start space-x-4">
//                         <div className="relative w-12 h-12 flex-shrink-0">
//                             <Image
//                                 src={benefit.image}
//                                 alt={benefit.title}
//                                 layout="fill"
//                                 className="text-orange-500"
//                             />
//                         </div>
//                         <div>
//                             <h2 className="text-xl font-semibold">{benefit.title}</h2>
//                             <p className="text-gray-700">{benefit.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Benefits;