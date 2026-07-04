// src/pages/TontinesListPage.jsx
import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import TontinesListHeader from '../components/TontinesList/TontinesListHeader';
import TontineCard from '../components/TontinesList/TontineCard';
import tontinesData from '../data/tontinesData'; // Import des données de tontines
import { MdOutlineTune } from 'react-icons/md';
import { IoSearchCircleOutline } from 'react-icons/io5';

// Liste des options de filtre/tri pour les tontines (peut être plus élaborée)
const tontineTypes = ['Toutes', 'Épargne', 'Investissement', 'Immobilier', 'Santé'];

function TontinesListPage() {
    const [selectedType, setSelectedType] = useState('Toutes');
    const [sortBy, setSortBy] = useState('name_asc'); // 'name_asc', 'name_desc', 'popular'
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const tontinesPerPage = 6; // Nombre de tontines par page

    const filteredAndSortedTontines = useMemo(() => {
        let tempTontines = [...tontinesData];

        // 1. Filtrer par type
        if (selectedType !== 'Toutes') {
            tempTontines = tempTontines.filter(t => t.type === selectedType);
        }

        // 2. Filtrer par terme de recherche
        if (searchTerm) {
            tempTontines = tempTontines.filter(tontine =>
                tontine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tontine.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 3. Trier les tontines
        switch (sortBy) {
            case 'name_asc':
                tempTontines.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name_desc':
                tempTontines.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'popular':
                tempTontines.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)); // Les populaires d'abord
                break;
            default:
                break;
        }

        return tempTontines;
    }, [selectedType, searchTerm, sortBy]);

    // Logique de pagination
    const indexOfLastTontine = currentPage * tontinesPerPage;
    const indexOfFirstTontine = indexOfLastTontine - tontinesPerPage;
    const currentTontines = filteredAndSortedTontines.slice(indexOfFirstTontine, indexOfLastTontine);
    const totalPages = Math.ceil(filteredAndSortedTontines.length / tontinesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="min-h-screen bg-[#F5F5F5] font-sans">
            <Navbar /> 
            
            <TontinesListHeader />
            
            <main className="container mx-auto px-4 py-8 md:px-0">
                {/* Barre de recherche et filtres (desktop) / Bouton filtre (mobile) */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                    {/* Recherche */}
                    <div className="relative w-full md:w-auto flex-grow max-w-md">
                        <input
                            type="text"
                            placeholder="Rechercher une tontine..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <IoSearchCircleOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    </div>

                    {/* Filtres Type (Desktop) */}
                    <div className="hidden md:flex items-center space-x-2">
                        <span className="text-[#666666] font-medium">Type:</span>
                        <select 
                            className="p-2 border border-gray-300 rounded-md focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            value={selectedType}
                            onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }}
                        >
                            {tontineTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    {/* Tri (Desktop) */}
                    <div className="hidden md:flex items-center space-x-2">
                        <span className="text-[#666666] font-medium">Trier par:</span>
                        <select 
                            className="p-2 border border-gray-300 rounded-md focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            value={sortBy}
                            onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
                        >
                            <option value="name_asc">Nom (A-Z)</option>
                            <option value="name_desc">Nom (Z-A)</option>
                            <option value="popular">Populaires</option>
                        </select>
                    </div>

                    {/* Bouton Filtre/Tri Mobile */}
                    <button 
                        className="md:hidden flex items-center bg-[#4CAF50] text-white px-4 py-2 rounded-lg w-full justify-center"
                        // Vous pourriez ouvrir un tiroir de filtres/tri ici, comme pour la boutique
                        onClick={() => alert("Ouvrir les options de filtre/tri mobile")}
                    >
                        <MdOutlineTune className="mr-2 text-xl" /> Filtres & Tri
                    </button>
                </div>


                {/* Grille des Tontines */}
                {currentTontines.length === 0 ? (
                    <p className="text-center text-[#666666] text-lg mt-8">Aucune tontine trouvée pour vos critères.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentTontines.map(tontine => (
                            <TontineCard key={tontine.id} tontine={tontine} />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => (i + 1)).map(page => (
                            <button
                                key={page}
                                onClick={() => paginate(page)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold 
                                    ${currentPage === page ? 'bg-[#4CAF50] text-white' : 'bg-gray-200 text-[#333333] hover:bg-gray-300'}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </main>

            <CTASection />
            <Footer />
            <MobileNavbar />
        </div>
    );
}

export default TontinesListPage;