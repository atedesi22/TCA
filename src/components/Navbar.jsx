// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5'; // Icône de loupe fine
import { MdOutlineShoppingCart } from 'react-icons/md'; // Icône de panier fine

function Navbar() {
  return (
    <nav className="hidden md:flex bg-white shadow-sm py-4 px-8 items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/path/to/your/logo.svg" alt="TCA Logo" className="h-8" /> {/* Remplacez par votre logo */}
          <span className="text-xl font-bold text-[#4CAF50]">TCA</span>
        </Link>
        <div className="flex space-x-6 text-[#333333] font-medium">
          <Link to="/tontines" className="hover:text-[#4CAF50]">Tontines</Link>
          <Link to="/boutique" className="hover:text-[#4CAF50]">Boutique</Link>
          <Link to="/a-propos" className="hover:text-[#4CAF50]">À Propos</Link>
          <Link to="/contact" className="hover:text-[#4CAF50]">Contact</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-[#333333] hover:text-[#4CAF50]">
          <IoSearchOutline className="text-xl" />
        </button>
        <button className="text-[#333333] hover:text-[#4CAF50]">
          <MdOutlineShoppingCart className="text-xl" />
        </button>
        <Link to="/se-connecter" className="bg-[#4CAF50] text-white px-5 py-2 rounded-full hover:bg-[#388E3C] transition duration-300">
          Se connecter
        </Link>
        <Link to="/s-inscrire" className="border border-[#4CAF50] text-[#4CAF50] px-5 py-2 rounded-full hover:bg-[#4CAF50] hover:text-white transition duration-300">
          S'inscrire
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;