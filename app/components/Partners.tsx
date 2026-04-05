// components/Partners.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Partners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Built-in partners data
  const partners = [
    {
      id: 1,
      name: 'Google',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      websiteUrl: 'https://google.com',
    },
    {
      id: 2,
      name: 'Microsoft',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
      websiteUrl: 'https://microsoft.com',
    },
    {
      id: 3,
      name: 'Amazon',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
      websiteUrl: 'https://aws.amazon.com',
    },
    {
      id: 4,
      name: 'Apple',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
      websiteUrl: 'https://apple.com',
    },
    {
      id: 5,
      name: 'Meta',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
      websiteUrl: 'https://meta.com',
    },
    {
      id: 6,
      name: 'Netflix',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      websiteUrl: 'https://netflix.com',
    },
    {
      id: 7,
      name: 'Tesla',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg',
      websiteUrl: 'https://tesla.com',
    },
    {
      id: 8,
      name: 'Adobe',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      websiteUrl: 'https://adobe.com',
    },
    {
      id: 9,
      name: 'Salesforce',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
      websiteUrl: 'https://salesforce.com',
    },
    {
      id: 10,
      name: 'Oracle',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      websiteUrl: 'https://oracle.com',
    },
  ];

  // Duplicate partners for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let startTime: number | null = null;
    let isPaused = false;
    const speed = 30; // seconds for one complete cycle

    const animate = (timestamp: number) => {
      if (!slider) return;
      
      if (!startTime) {
        startTime = timestamp;
      }
      
      if (!isPaused) {
        const elapsed = timestamp - startTime;
        const distance = (elapsed / (speed * 1000)) * (slider.scrollWidth / 3);
        
        // Reset position when we've scrolled through one set of logos
        if (distance >= slider.scrollWidth / 3) {
          slider.scrollLeft = distance % (slider.scrollWidth / 3);
          startTime = timestamp;
        } else {
          slider.scrollLeft = distance;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
      startTime = null;
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-hidden bg-linear-to-r from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-lexend font-semibold text-gray-900 dark:text-white mb-8 text-center md:text-center py-14">
          <span className='border-l-8 border-sky-500 rounded-md px-3'>Partners</span>
        </h2>
        {/* <p className="text-gray-500 dark:text-gray-400 text-lg">
          Join 10,000+ companies that partner with us
        </p> */}
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-hidden cursor-pointer"
        style={{
          scrollBehavior: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        <div className="flex items-center gap-12 px-6">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group flex-shrink-0 w-36 h-28 md:w-40 md:h-24 relative"
            >
              {partner.websiteUrl ? (
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="relative w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:opacity-60 dark:group-hover:opacity-100">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      fill
                      className="object-contain dark:brightness-0 dark:invert"
                      sizes="(max-width: 768px) 144px, 160px"
                      unoptimized
                    />
                  </div>
                </a>
              ) : (
                <div className="relative w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:opacity-60 dark:group-hover:opacity-100">
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    fill
                    className="object-contain dark:brightness-0 dark:invert"
                    sizes="(max-width: 768px) 144px, 160px"
                    unoptimized
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;