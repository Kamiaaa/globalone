import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaLinkedinIn, FaHeart, FaHandsHelping, FaSeedling, FaChild, FaWater } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative text-gray-200 py-16 px-5 md:px-20 mt-auto">
      {/* Background with dark overlay - NGO themed */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your architectural/real estate background image
          alt="BIOBUILD Footer Background"
          height={500}
          width={500}
          className="h-full w-full opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-t from-sky-900 to-sky-700 opacity-90"></div>
      </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Organization Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-sky-900/40 rounded-lg blur-sm backdrop-blur-sm"></div>
              <div className="flex items-center space-x-3 relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-sky-800/30 rounded-full blur-sm"></div>
                  <img 
                    src="/img/logo.webp" 
                    alt="Hope Foundation Logo"
                    className="h-14 w-auto rounded-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl drop-shadow-md backdrop-blur-sm bg-black/20 rounded-xl p-4 font-poppins">
            Global One is dedicated to transforming lives through education, healthcare, and sustainable development. 
            Since 2015, we've been working tirelessly to empower underprivileged communities, provide quality education 
            to children, ensure healthcare access for all, and create lasting positive change in society.
          </p>

          {/* Payment Methods Image - Replacing Newsletter Subscription */}
          <div className="pt-2">
            <h3 className="text-gray-100 text-lg font-semibold mb-4 flex items-center drop-shadow font-poppins">
              We Accept Donations Via
              <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </h3>
            <div className="bg-sky-950/80 backdrop-blur-sm rounded-xl p-4 border border-sky-800/60 shadow-xl flex flex-wrap items-center justify-center gap-4">
              <img 
                src="/img/sslcom.png" 
                alt="Payment Methods - SSLCommerz, Visa, Mastercard, American Express, bKash, and more"
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-300 mt-2 font-poppins text-center">
              Secure payment processing through SSLCommerz
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-gray-100 text-xl font-lexend font-bold mb-2 relative inline-block drop-shadow">
            Quick Links
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-sky-400 to-transparent"></span>
          </h3>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home", key: "home" },
              { href: "/about", label: "About Us", key: "about" },
              { href: "/impact", label: "Our Impact", key: "impact" },
              { href: "/contact", label: "Contact", key: "contact" },
            ].map((item) => (
              <li key={item.key}>
                <Link href={item.href}>
                  <span className="group text-gray-200 hover:text-white transition-all duration-300 flex items-center py-2 backdrop-blur-sm hover:bg-black/20 rounded-lg px-3 -mx-3">
                    <FaArrowRight className="w-3 h-3 text-sky-400 mr-3 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative font-poppins">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Initiatives */}
        <div className="space-y-6">
          <h3 className="text-gray-100 text-xl font-lexend font-bold mb-2 relative inline-block drop-shadow">
            Our Initiatives
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-sky-400 to-transparent"></span>
          </h3>
          <ul className="space-y-3">
            {[
              { href: "/initiatives/education", label: "Education for All", key: "education", icon: <FaChild className="mr-2" /> },
              { href: "/initiatives/healthcare", label: "Healthcare Access", key: "healthcare", icon: <FaHeart className="mr-2" /> },
              { href: "/initiatives/environment", label: "Environmental Conservation", key: "environment", icon: <FaSeedling className="mr-2" /> },
              { href: "/initiatives/women-empowerment", label: "Women Empowerment", key: "women", icon: <FaHandsHelping className="mr-2" /> },
              { href: "/initiatives/water", label: "Clean Water Initiative", key: "water", icon: <FaWater className="mr-2" /> },
            ].map((item) => (
              <li key={item.key}>
                <Link href={item.href}>
                  <span className="group text-gray-200 hover:text-white transition-all duration-300 flex items-center py-2 backdrop-blur-sm hover:bg-black/20 rounded-lg px-3 -mx-3">
                    <FaArrowRight className="w-3 h-3 text-sky-400 mr-3 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative text-sm font-poppins flex items-center">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-gray-100 text-xl font-lexend font-bold mb-2 relative inline-block drop-shadow">
            Get In Touch
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-sky-400 to-transparent"></span>
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 group cursor-pointer backdrop-blur-sm hover:bg-black/20 rounded-xl p-3 -m-3 transition-all duration-300">
              <div className="p-3 bg-sky-950/80 backdrop-blur-sm rounded-xl group-hover:bg-sky-800/40 transition-all duration-300 border border-sky-800/50 group-hover:border-sky-600/40 min-w-12">
                <FaMapMarkerAlt className="text-sky-300 text-lg" />
              </div>
              <div className="text-gray-200 leading-relaxed">
                <a href='https://maps.app.goo.gl/' target='_blank' rel="noopener noreferrer" className="group/link">
                  <p className="group-hover/link:text-sky-300 transition-colors drop-shadow font-lexend">123 Hope Street, Community Center</p>
                </a>
                <a href='https://maps.app.goo.gl/' target='_blank' rel="noopener noreferrer" className="group/link mt-2 block">
                  <p className="group-hover/link:text-sky-300 transition-colors drop-shadow text-sm font-lexend">Mumbai, Maharashtra - 400001</p>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer backdrop-blur-sm hover:bg-black/20 rounded-xl p-3 -m-3 transition-all duration-300">
              <div className="p-3 bg-sky-950/80 backdrop-blur-sm rounded-xl group-hover:bg-sky-800/40 transition-all duration-300 border border-sky-800/50 group-hover:border-sky-600/40 min-w-12">
                <FaPhoneAlt className="text-sky-300 text-lg" />
              </div>
              <div>
                <p className="text-gray-200 group-hover:text-sky-300 transition-colors drop-shadow font-lexend">+8801771585899</p>
                <p className="text-sky-300 text-sm drop-shadow font-poppins">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer backdrop-blur-sm hover:bg-black/20 rounded-xl p-3 -m-3 transition-all duration-300">
              <div className="p-3 bg-sky-950/80 backdrop-blur-sm rounded-xl group-hover:bg-sky-800/40 transition-all duration-300 border border-sky-800/50 group-hover:border-sky-600/40 min-w-12">
                <FaEnvelope className="text-sky-300 text-lg" />
              </div>
              <div>
                <p className="text-gray-200 group-hover:text-sky-300 transition-colors drop-shadow font-lexend">info@globalone.org</p>
                <p className="text-sky-300 text-sm drop-shadow font-lexend">support@globalone.org</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-4">
            <h3 className="text-gray-100 text-lg font-semibold mb-4 drop-shadow font-lexend">Follow Our Journey</h3>
            <div className="flex space-x-3">
              {[
                { 
                  icon: <FaFacebookF size={16} />, 
                  href: "#",
                  color: "hover:bg-blue-800/80",
                  key: "facebook"
                },
                { 
                  icon: <FaTwitter size={16} />, 
                  href: "#",
                  color: "hover:bg-blue-600/80",
                  key: "twitter"
                },
                { 
                  icon: <FaInstagram size={16} />, 
                  href: "#",
                  color: "hover:bg-pink-700/80",
                  key: "instagram"
                },
                { 
                  icon: <FaLinkedinIn size={16} />, 
                  href: "#",
                  color: "hover:bg-blue-800/80",
                  key: "linkedin"
                },
                { 
                  icon: <FaYoutube size={16} />, 
                  href: "#",
                  color: "hover:bg-red-800/80",
                  key: "youtube"
                },
              ].map((social) => (
                <Link key={social.key} href={social.href} target="_blank" rel="noopener noreferrer">
                  <span className={`bg-sky-950/80 backdrop-blur-sm ${social.color} w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-sky-800/50 hover:border-transparent shadow-lg hover:shadow-xl`}>
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-sky-800/60 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left backdrop-blur-sm bg-black/20 rounded-xl p-4 md:p-2">
            <p className="text-gray-200 text-sm drop-shadow font-lexend">
              &copy; {new Date().getFullYear()} Global One. All rights reserved. 
              <span className="inline-flex items-center ml-2">
                <FaHeart className="text-sky-400 text-xs mr-1 animate-pulse" /> 
                Making a difference together
              </span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 backdrop-blur-sm bg-black/20 rounded-xl p-4 md:p-2">
            {[
              { href: "/privacy", label: "Privacy Policy", key: "privacy" },
              { href: "/terms", label: "Terms of Service", key: "terms" },
              { href: "/refund-policy", label: "Donation Policy", key: "refund" },
              { href: "/annual-report", label: "Annual Report", key: "report" },
              { href: "/careers", label: "Careers", key: "careers" },
            ].map((item) => (
              <Link key={item.key} href={item.href} className="text-sky-300 hover:text-sky-200 transition-colors text-sm font-medium relative group drop-shadow font-lexend">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Support/Donation Banner */}
        <div className="mt-6 text-center backdrop-blur-sm bg-black/20 rounded-xl p-3">
          <p className="text-xs text-gray-300 font-poppins">
            Hope Foundation is a registered non-profit organization (Reg. No. NGO/2023/12345) | 
            80G Tax Exemption Certificate Available | <Link href="/donate" className="text-sky-400 hover:text-sky-300 underline">Support Our Cause</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;