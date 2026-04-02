import Image from 'next/image';

const ForHome = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
            {/* Main content container */}
            <div className="container mx-auto max-w-7xl px-4 py-8 relative z-10">
                {/* Component Title */}
                <h2 className="text-3xl md:text-5xl font-lexend font-semibold text-gray-900 dark:text-white mb-8 text-center md:text-center py-14">
                    <span className='border-l-8 border-sky-500 rounded-md px-3'>Our Campaigns</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Large item - left side spanning 2 columns */}
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg dark:shadow-gray-800/30 group">
                        <Image
                            src="/img/campaign-01.jpg"
                            alt="Nature"
                            height={500}
                            width={500}
                            quality={75}
                            className="w-full h-full object-cover"
                        />
                        {/* Card Title and Explore Button */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <h3 className="text-white text-2xl md:text-4xl font-lexend drop-shadow-lg">
                                Campaigning for Blood Donation
                            </h3>
                            <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                                <span>Explore</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right side - 2 cards stacked vertically */}
                    <div className="relative overflow-hidden rounded-2xl shadow-lg dark:shadow-gray-800/30 group">
                        <Image
                            src="/img/campaign-02.jpg"
                            alt="Food"
                            height={100}
                            width={100}
                            quality={75}
                            className="w-full h-48 md:h-full object-cover"
                        />
                        {/* Card Title and Explore Button */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <h3 className="text-white text-2xl font-lexend drop-shadow-lg">
                                Campaigning for Rohingya Crisis Response
                            </h3>
                            <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-1 text-sm">
                                <span>Explore</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-4 w-4" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl shadow-lg dark:shadow-gray-800/30 group">
                        <Image
                            src="/img/campaign-03.jpg"
                            alt="Technology"
                            height={100}
                            width={100}
                            quality={75}
                            className="w-full h-48 md:h-full object-cover"
                        />
                        {/* Card Title and Explore Button */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <h3 className="text-white text-2xl font-lexend drop-shadow-lg">
                                Campaigning for Winter Support
                            </h3>
                            <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-1 text-sm">
                                <span>Explore</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-4 w-4" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForHome;