// src/components/Catalogue/CatalogueHeader.jsx
import React from 'react';
import { MdOutlineHome, MdOutlineChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

function CatalogueHeader() {
    return (
        <header 
            className="relative h-[200px] bg-cover bg-center flex items-end p-4 md:p-8"
            style={{ backgroundImage: "url('/path/to/your/catalogue-hero-image.jpg')" }} // Remplacez par votre image de famille/client
        >
            {/* Superposition sombre/dégradée pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> 
            
            <div className="relative z-10 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Notre Catalogue de Produits</h1>
                
                {/* Fil d'Ariane */}
                <nav className="flex text-sm items-center space-x-1">
                    <Link to="/" className="hover:text-[#4CAF50] flex items-center">
                        <MdOutlineHome className="mr-1" /> Accueil
                    </Link>
                    <MdOutlineChevronRight className="text-lg" />
                    <span className="font-semibold text-white">Boutique</span>
                </nav>
            </div>
        </header>
    );
}

export default CatalogueHeader;