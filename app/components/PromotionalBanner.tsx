'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

const PromotionalBanner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleDonateClick = () => {
        // Add your donation page URL or payment integration here
        window.location.href = '/donate';
        // Or if using Next.js router:
        // router.push('/donate');
    };

    const handleGetInvolvedClick = () => {
        // Add your get involved page URL here
        window.location.href = '/get-involved';
        // Or if using Next.js router:
        // router.push('/get-involved');
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-125 overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat mt-20"
            style={{ backgroundImage: "url('/img/parallax.jpg')" }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white max-w-6xl z-10">
                    Join Us in Making a Difference: Empower Communities, Transform Lives.
                </h2>
                {/* Two Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 z-10">
                    <button
                        onClick={handleGetInvolvedClick}
                        className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                        aria-label="Get Involved"
                    >
                        Get Involved
                    </button>
                    <Link href={'/donate'}>
                        <button
                            onClick={handleDonateClick}
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                            aria-label="Donate Now"
                        >
                            <FiHeart className="text-xl" />
                            <span>Donate Now</span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />
        </section>
    );
};

export default PromotionalBanner;