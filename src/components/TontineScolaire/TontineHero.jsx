// src/components/TontineScolaire/TontineHero.jsx
import React from 'react';
import { MdOutlineSchool, MdOutlineHome, MdOutlineChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const navItems = [
    { name: 'Tontines', path: '/tontines' },
    { name: 'Boutique', path: '/boutique' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
];

function TontineHero() {
    // Couleur pour le header de la page détaillée, proche du bleu des maquettes.
    const headerColor = 'bg-[#174A7C]'; 

    return (
        <header>
            {/* 1. Sous-Menu de Navigation Desktop (visible sur grand écran) */}
            <nav className={`hidden md:flex ${headerColor} text-white justify-center space-x-8 py-3`}>
                {navItems.map((item, index) => (
                    <Link key={index} to={item.path} className="font-medium hover:text-gray-300">
                        {item.name}
                    </Link>
                ))}
                <Link to="/se-connecter" className="font-medium hover:text-gray-300">Se connecter</Link>
                <Link to="/s-inscrire" className="font-medium hover:text-gray-300">S'inscrire</Link>
            </nav>

            {/* 2. Zone de Titre de la Tontine */}
            <div className="bg-white py-10 md:py-16 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-0 flex flex-col items-center text-center">
                    <MdOutlineSchool className={`text-6xl text-${headerColor.replace('bg-','')}-600 mb-4`} />
                    <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">Tontine Scolaire</h1>
                    
                    {/* Fil d'Ariane */}
                    <nav className="flex text-sm text-[#666666] items-center space-x-1">
                        <Link to="/" className="hover:text-[#4CAF50] flex items-center">
                            <MdOutlineHome className="mr-1" /> Accueil
                        </Link>
                        <MdOutlineChevronRight className="text-lg" />
                        <Link to="/tontines" className="hover:text-[#4CAF50]">
                            Tontines
                        </Link>
                        <MdOutlineChevronRight className="text-lg" />
                        <span className="font-semibold text-[#333333]">Tontine Scolaire</span>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default TontineHero;