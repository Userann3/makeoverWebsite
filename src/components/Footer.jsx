import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import LOGO2 from '../assets/LOGO2.png'
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-rose-50 to-indigo-50 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Logo + Description */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="mb-6">
            {/* Sample logo image - replace with your actual logo */}
            <img 
              src={LOGO2} 
              alt="Makeup Studio Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-gray-700 mb-6">
            At " Pawan Saini Makeovers ", we believe beauty begins with confidence. 
            Our professional artists create personalized looks that enhance your 
            natural features for any occasion.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-rose-500 hover:text-rose-600 transition">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-rose-500 hover:text-rose-600 transition">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-rose-500 hover:text-rose-600 transition">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-rose-500 hover:text-rose-600 transition">
              <FaPinterestP className="text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Portfolio</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider">Our Services</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Bridal Makeup</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Editorial Makeup</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Special Effects</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Makeup Lessons</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition">Skincare</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaPhone className="text-rose-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                1800-121-3637 <br />
                +91-7052-101-786
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-rose-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                info@glamourmakeup.com 
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-rose-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                1247/Plot No. 39, <br />
                LHB Colony, Kanpur
              </span>
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider">Reach Us At</h3>
          <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.867026964454!2d-111.92263768479643!3d33.58193668073017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b739e1ad6e2ff%3A0x1cb3db9c5e1777e4!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1688720564917!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-8 border-t border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Pawan saini makeovers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;