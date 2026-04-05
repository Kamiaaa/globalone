'use client'
import React, { useRef } from 'react';

const MissionVision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      ),
      title: "Integrity & Transparency",
      description: "We operate with the highest ethical standards, ensuring accountability in all our actions and decisions."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      ),
      title: "Sustainability",
      description: "Creating lasting impact through environmentally conscious and community-driven solutions."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-1 .05 1.16.84 2 1.87 2 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "Empowerment",
      description: "Building capacity and creating opportunities for individuals and communities to thrive independently."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: "Compassion",
      description: "Approaching every challenge with empathy and a genuine commitment to human dignity."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58C19.93 7.21 18.99 7 18 7c-.67 0-1.31.1-1.92.28l2.65 2.65c.14.14.26.31.35.48 1.25-.71 2.1-1.97 2.1-3.42 0-.47-.1-.92-.28-1.33l-.12-.22zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.78 3.58L4.13 11.93c-.14.14-.26.31-.35.48-.1.41-.15.86-.15 1.33 0 1.45.85 2.71 2.1 3.42.09-.17.21-.34.35-.48l1.56-1.56-1.86-1.86zM20 17c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7.5-6.5h-1v-1c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1h-1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1v1c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1h1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
        </svg>
      ),
      title: "Partnership",
      description: "Collaborating with diverse stakeholders to amplify impact and reach more communities."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      ),
      title: "Equality",
      description: "Championing equal rights and opportunities for all, regardless of gender, background, or belief."
    }
  ];

  const principles = [
    {
      number: "01",
      title: "Rights-Based Approach",
      description: "All our work is grounded in international human rights standards and frameworks."
    },
    {
      number: "02",
      title: "Community-Led Development",
      description: "Local communities drive their own development agenda with our support and resources."
    },
    {
      number: "03",
      title: "Evidence-Based Action",
      description: "Decisions and strategies are informed by data, research, and proven best practices."
    },
    {
      number: "04",
      title: "Inclusive Participation",
      description: "Ensuring marginalized voices are heard and represented in every initiative."
    },
    {
      number: "05",
      title: "Adaptive Learning",
      description: "Continuously evolving our approaches based on feedback and changing contexts."
    },
    {
      number: "06",
      title: "Systemic Change",
      description: "Addressing root causes rather than just symptoms of poverty and inequality."
    }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative px-4 py-32 text-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1639391381901-7074f965310b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Corporate boardroom"
          />
          <div className="absolute inset-0 bg-linear-to-r from-sky-500 to-sky-900 mix-blend-multiply" aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-lexend tracking-tight text-white mb-6">
            Mission & Vision
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-100">
            For over seven decades, we've transformed lives across Bangladesh through compassion and action.
          </p>
        </div>
      </section>

      {/* Main Mission & Vision Content */}
      <section
        ref={sectionRef}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        {/* Fixed Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-sky-900/80 to-slate-900/90 z-0" />

        {/* Foreground decorative elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mission & Vision Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-24">
            {/* Mission Card */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:shadow-amber-500/20">
              <div className="absolute -top-6 left-8">
                <div className="bg-amber-400 rounded-xl p-3 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl md:text-3xl font-lexend font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-200 leading-relaxed">
                  To empower women and girls, alleviate extreme rural poverty, improve health and nutrition,
                  and build resilience against humanitarian crises across Bangladesh through rights-based
                  programming and strategic partnerships with government, UN agencies, NGOs, private sector,
                  and social enterprises.
                </p>
                <div className="mt-6 flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                </svg>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:shadow-amber-500/20">
              <div className="absolute -top-6 left-8">
                <div className="bg-amber-400 rounded-xl p-3 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl md:text-3xl font-lexend font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-200 leading-relaxed">
                  A Bangladesh where every woman and girl lives with dignity, equality, and opportunity;
                  where extreme rural poverty is eliminated; where communities are healthy, resilient,
                  and empowered to shape their own futures—contributing to a just and sustainable world
                  for generations to come.
                </p>
                <div className="mt-6 flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-lexend font-bold text-white mb-3">
                Our <span className="text-amber-400">Core Values</span>
              </h3>
              <div className="w-20 h-0.5 bg-amber-400 mx-auto rounded-full" />
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-amber-400/50"
                >
                  <div className="text-amber-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Principles Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-lexend font-bold text-white mb-3">
                Our <span className="text-amber-400">Guiding Principles</span>
              </h3>
              <div className="w-20 h-0.5 bg-amber-400 mx-auto rounded-full" />
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                The framework that shapes our approach to creating lasting change
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="group relative bg-linear-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 overflow-hidden"
                >
                  {/* Number background */}
                  <div className="absolute top-2 right-2 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-all duration-300">
                    {principle.number}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-400/30 transition-colors">
                      <span className="text-amber-400 font-bold text-xl">
                        {principle.number}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {principle.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">11+</div>
              <div className="text-sm text-gray-300 mt-1">Years of Service</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">100+</div>
              <div className="text-sm text-gray-300 mt-1">Countries Worldwide</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">Millions</div>
              <div className="text-sm text-gray-300 mt-1">Lives Transformed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">2015</div>
              <div className="text-sm text-gray-300 mt-1">Year Established</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;