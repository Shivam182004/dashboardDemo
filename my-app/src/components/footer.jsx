import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-white">
          MyCompany
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="/" aria-label="Twitter" className="hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" aria-label="Facebook" className="hover:text-white transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" aria-label="Instagram" className="hover:text-white transition">
            <i className="fab fa-instagram"></i>
          </a>
         </div> 
      </div>

      {/* Footer bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
