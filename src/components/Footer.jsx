// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'; // Icônes de réseaux sociaux fines

function Footer() {
  return (
    <footer className="bg-[#333333] text-gray-300 py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-6 text-sm">
          <Link to="/faq" className="hover:text-white">FAQ</Link>
          <Link to="/mentions-legales" className="hover:text-white">Mentions Légales</Link>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} TCA. Tous droits réservés.</p>
        <div className="flex space-x-4 text-lg">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebookF /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;