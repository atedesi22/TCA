// src/components/Catalogue/ProductGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalOffer, MdOutlineShoppingCart } from 'react-icons/md';

// Le composant ne gère plus sa propre liste de produits, il reçoit une prop `products`
function ProductGrid({ products }) { // Reçoit les produits filtrés et triés
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.length === 0 ? (
                <p className="col-span-full text-center text-[#666666] text-lg">Aucun produit ne correspond à votre recherche.</p>
            ) : (
                products.map((product, index) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition duration-300 relative">
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
                            className="w-full h-48 object-cover" 
                        />

                        {/* Contenu du Produit */}
                        <div className="p-4">
                            <h4 className="font-semibold text-[#333333] h-12 overflow-hidden">{product.name}</h4>
                            <p className="text-xl font-bold text-[#4CAF50] mt-2 mb-3">{product.price.toLocaleString('fr-FR')} XAF</p> {/* Formatage du prix */}
                            
                            <div className="flex space-x-2">
                                <Link 
                                    to={`/boutique/${product.name.toLowerCase().replace(/\s/g, '-')}`}
                                    className="flex-1 bg-gray-100 text-[#333333] py-2 text-center rounded-lg text-sm hover:bg-gray-200 transition"
                                >
                                    Voir le produit
                                </Link>
                                <button className="bg-[#4CAF50] text-white p-2 rounded-lg hover:bg-[#388E3C] transition">
                                    <MdOutlineShoppingCart className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
            
            {/* Pagination (à adapter si le nombre de produits change) */}
            <div className="col-span-full flex justify-center mt-6">
                <div className="flex space-x-2">
                    {[1, 2, 3].map(page => ( // Exemple de 3 pages
                        <button key={page} className={`w-8 h-8 rounded-full ${page === 1 ? 'bg-[#4CAF50] text-white' : 'bg-gray-200 text-[#333333] hover:bg-gray-300'}`}>
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductGrid;