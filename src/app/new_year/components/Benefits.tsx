import Image from 'next/image';
import logo from '../utils/Benefitslogo.png';

const benefits = [
    {
        image: logo,
        title: "Decreased stress response",
        description: "Yoga and advanced meditation techniques address both physical and mental stress. They help in reducing the stress hormone (cortisol) levels."
    },
    {
        image:logo,
        title: "Keeps the brain young",
        description: "The advanced meditation techniques have the potential to reverse brain ageing and minimise the degeneration of grey matter in the brain."
    },
    {
        image:logo,
        title: "Positively impacts parts of the brain",
        description: "Meditation also boosts the connectivity between the amygdala and prefrontal cortex, leading to better regulation of the emotional brain center."
    },
    {
        image:logo,
        title: "Higher creativity and problem-solving capacities",
        description: "Meditation brings about mental clarity, setting the stage for imagination to flourish, innovative ideas to take shape and problem-solving abilities to enhance."
    },
    {
        image:logo,
        title: "Boost the immunity and raise the energy level",
        description: "Meditation activates the IFN response genes critical for an immune response. It also enhances the energy levels by improving sleep and reducing stress."
    },
    {
        image:logo,
        title: "Manage illness and diseases",
        description: "Meditation is helpful in managing a range of stress-related medical conditions like asthma, anxiety, depression, high blood pressure, insomnia, etc."
    }
];

const Benefits = () => {
    return (
        <div className=" bg-[#fdf6e3] w-full "style={{fontFamily: 'Arial, sans-serif' }} >
            <div className='container mx-auto px-8 md:px-20 max-w-6xl'>
            <h1 className="text-2xl font-bold text-center pt-12 pb-2">
                Benefits of Guru Mantra Siddhi Sadhna
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-3 sm:px-3 container mx-auto" style={{ backgroundColor: '#fff', fontFamily: 'Arial, sans-serif' }}>
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                                src={benefit.image}
                                alt={benefit.title}
                                layout="fill"
                                className="text-orange-500"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">{benefit.title}</h2>
                            <p className="text-gray-700">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Benefits;