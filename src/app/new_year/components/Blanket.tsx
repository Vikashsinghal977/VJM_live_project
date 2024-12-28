import React from 'react';

const Blanket = () => {
    return (
        <div className="relative bg-yellow-50 h-32 sm:h-40 md:h-48 lg:h-56">
            <div className="max-w-7xl mx-auto">
                <div className='absolute bottom-4 sm:bottom-6 w-full flex flex-col sm:flex-row container mx-auto justify-between px-4 sm:px-8 space-y-4 sm:space-y-0'>
                    {/* Main content */}
                    <div className="flex-1 flex justify-center items-center relative">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
                            <span className="font-bold text-yellow-600">Blanket</span>{' '}
                            <span className="font-serif italic text-gray-700">Distribution</span>{' '}
                            <span className="font-bold text-yellow-600">Drive</span>
                        </h1>
                    </div>

                    {/* button div */}
                    <div className='flex justify-center'>
                        <button className="bg-yellow-400 text-black font-bold py-2 px-4 text-sm sm:text-base lg:text-lg hover:bg-yellow-500 transition-colors">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blanket;