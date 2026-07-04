// src/components/Contact/ContactHeader.jsx
import React from 'react';
import { MdOutlineHome, MdOutlineChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ContactHeader() {
    // Couleur de fond de la zone de titre de la maquette (bleu clair/foncé)
    const headerBgClass = 'bg-[#E3F2FD] md:bg-white md:bg-gradient-to-r from-blue-50 to-blue-100'; 
    const titleColor = 'text-[#174A7C]'; // Bleu foncé

    return (
        <header className={`${headerBgClass} py-8 md:py-12 border-b border-gray-200`}>
            <div className="container mx-auto px-4 md:px-0">
                <h1 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-2`}>Contactez-Nous</h1>
                
                {/* Fil d'Ariane */}
                <nav className="flex text-sm text-[#666666] items-center space-x-1">
                    <Link to="/" className="hover:text-[#4CAF50] flex items-center">
                        <MdOutlineHome className="mr-1" /> Accueil
                    </Link>
                    <MdOutlineChevronRight className="text-lg" />
                    <span className="font-semibold text-[#333333]">Contact</span>
                </nav>
            </div>
        </header>
    );
}

export default ContactHeader;