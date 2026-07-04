// src/components/TontineDetail/TontineDetailHeader.jsx
import React from 'react';
import { MdOutlineHome, MdOutlineChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as TontineIcons from 'react-icons/md'; 

function TontineDetailHeader({ tontine }) {
    // Dynamiser l'icône
    const IconComponent = TontineIcons[tontine.icon] || TontineIcons.MdOutlineMoney; 

    return (
        <header className="bg-white py-8 md:py-12 border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    {/* Icône de la Tontine */}
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <IconComponent className="text-[#174A7C] text-4xl" /> {/* Utilisation du bleu foncé TCA */}
                    </div>

                    {/* Titre et Fil d'Ariane */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">{tontine.name}</h1>
                        
                        {/* Fil d'Ariane */}
                        <nav className="flex text-sm text-[#666666] items-center space-x-1">
                            <Link to="/" className="hover:text-[#4CAF50] flex items-center">
                                <MdOutlineHome className="mr-1" /> Accueil
                            </Link>
                            <MdOutlineChevronRight className="text-lg" />
                            <Link to="/tontines" className="hover:text-[#4CAF50]">Tontines</Link>
                            <MdOutlineChevronRight className="text-lg" />
                            <span className="font-semibold text-[#333333]">{tontine.name}</span>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TontineDetailHeader;