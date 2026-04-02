'use client';

import React from 'react';

// Define the shape of a service item
interface Work {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

// Sample service data
const servicesData: Work[] = [
  {
    id: 1,
    title: "Education for All",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    link: "/services/eco-bottle",
    image: "/img/slide-01.jpg",
  },
  {
    id: 2,
    title: "Healthcare Initiative",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    link: "/services/solar-kit",
    image: "/img/slide-02.jpg",
  },
  {
    id: 3,
    title: "Women Empowerment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    link: "/services/smart-thermostat",
    image: "/img/slide-03.jpg",
  },
  {
    id: 4,
    title: "Environmental Conservation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    link: "/services/air-purifier",
    image: "/img/slide-04.jpg",
  },
  {
    id: 5,
    title: "Clean Water Initiave",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    link: "/services/air-purifier",
    image: "/img/slide-06.jpg",
  },
  {
    id: 6,
    title: "Community Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    link: "/services/air-purifier",
    image: "/img/slide-05.jpg",
  },
];

const Work: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-lexend font-semibold text-gray-900 dark:text-white mb-8 text-center md:text-center py-14"><span className='border-l-8 border-sky-500 rounded-md px-3'>Our Work</span></h2>
        {/* <div className="w-24 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div> */}
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <article
            key={service.id}
            className="group relative rounded-2xl bg-[#EAEAF3] shadow-sm flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* SVG Circle Decorations */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                className="absolute -top-20 -right-20 w-48 h-48"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle cx="160" cy="40" r="80" fill="rgba(14, 165, 233, 0.08)" />
              </svg>
              <svg
                className="absolute -bottom-20 -left-20 w-64 h-64 opacity-40"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle cx="40" cy="160" r="100" fill="rgba(14, 165, 233, 0.06)" />
              </svg>
            </div>

            {/* Content wrapper */}
            <div className="p-6 flex flex-col h-full relative z-10">
              <div className="space-y-4 flex-1">
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="w-full h-40 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-lexend font-semibold text-slate-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-700 text-sm line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Button aligned at bottom */}
              <div className="pt-5 mt-auto">
                <a
                  href={service.link}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-indigo-700 transition-colors"
                >
                  <span>Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="stroke-sky-600 group-hover:stroke-indigo-700 transition-colors"
                  >
                    <path d="M5 10.707L10 5.70703L5 0.707031" strokeWidth="2" />
                    <path d="M10 5.70703L0 5.70703" strokeWidth="2" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;