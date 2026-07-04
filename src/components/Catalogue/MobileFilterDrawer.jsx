// src/components/Catalogue/MobileFilterDrawer.jsx
import React from 'react';
import FilterSidebar from './FilterSidebar';
import { MdOutlineClose } from 'react-icons/md';

function MobileFilterDrawer({ isOpen, onClose, selectedCategories, setSelectedCategories, selectedPriceRanges, setSelectedPriceRanges }) {
    return (
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
                    onClick={onClose}
                />
            )}

            <div 
                className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
                }
            >
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                    <h3 className="text-xl font-bold text-[#333333]">Filtrer par</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-[#333333]">
                        <MdOutlineClose className="text-2xl" />
                    </button>
                </div>
                
                {/* Passer les props au FilterSidebar */}
                <FilterSidebar 
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    selectedPriceRanges={selectedPriceRanges}
                    setSelectedPriceRanges={setSelectedPriceRanges}
                />

                <div className="mt-8 pt-4 border-t">
                    <button
                        className="w-full bg-[#4CAF50] text-white py-2 rounded-lg font-semibold hover:bg-[#388E3C] transition"
                        onClick={onClose} 
                    >
                        Voir les produits
                    </button>
                </div>
            </div>
        </>
    );
}

export default MobileFilterDrawer;