// components/ContactPage.tsx
'use client';

import { useState } from 'react';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaLinkedinIn,
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaPaperPlane,
    FaClock
    
} from 'react-icons/fa';
import { FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

const ContactPage = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for reaching out! A member of our Global One team will connect with you soon to discuss how we can create lasting impact together.');
            setLoading(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 2000);
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email Us',
            details: 'hello@globalone.org',
            secondary: 'partnerships@globalone.org',
            lightColor: 'bg-sky-50 border border-sky-200',
            darkColor: 'bg-sky-950/80 border border-sky-800/50'
        },
        {
            icon: FaPhoneAlt,
            title: 'Call Us',
            details: '(888) 456-7890',
            secondary: 'Mon-Fri: 9:00 AM - 6:00 PM (Global Time)',
            lightColor: 'bg-sky-50 border border-sky-200',
            darkColor: 'bg-sky-950/80 border border-sky-800/50'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Global Headquarters',
            details: 'One World Trade Center, Floor 50',
            secondary: 'New York, NY 10007, USA',
            lightColor: 'bg-sky-50 border border-sky-200',
            darkColor: 'bg-sky-950/80 border border-sky-800/50'
        },
        {
            icon: FaClock,
            title: 'Office Hours',
            details: 'Monday - Friday',
            secondary: '9:00 AM - 6:00 PM EST',
            lightColor: 'bg-sky-50 border border-sky-200',
            darkColor: 'bg-sky-950/80 border border-sky-800/50'
        }
    ];

    const socialLinks = [
        { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaFacebookF, href: '#', label: 'Facebook' },
        { icon: FaInstagram, href: '#', label: 'Instagram' }
    ];

    const initiatives = [
        { name: 'Education for All', href: '/initiatives#education' },
        { name: 'Climate Action Now', href: '/initiatives#climate' },
        { name: 'Global Health Equity', href: '/initiatives#health' },
        { name: 'Women Empowerment', href: '/initiatives#women' }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
            {/* Hero Section with Image */}
            <div className="relative bg-linear-to-r from-sky-700 via-sky-700 to-sky-800 dark:from-sky-950 dark:via-sky-900 dark:to-sky-950 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2070&q=80"
                        alt="Global One team working together for community development"
                        className="w-full h-full object-cover opacity-30 dark:opacity-40"
                    />

                    {/* Light mode overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-sky-700/90 via-sky-700/80 to-sky-800/90 dark:from-sky-950/90 dark:via-sky-900/80 dark:to-sky-950/90"></div>

                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

                    {/* Subtle vignette effect */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent dark:from-black/40"></div>
                </div>

                <div className="relative z-10 py-12 sm:py-5 lg:py-10 px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6 font-lexend drop-shadow-lg">
                            Join Hands With Global One
                        </h1>
                        <p className="text-xl text-sky-100 dark:text-sky-200 max-w-2xl mx-auto leading-relaxed font-poppins backdrop-blur-sm bg-white/10 dark:bg-black/20 rounded-xl p-4">
                            Together, we're building a world where every community thrives. Whether you're a
                            volunteer, donor, or partner — your support creates lasting change across the globe.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Contact Info Cards */}
                            <div className="bg-white dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-2xl p-8 border border-sky-100 dark:border-sky-800/30 transition-colors duration-300">
                                <h2 className="text-2xl font-lexend font-bold text-gray-900 dark:text-white mb-8 font-poppins relative inline-block">
                                    Get in Touch
                                    <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-linear-to-r from-sky-500 to-transparent dark:from-sky-400"></span>
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-8 font-poppins">
                                    Have questions about our global initiatives or want to get involved?
                                    Reach out — we'd love to hear from you.
                                </p>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 group cursor-pointer hover:bg-sky-50 dark:hover:bg-black/20 rounded-xl p-4 -m-4 transition-all duration-300">
                                            <div className={`p-3 rounded-xl group-hover:bg-sky-100 dark:group-hover:bg-sky-800/40 transition-all duration-300 min-w-12 ${item.lightColor} dark:${item.darkColor}`}>
                                                <item.icon className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white font-poppins">{item.title}</h3>
                                                <p className="text-sky-700 dark:text-sky-200 font-medium font-poppins">{item.details}</p>
                                                <p className="text-sky-600 dark:text-sky-300 text-sm font-poppins">{item.secondary}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-8 border-t border-sky-100 dark:border-sky-800/30">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 font-poppins">Follow Our Journey</h3>
                                    <div className="flex space-x-3">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                className="bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/80 dark:hover:bg-sky-800/80 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-sky-200 dark:border-sky-800/50 hover:border-sky-300 dark:hover:border-transparent shadow dark:shadow-lg hover:shadow-xl"
                                                aria-label={social.label}
                                            >
                                                <social.icon className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-2xl p-8 border border-sky-100 dark:border-sky-800/30 transition-colors duration-300">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-lexend font-bold text-gray-900 dark:text-white mb-2 font-poppins">Partner With Us</h2>
                                    <p className="text-gray-600 dark:text-sky-200 font-poppins">Fill out the form below, and a member of our Global One team will reach out within 48 hours.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="relative">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-sky-200 mb-2 font-poppins">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-sky-400 h-5 w-5" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your full name"
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-sky-800/50 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-sky-950/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-sky-300 font-poppins transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="relative">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-sky-200 mb-2 font-poppins">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-sky-400 h-5 w-5" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your.email@example.com"
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-sky-800/50 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-sky-950/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-sky-300 font-poppins transition-all duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Phone */}
                                        <div className="relative">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-sky-200 mb-2 font-poppins">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-sky-400 h-5 w-5" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+1 (555) 000-0000"
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-sky-800/50 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-sky-950/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-sky-300 font-poppins transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div className="relative">
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-sky-200 mb-2 font-poppins">
                                                I'm Interested In *
                                            </label>
                                            <div className="relative">
                                                <FiMessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-sky-400 h-5 w-5" />
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-sky-800/50 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-sky-950/70 backdrop-blur-sm text-gray-900 dark:text-white appearance-none font-poppins transition-all duration-300"
                                                >
                                                    <option value="" className="text-gray-500 dark:text-sky-300">Select an option</option>
                                                    <option value="volunteer" className="text-gray-900 dark:text-white">Volunteer Opportunities</option>
                                                    <option value="donate" className="text-gray-900 dark:text-white">Make a Donation</option>
                                                    <option value="partner" className="text-gray-900 dark:text-white">Become a Partner</option>
                                                    <option value="initiative" className="text-gray-900 dark:text-white">Learn About Initiatives</option>
                                                    <option value="event" className="text-gray-900 dark:text-white">Event & Campaigns</option>
                                                    <option value="press" className="text-gray-900 dark:text-white">Press & Media</option>
                                                    <option value="general" className="text-gray-900 dark:text-white">General Inquiry</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-sky-200 mb-2 font-poppins">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us how you'd like to contribute to creating positive global change..."
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-sky-800/50 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-sky-950/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-sky-300 font-poppins transition-all duration-300 resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-linear-to-r from-sky-600 to-sky-600 hover:from-sky-700 hover:to-sky-700 dark:from-sky-700 dark:to-sky-700 dark:hover:from-sky-600 dark:hover:to-sky-600 text-white py-4 px-6 rounded-lg font-semibold focus:ring-4 focus:ring-sky-500/50 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 font-poppins"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                <span>Sending Message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane className="h-5 w-5" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;