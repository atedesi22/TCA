// src/components/TontinesList/TontineCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import * as TontineIcons from 'react-icons/md'; // Importe toutes les icônes Md*

function TontineCard({ tontine }) {
    // Dynamiser l'icône à partir du nom de l'icône dans les données
    const IconComponent = TontineIcons[tontine.icon] || TontineIcons.MdOutlineMoney; // Fallback si icône non trouvée

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition duration-300 relative border border-gray-100">
            {/* Badge Populaire */}
            {tontine.isPopular && (
                <div className="absolute top-2 left-2 bg-[#4CAF50] text-white text-xs font-bold px-2 py-1 rounded-full">
                    Populaire
                </div>
            )}

            {/* Image ou Icône de la Tontine */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                {tontine.image ? (
                    <img src={tontine.image} alt={tontine.name} className="w-full h-full object-cover" />
                ) : (
                    <IconComponent className="text-[#4CAF50] text-6xl" /> // Icône si pas d'image
                )}
            </div>

            {/* Contenu de la Carte */}
            <div className="p-4">
                <h3 className="font-bold text-[#333333] text-xl mb-2 h-14 overflow-hidden">{tontine.name}</h3>
                <p className="text-[#666666] text-sm mb-4 h-16 overflow-hidden">{tontine.shortDescription}</p>
                
                <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-[#333333] font-semibold">{tontine.minAmount.toLocaleString('fr-FR')} XAF</span>
                    <span className="text-gray-500">{tontine.duration}</span>
                </div>

                <Link 
                    to={`/tontines/${tontine.slug}`} // Lien vers la page de détails de la tontine (à créer si besoin)
                    className="block w-full bg-[#4CAF50] text-white py-2 text-center rounded-lg font-semibold hover:bg-[#388E3C] transition"
                >
                    Découvrir
                </Link>
            </div>
        </div>
    );
}

export default TontineCard;