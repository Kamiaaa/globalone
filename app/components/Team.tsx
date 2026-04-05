'use client'
import React, { useState } from 'react';
import { 
  FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, 
  FaBriefcase, FaGraduationCap, FaCalendarAlt, 
  FaBuilding, FaMapMarkerAlt, FaAward, FaCode,
  FaLightbulb
} from 'react-icons/fa';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Emma Watson',
      designation: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      location: 'San Francisco, CA',
      email: 'emma@company.com',
      experience: [
        {
          id: 1,
          title: 'CEO & Founder',
          company: 'TechVision Inc.',
          period: '2018 - Present',
          description: 'Leading company strategy, product development, and team growth. Raised $15M in Series A funding.'
        },
        {
          id: 2,
          title: 'VP of Product',
          company: 'Google',
          period: '2014 - 2018',
          description: 'Led product strategy for Google Cloud AI services, increasing revenue by 200%.'
        }
      ],
      education: [
        {
          id: 1,
          degree: 'MBA in Technology Management',
          institution: 'Stanford University',
          year: '2014',
          description: 'Focus on AI ethics and business strategy'
        },
        {
          id: 2,
          degree: 'B.S. in Computer Science',
          institution: 'MIT',
          year: '2010',
          description: 'Graduated with honors, focus on machine learning'
        }
      ],
      skills: ['AI Strategy', 'Leadership', 'Product Management', 'Venture Capital'],
      achievements: ['Forbes 30 Under 30', 'Tech Innovator Award 2023'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      id: 2,
      name: 'James Rodriguez',
      designation: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      location: 'Austin, TX',
      email: 'james@company.com',
      experience: [
        {
          id: 1,
          title: 'Chief Technology Officer',
          company: 'TechVision Inc.',
          period: '2019 - Present',
          description: 'Architecting cloud-native solutions, managing 50+ engineering team.'
        },
        {
          id: 2,
          title: 'Senior Software Architect',
          company: 'Amazon Web Services',
          period: '2015 - 2019',
          description: 'Designed scalable microservices architecture used by millions of customers.'
        }
      ],
      education: [
        {
          id: 1,
          degree: 'M.S. in Cloud Computing',
          institution: 'Carnegie Mellon University',
          year: '2015',
          description: 'Research on distributed systems'
        },
        {
          id: 2,
          degree: 'B.E. in Software Engineering',
          institution: 'University of Texas',
          year: '2012',
          description: 'Summa Cum Laude'
        }
      ],
      skills: ['Cloud Architecture', 'Microservices', 'Team Leadership', 'DevOps'],
      achievements: ['AWS Hero', 'Published Author - "Cloud Native"'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      id: 3,
      name: 'Sophia Chen',
      designation: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      location: 'New York, NY',
      email: 'sophia@company.com',
      experience: [
        {
          id: 1,
          title: 'Lead Product Designer',
          company: 'TechVision Inc.',
          period: '2020 - Present',
          description: 'Leading design team, creating design systems used across all products.'
        },
        {
          id: 2,
          title: 'UI/UX Designer',
          company: 'Airbnb',
          period: '2016 - 2020',
          description: 'Redesigned host dashboard, increasing engagement by 45%.'
        }
      ],
      education: [
        {
          id: 1,
          degree: 'MFA in Interaction Design',
          institution: 'Rhode Island School of Design',
          year: '2016',
          description: 'Focus on human-centered design'
        },
        {
          id: 2,
          degree: 'B.A. in Visual Communication',
          institution: 'UCLA',
          year: '2013',
          description: 'Minor in Psychology'
        }
      ],
      skills: ['UI/UX Design', 'Design Systems', 'User Research', 'Prototyping'],
      achievements: ['Awwwards Site of the Day', 'Adobe Design Achievement Award'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      id: 4,
      name: 'Michael Thompson',
      designation: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      location: 'Seattle, WA',
      email: 'michael@company.com',
      experience: [
        {
          id: 1,
          title: 'Lead Full Stack Developer',
          company: 'TechVision Inc.',
          period: '2021 - Present',
          description: 'Leading development of core products, mentoring junior developers.'
        },
        {
          id: 2,
          title: 'Senior Software Engineer',
          company: 'Microsoft',
          period: '2017 - 2021',
          description: 'Developed features for Azure DevOps used by 100,000+ developers.'
        }
      ],
      education: [
        {
          id: 1,
          degree: 'M.S. in Computer Science',
          institution: 'University of Washington',
          year: '2017',
          description: 'Focus on distributed systems'
        },
        {
          id: 2,
          degree: 'B.S. in Computer Engineering',
          institution: 'Georgia Tech',
          year: '2014',
          description: 'With research distinction'
        }
      ],
      skills: ['React', 'Node.js', 'Python', 'GraphQL', 'Mentoring'],
      achievements: ['Open Source Contributor', 'Tech Conference Speaker'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Corporate boardroom"
          />
          <div className="absolute inset-0 bg-linear-to-r from-sky-500 to-sky-700 mix-blend-multiply" aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-lexend tracking-tight text-white mb-6">
            Meet Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-100">
            Passionate individuals dedicated to bringing your vision to life with excellence and innovation.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-linear-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Card Container */}
                <div className={`relative transition-all duration-500 transform-gpu ${
                  hoveredMember === member.id ? 'scale-105 shadow-2xl' : 'shadow-lg'
                }`}>
                  {/* Front Card (Visible normally - only image, name, designation) */}
                  <div className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
                    hoveredMember === member.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}>
                    {/* Image */}
                    <div className="relative overflow-hidden h-80">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Content - Only Name and Designation */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm">
                        {member.designation}
                      </p>
                    </div>
                  </div>

                  {/* Back Card with Full Profile (Visible on hover) */}
                  <div className={`absolute inset-0 bg-linear-to-br from-sky-900 to-sky-500 rounded-2xl transition-all duration-500 ${
                    hoveredMember === member.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    {/* Content wrapper with scrollbar on the side */}
                    <div className="flex h-full rounded-2xl">
                      {/* Main Content */}
                      <div className="flex-1 overflow-y-auto rounded-l-2xl [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb:hover]:bg-white/50">
                        <div className="p-6 text-white">
                          {/* Header with Image, Name, Designation */}
                          <div className="mb-5 text-center">
                            <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border-4 border-white/30">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h4 className="text-xl font-bold">{member.name}</h4>
                            <p className="text-blue-200 text-sm mb-2">{member.designation}</p>
                            <div className="flex items-center justify-center gap-2 text-xs">
                              <FaMapMarkerAlt className="w-3 h-3" />
                              <span>{member.location}</span>
                            </div>
                          </div>

                          {/* Experience Section */}
                          <div className="mb-5">
                            <div className="flex items-center gap-2 mb-3 border-b border-white/20 pb-2">
                              <FaBriefcase className="w-4 h-4" />
                              <h5 className="text-sm font-semibold">Work Experience</h5>
                            </div>
                            <div className="space-y-4">
                              {member.experience.map((exp) => (
                                <div key={exp.id} className="text-sm">
                                  <div className="font-semibold text-blue-200">{exp.title}</div>
                                  <div className="flex items-center gap-1 text-white/80 text-xs mt-1">
                                    <FaBuilding className="w-3 h-3" />
                                    <span>{exp.company}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-white/60 text-xs mt-0.5">
                                    <FaCalendarAlt className="w-3 h-3" />
                                    <span>{exp.period}</span>
                                  </div>
                                  <p className="text-white/70 text-xs mt-1 leading-relaxed">{exp.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Education Section */}
                          <div className="mb-5">
                            <div className="flex items-center gap-2 mb-3 border-b border-white/20 pb-2">
                              <FaGraduationCap className="w-4 h-4" />
                              <h5 className="text-sm font-semibold">Education</h5>
                            </div>
                            <div className="space-y-3">
                              {member.education.map((edu) => (
                                <div key={edu.id} className="text-sm">
                                  <div className="font-semibold text-blue-200">{edu.degree}</div>
                                  <div className="text-white/80 text-xs">{edu.institution}</div>
                                  <div className="text-white/60 text-xs">{edu.year}</div>
                                  <p className="text-white/70 text-xs mt-1 leading-relaxed">{edu.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Skills Section */}
                          <div className="mb-5">
                            <div className="flex items-center gap-2 mb-3 border-b border-white/20 pb-2">
                              <FaCode className="w-4 h-4" />
                              <h5 className="text-sm font-semibold">Core Skills</h5>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {member.skills.map((skill, idx) => (
                                <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="mb-5">
                            <div className="flex items-center gap-2 mb-3 border-b border-white/20 pb-2">
                              <FaAward className="w-4 h-4" />
                              <h5 className="text-sm font-semibold">Achievements</h5>
                            </div>
                            <div className="space-y-1">
                              {member.achievements.map((achievement, idx) => (
                                <div key={idx} className="text-sm flex items-center gap-2">
                                  <FaLightbulb className="w-3 h-3 text-yellow-300" />
                                  <span className="text-white/80 text-xs">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Social Links */}
                          <div className="flex justify-center space-x-4 pt-4 border-t border-white/20">
                            <a
                              href={member.social.twitter}
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                              aria-label="Twitter"
                            >
                              <FaTwitter className="w-4 h-4" />
                            </a>
                            <a
                              href={member.social.linkedin}
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                              aria-label="LinkedIn"
                            >
                              <FaLinkedinIn className="w-4 h-4" />
                            </a>
                            <a
                              href={member.social.github}
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                              aria-label="GitHub"
                            >
                              <FaGithub className="w-4 h-4" />
                            </a>
                            <a
                              href={member.social.email}
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                              aria-label="Email"
                            >
                              <FaEnvelope className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Scrollbar spacer - maintains rounded corners */}
                      <div className="w-2 rounded-r-2xl bg-white/10 my-1"></div>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="bg-gray-800 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                    Hover for full profile
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-linear-to-r from-sky-600 to-sky-900 text-white font-semibold rounded-full hover:from-sky-900 hover:to-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;