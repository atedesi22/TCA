// src/components/Contact/ContactInfo.jsx
import React from 'react';
import { MdOutlineLocationOn, MdOutlinePhone, MdOutlineEmail, MdOutlineAccessTime } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function ContactInfo() {
    return (
        <div className="space-y-6">
            {/* Nos Coordonnées */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-[#333333] mb-4 border-b pb-2">Nos Coordonnées</h2>
                <ul className="space-y-3 text-[#666666]">
                    <li className="flex items-start">
                        <MdOutlineLocationOn className="text-[#4CAF50] text-xl mt-1 mr-3 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-[#333333]">Adresse du Siège:</p>
                            <p>Adet du Titres, 10 minutes Kaxoloaa</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <MdOutlinePhone className="text-[#4CAF50] text-xl mt-1 mr-3 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-[#333333]">Téléphone:</p>
                            <p>Tél: 1012 275333(lundi au vendredi)</p>
                            <p>Tél: 555 5746(Samedi)</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <MdOutlineEmail className="text-[#4CAF50] text-xl mt-1 mr-3 flex-shrink-0" />
                        <p>gestion-electronique</p>
                    </li>
                    <li className="flex items-start">
                        <MdOutlineAccessTime className="text-[#4CAF50] text-xl mt-1 mr-3 flex-shrink-0" />
                        <p>Horaires d'ouverture: L-V 8h-18h</p>
                    </li>
                </ul>
            </div>

            {/* Trouver de Agence (Carte) */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-[#333333] mb-4 border-b pb-2">Trouvez de Agence</h2>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                    {/* Simulation de la carte Google Maps */}
                    <img 
                        src="/path/to/your/map-screenshot.jpg" // Remplacez par une image de la carte ou intégrez un iframe/bibliothèque
                        alt="Localisation de l'agence sur une carte"
                        className="w-full h-full object-cover"
                    />
                    <div className="p-2 text-xs text-center text-[#666666] bg-gray-50 border-t border-gray-200">
                        Carte fournie par Google Maps (Intégration requise)
                    </div>
                </div>
            </div>

            {/* Suivez-nous (Réseaux Sociaux) */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-[#333333] mb-4 border-b pb-2">Suivez-nous</h2>
                <div className="flex space-x-4 justify-start">
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#3b5998] text-white rounded-full hover:bg-opacity-80 transition">
                        <FaFacebookF className="text-lg" />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#00acee] text-white rounded-full hover:bg-opacity-80 transition">
                        <FaTwitter className="text-lg" />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#0072b1] text-white rounded-full hover:bg-opacity-80 transition">
                        <FaLinkedinIn className="text-lg" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;