// src/components/ProductDetail/SimilarProducts.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalOffer, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import productsData from '../../data/productsData';
// import {productsData} from '../../data/productsData'; // Import des données de produits

function SimilarProducts({ currentProductId }) {
    const [similarProducts, setSimilarProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Pour le slider manuel

    useEffect(() => {
        // Filtrer les produits similaires (ex: même catégorie, mais pas le produit actuel)
        const currentProduct = productsData.find(p => p.id === currentProductId);
        if (currentProduct) {
            const filtered = productsData.filter(
                p => p.category === currentProduct.category && p.id !== currentProductId
            );
            setSimilarProducts(filtered.slice(0, 5)); // Limiter à 5 produits pour l'exemple
        }
    }, [currentProductId]);

    // Logique de navigation du slider
    const productsPerPage = 4; // Nombre de produits visibles sur desktop
    const totalPages = Math.ceil(similarProducts.length / productsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    // Calcul des produits à afficher
    const startIndex = currentIndex * productsPerPage;
    const displayedProducts = similarProducts.slice(startIndex, startIndex + productsPerPage);
    // Pour mobile, on affichera les produits différemment (ex: un par un ou en scroll)

    if (similarProducts.length === 0) {
        return null; // Ne rien afficher s'il n'y a pas de produits similaires
    }

    return (
        <section className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#333333] mb-6">Produits Similaires</h2>
            
            <div className="relative">
                {/* Flèche Gauche (Desktop) */}
                <button 
                    onClick={prevSlide} 
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10 hover:bg-gray-300"
                >
                    <MdOutlineKeyboardArrowLeft className="text-2xl" />
                </button>

                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / productsPerPage)}%)` }}
                    >
                        {similarProducts.map((product) => (
                            <div 
                                key={product.id} 
                                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                            >
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition duration-300 relative border border-gray-100">
                                    {/* Badge Promo */}
                                    {product.isPromo && (
                                        <div className="absolute top-2 left-2 bg-[#4CAF50] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                                            <MdOutlineLocalOffer className="mr-1" /> PROMO
                                        </div>
                                    )}

                                    {/* Image */}
                                    <img 
                                        src={product.img} 
                                        alt={product.name} 
                                        className="w-full h-32 object-cover" 
                                    />

                                    {/* Contenu du Produit */}
                                    <div className="p-3">
                                        <h4 className="font-semibold text-[#333333] h-10 overflow-hidden text-sm">{product.name}</h4>
                                        <p className="text-lg font-bold text-[#4CAF50] mt-1 mb-2">{product.price.toLocaleString('fr-FR')} XAF</p>
                                        
                                        <Link 
                                            to={`/boutique/${product.name.toLowerCase().replace(/\s/g, '-')}`}
                                            className="block bg-gray-100 text-[#333333] py-1 text-center rounded-lg text-xs hover:bg-gray-200 transition"
                                        >
                                            Voir le produit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flèche Droite (Desktop) */}
                <button 
                    onClick={nextSlide} 
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10 hover:bg-gray-300"
                >
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                </button>
            </div>

            {/* Pagination Mobile/Dots (partiellement visible sur desktop pour plus de produits) */}
            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <span 
                        key={idx} 
                        className={`w-3 h-3 rounded-full cursor-pointer 
                            ${currentIndex === idx ? 'bg-[#4CAF50]' : 'bg-gray-300 hover:bg-gray-400'}`
                        }
                        onClick={() => setCurrentIndex(idx)}
                    ></span>
                ))}
            </div>
        </section>
    );
}

export default SimilarProducts;