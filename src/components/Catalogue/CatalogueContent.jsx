// src/components/Catalogue/CatalogueContent.jsx
import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import MobileFilterDrawer from './MobileFilterDrawer';
import ProductGrid from './ProductGrid';
import { MdOutlineTune, IoSearchOutline } from 'react-icons/md';

function CatalogueContent() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [sortBy, setSortBy] = useState('pertinence'); // pertinence, price_asc, price_desc

    // Produits initial (peut être chargé d'une API)
    const [allProducts, setAllProducts] = useState(productsData);

    // Effet pour simuler le chargement des produits si besoin
    useEffect(() => {
        // Ici, on pourrait faire un fetch('/api/products')
        setAllProducts(productsData); 
    }, []);

    // **Logique de Filtrage et de Tri**
    const filteredAndSortedProducts = useMemo(() => {
        let tempProducts = [...allProducts];

        // 1. Filtrer par terme de recherche
        if (searchTerm) {
            tempProducts = tempProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. Filtrer par catégories sélectionnées
        if (selectedCategories.length > 0) {
            tempProducts = tempProducts.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        // 3. Filtrer par tranches de prix sélectionnées
        if (selectedPriceRanges.length > 0) {
            tempProducts = tempProducts.filter(product => {
                if (selectedPriceRanges.includes('less_10k') && product.price < 10000) return true;
                if (selectedPriceRanges.includes('more_50k') && product.price > 50000) return true;
                // Ajoutez d'autres tranches de prix ici si nécessaire
                return false; // Si aucune tranche de prix correspond
            });
        }

        // 4. Trier les produits
        switch (sortBy) {
            case 'price_asc':
                tempProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                tempProducts.sort((a, b) => b.price - a.price);
                break;
            case 'pertinence':
            default:
                // Pour la pertinence, on peut laisser tel quel ou ajouter une logique de tri par défaut
                break;
        }

        return tempProducts;
    }, [allProducts, searchTerm, selectedCategories, selectedPriceRanges, sortBy]);


    // Fonction fictive pour gérer le changement de filtres
    const handleFilterChange = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
        // Logique pour rafraîchir les produits
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

export default CatalogueContent;