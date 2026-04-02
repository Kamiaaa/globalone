// app/components/Team.tsx
'use client';

import React from 'react';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

// Type definition for a team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
}

// Sample team data - replace with your actual data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Executive Director',
    bio: 'Former UN advisor with 15+ years in global development and humanitarian aid.',
    image: '/img/slide-01.jpg', // Add your image path
    socials: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
      email: 'sarah@globalone.org',
    },
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director of Operations',
    bio: 'Expert in sustainable development and cross-cultural program management.',
    image: '/images/team/michael-chen.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael@globalone.org',
      website: 'https://michaelchen.com',
    },
  },
  {
    id: 3,
    name: 'Amina Diallo',
    role: 'Head of Field Programs',
    bio: 'Leading grassroots initiatives across 12 countries with a focus on education.',
    image: '/images/team/amina-diallo.jpg',
    socials: {
      twitter: 'https://twitter.com/aminadiallo',
      email: 'amina@globalone.org',
    },
  },
  {
    id: 4,
    name: 'Dr. James Okafor',
    role: 'Medical Director',
    bio: 'Public health specialist leading our global health and sanitation projects.',
    image: '/images/team/james-okafor.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/jamesokafor',
      email: 'james@globalone.org',
    },
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    role: 'Fundraising Director',
    bio: 'Strategic partnerships expert securing resources for sustainable impact.',
    image: '/images/team/elena-rodriguez.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/elenarodriguez',
      twitter: 'https://twitter.com/elenarodriguez',
      email: 'elena@globalone.org',
    },
  },
  {
    id: 6,
    name: 'Raj Patel',
    role: 'Technology Lead',
    bio: 'Innovating digital solutions for transparency and community engagement.',
    image: '/images/team/raj-patel.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/rajpatel',
      website: 'https://rajpatel.dev',
      email: 'raj@globalone.org',
    },
  },
];

// Individual Member Card Component
const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-72 w-full overflow-hidden bg-gray-200">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
            <span className="text-4xl font-bold text-gray-400">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Social Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-full bg-white p-3 text-blue-600 transition-all duration-200 hover:scale-110 hover:bg-blue-600 hover:text-white"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <FaLinkedinIn size={20} />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-full bg-white p-3 text-blue-400 transition-all duration-200 hover:scale-110 hover:bg-blue-400 hover:text-white"
              aria-label={`${member.name}'s Twitter`}
            >
              <FaTwitter size={20} />
            </a>
          )}
          {member.socials.email && (
            <a
              href={`mailto:${member.socials.email}`}
              className="transform rounded-full bg-white p-3 text-red-500 transition-all duration-200 hover:scale-110 hover:bg-red-500 hover:text-white"
              aria-label={`Email ${member.name}`}
            >
              <FaEnvelope size={20} />
            </a>
          )}
          {member.socials.website && (
            <a
              href={member.socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-full bg-white p-3 text-gray-700 transition-all duration-200 hover:scale-110 hover:bg-gray-700 hover:text-white"
              aria-label={`${member.name}'s website`}
            >
              <FaGlobe size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Member Info */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-green-600">{member.role}</p>
        <p className="mt-3 text-sm text-gray-600 line-clamp-3">{member.bio}</p>
      </div>
    </div>
  );
};

// Hero Section Component
const TeamHero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 md:py-28">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-200 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-blue-200 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Global Team
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Passionate individuals working together to create lasting change across
            continents.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">12+ Countries</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">50+ Team Members</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-gray-600">15 Years of Impact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Team Component
const Team: React.FC = () => {
  return (
    <section className="bg-white" id="team">
      <TeamHero />

      {/* Team Grid Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Leadership & Experts
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500"></div>
          <p className="mt-4 text-lg text-gray-600">
            Dedicated individuals driving Global One&apos;s mission forward
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 p-8 text-center text-white sm:p-12">
          <h3 className="text-2xl font-bold sm:text-3xl">Join Our Mission</h3>
          <p className="mx-auto mt-3 max-w-2xl text-green-100">
            We&apos;re always looking for passionate individuals to join our global
            team. Together, we can make a difference.
          </p>
          <button className="mt-6 rounded-full bg-white px-8 py-3 font-semibold text-green-600 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
            View Open Positions →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;