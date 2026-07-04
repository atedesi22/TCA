// src/components/Catalogue/FilterSidebar.jsx
import React, { useState } from 'react';
import { MdOutlineCategory, MdOutlineAttachMoney, MdOutlineKeyboardArrowRight, MdOutlineGridView, MdOutlineViewList } from 'react-icons/md';

const categories = [
    { name: 'Électroménager', count: 12 },
    { name: 'Électronique', count: 8 },
    { name: 'Mobilier', count: 5 },
    { name: 'Mode', count: 2 },
];

const priceRanges = [
    { label: 'Moins de 10 000 XAF', value: 'low' },
    { label: 'Plus de 50 000 XAF', value: 'high' },
];

function FilterSidebar({ onFilterChange }) {
    const [activeCategories, setActiveCategories] = useState([]);
    const [activePrices, setActivePrices] = useState([]);

    const toggleCategory = (name) => {
        const newCategories = activeCategories.includes(name)
            ? activeCategories.filter(c => c !== name)
            : [...activeCategories, name];
        setActiveCategories(newCategories);
        onFilterChange({ categories: newCategories });
    };

    const togglePrice = (value) => {
        const newPrices = activePrices.includes(value)
            ? activePrices.filter(p => p !== value)
            : [...activePrices, value];
        setActivePrices(newPrices);
        onFilterChange({ prices: newPrices });
    };

    return (
        <section className="flex relative">
            {/* 1. Sidebar des Filtres (Desktop) */}
            <div className="hidden lg:block w-72 pr-8 sticky top-0 self-start">
                <FilterSidebar
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    selectedPriceRanges={selectedPriceRanges}
                    setSelectedPriceRanges={setSelectedPriceRanges}
                />
            </div>

            {/* 2. Contenu Principal et Grille de Produits */}
            <div className="flex-1 min-w-0">
                {/* Barre de Recherche et Tri */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="relative w-full md:w-auto flex-grow max-w-sm">
                        <input
                            type="text"
                            placeholder="Recherche: Tontines" // Texte de placeholder de la maquette
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    </div>

                    <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
                        <span className="text-[#666666] font-medium hidden md:block">Trier par:</span> {/* Masqué sur mobile si bouton filtre visible */}
                        <select 
                            className="p-2 border border-gray-300 rounded-md focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="pertinence">Pertinence</option>
                            <option value="price_asc">Prix Croissant</option>
                            <option value="price_desc">Prix Décroissant</option>
                        </select>
                        {/* Icônes de Vue (Grid/List) */}
                        <div className="hidden md:flex items-center space-x-2 text-xl text-gray-500">
                            <MdOutlineGridView className="text-[#4CAF50] cursor-pointer" />
                            <MdOutlineViewList className="cursor-pointer hover:text-[#4CAF50]" />
                        </div>
                    </div>
                    {/* Bouton Filtre Mobile (visible sur mobile) */}
                    <button 
                        className="lg:hidden flex items-center bg-[#4CAF50] text-white px-4 py-2 rounded-lg w-full justify-center md:w-auto"
                        onClick={() => setIsFilterOpen(true)}
                    >
                        <MdOutlineTune className="mr-2 text-xl" /> Filtrer
                    </button>
                </div>

                {/* Grille de Produits */}
                <ProductGrid products={filteredAndSortedProducts} />
            </div>

            {/* 3. Tiroir de Filtres (Mobile) */}
            <MobileFilterDrawer 
                isOpen={isFilterOpen} 
                onClose={() => setIsFilterOpen(false)}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedPriceRanges={selectedPriceRanges}
                setSelectedPriceRanges={setSelectedPriceRanges}
            />
</section>
    );
}

export default FilterSidebar;

