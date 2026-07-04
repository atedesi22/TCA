// src/components/Catalogue/FilterSidebar.jsx
import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineTune, MdOutlineCategory, MdOutlineAttachMoney, MdOutlineKeyboardArrowRight, MdOutlineGridView, MdOutlineViewList } from 'react-icons/md';
import ProductGrid from './ProductGrid';
import MobileFilterDrawer from './MobileFilterDrawer';

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

function FilterSidebar({ filteredAndSortedProducts, sortBy, searchTerm, selectedCategories, setSelectedCategories, selectedPriceRanges, setSelectedPriceRanges, onFilterChange }) {
    const [activeCategories, setActiveCategories] = useState([]);
    const [activePrices, setActivePrices] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

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




// src/components/Catalogue/FilterSidebar.jsx
// import React from 'react'; // Retirer useState si les états sont gérés par le parent
// import { MdOutlineCategory, MdOutlineAttachMoney, MdOutlineKeyboardArrowRight } from 'react-icons/md';

// const categoriesData = [ // Renommé pour éviter confusion avec `categories` du state
//     { name: 'Électroménager', count: 12 },
//     { name: 'Électronique', count: 8 },
//     { name: 'Mobilier', count: 5 },
//     { name: 'Mode', count: 2 },
// ];

// const priceRangesData = [ // Renommé pour éviter confusion
//     { label: 'Moins de 10 000 XAF', value: 'less_10k' },
//     { label: 'Plus de 50 000 XAF', value: 'more_50k' },
// ];

// function FilterSidebar({ selectedCategories, setSelectedCategories, selectedPriceRanges, setSelectedPriceRanges }) {
    
//     const toggleCategory = (name) => {
//         const newCategories = selectedCategories.includes(name)
//             ? selectedCategories.filter(c => c !== name)
//             : [...selectedCategories, name];
//         setSelectedCategories(newCategories);
//     };

//     const togglePrice = (value) => {
//         const newPrices = selectedPriceRanges.includes(value)
//             ? selectedPriceRanges.filter(p => p !== value)
//             : [...selectedPriceRanges, value];
//         setSelectedPriceRanges(newPrices);
//     };

//     return (
//         <div className="space-y-8">
//             <h3 className="text-xl font-bold text-darkText mb-4">Filtrer par</h3>

//             {/* Filtre Catégories */}
//             <div className="space-y-3">
//                 <div className="flex items-center font-semibold text-darkText mb-2">
//                     <MdOutlineCategory className="mr-2 text-xl" /> Catégories
//                 </div>
//                 {categoriesData.map((cat, index) => (
//                     <div key={index} className="flex items-center space-x-2 cursor-pointer select-none">
//                         <input
//                             type="checkbox"
//                             id={`cat-${cat.name}`}
//                             checked={selectedCategories.includes(cat.name)}
//                             onChange={() => toggleCategory(cat.name)}
//                             className="h-4 w-4 text-primaryGreen border-gray-300 rounded focus:ring-primaryGreen"
//                         />
//                         <label htmlFor={`cat-${cat.name}`} className="text-lightText hover:text-darkText transition duration-150 flex-1 flex justify-between">
//                             {cat.name} <span className="text-xs">({cat.count})</span>
//                         </label>
//                     </div>
//                 ))}
//             </div>

//             {/* Filtre Prix */}
//             <div className="space-y-3">
//                 <div className="flex items-center font-semibold text-darkText mb-2">
//                     <MdOutlineAttachMoney className="mr-2 text-xl" /> Prix
//                 </div>
//                 {priceRangesData.map((range, index) => (
//                     <div key={index} className="flex items-center space-x-2 cursor-pointer select-none">
//                         <input
//                             type="checkbox"
//                             id={`price-${range.value}`}
//                             checked={selectedPriceRanges.includes(range.value)}
//                             onChange={() => togglePrice(range.value)}
//                             className="h-4 w-4 text-primaryGreen border-gray-300 rounded focus:ring-primaryGreen"
//                         />
//                         <label htmlFor={`price-${range.value}`} className="text-lightText hover:text-darkText transition duration-150">
//                             {range.label}
//                         </label>
//                     </div>
//                 ))}
//             </div>
            
//             {/* Simulation de "Simuler maintenant" pour le mobile, si le parent le souhaite */}
//             <div className="md:hidden mt-8">
//                 <button className="bg-primaryGreen text-white w-full py-2 rounded-lg font-semibold hover:bg-darkGreen transition">
//                     Simuler maintenant
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default FilterSidebar;