// src/components/ProductDetail/ProductInfo.jsx
import React, { useState } from 'react';
import { MdOutlineLocalOffer, MdOutlineCheckCircleOutline, MdOutlineMonetizationOn, MdOutlineCreditCard } from 'react-icons/md';

function ProductInfo({ product }) {
    const [selectedImage, setSelectedImage] = useState(product.img); // Image principale affichée
    const [paymentMethod, setPaymentMethod] = useState('cash'); // 'cash' ou 'echelonne'

    // Images miniatures (exemple)
    const galleryImages = [
        product.img,
        '/img/smartphone-side.jpg', // Remplacez par les vrais chemins
        '/img/smartphone-back.jpg',
    ];

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Colonne Gauche : Images et Description */}
            <div className="flex flex-col">
                {/* Image Principale */}
                <div className="relative mb-4 flex justify-center items-center bg-gray-100 rounded-lg p-4 h-96">
                    <img 
                        src={selectedImage} 
                        alt={product.name} 
                        className="max-h-full max-w-full object-contain" 
                    />
                    {/* Badge Nouveau */}
                    <div className="absolute top-4 left-4 bg-[#4CAF50] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        Nouveau
                    </div>
                </div>

                {/* Galerie de Miniatures (si plusieurs images) */}
                <div className="flex space-x-2 overflow-x-auto justify-center">
                    {galleryImages.map((imgSrc, index) => (
                        <img 
                            key={index}
                            src={imgSrc} 
                            alt={`${product.name} - Vue ${index + 1}`} 
                            className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 
                                ${selectedImage === imgSrc ? 'border-[#4CAF50]' : 'border-transparent'}`}
                            onClick={() => setSelectedImage(imgSrc)}
                        />
                    ))}
                </div>

                {/* Description du produit (pour mobile et en bas pour desktop) */}
                <div className="mt-8 lg:hidden">
                    <h3 className="text-xl font-bold text-[#333333] mb-3">Description</h3>
                    <p className="text-[#666666] leading-relaxed">{product.description}</p>
                </div>
            </div>

            {/* Colonne Droite : Infos, Prix, Options de Paiement */}
            <div className="flex flex-col space-y-6">
                <h2 className="text-3xl font-bold text-[#333333]">{product.name}</h2>
                <div className="flex items-center space-x-2 text-sm text-[#4CAF50] font-semibold">
                    <MdOutlineLocalOffer /> PROMO {/* Badge Promo comme dans les maquettes */}
                </div>
                
                <p className="text-[#666666] text-lg leading-relaxed">
                    Le dernier cri de technologie, compétent, avec appareil photo incroyable.
                </p>

                <p className="text-3xl font-bold text-[#4CAF50]">{product.price.toLocaleString('fr-FR')} XAF</p>
                <p className="text-[#4CAF50] font-semibold flex items-center">
                    <MdOutlineCheckCircleOutline className="mr-2" /> En stock
                </p>

                {/* Détails du Produit */}
                <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-3">Détails du Produit</h3>
                    <ul className="space-y-2 text-[#666666] text-sm">
                        <li>• Marque: TCA Mobility (Nom du mobile)</li>
                        <li>• Marque: TCA Mlitima X</li>
                        <li>• Modèle: 12 mois</li>
                        <li>• Stockage: 128 Go</li>
                    </ul>
                </div>

                {/* Options de Paiement */}
                <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-3">Options de Paiement</h3>
                    <div className="flex space-x-4 mb-4">
                        <button 
                            className={`px-6 py-2 rounded-full font-semibold transition duration-300 
                                ${paymentMethod === 'cash' ? 'bg-[#4CAF50] text-white' : 'border border-gray-300 text-[#333333] hover:bg-[#F5F5F5]'}`}
                            onClick={() => setPaymentMethod('cash')}
                        >
                            <MdOutlineMonetizationOn className="inline-block mr-2" /> Paiement Cash
                        </button>
                        <button 
                            className={`px-6 py-2 rounded-full font-semibold transition duration-300 
                                ${paymentMethod === 'echelonne' ? 'bg-[#4CAF50] text-white' : 'border border-gray-300 text-[#333333] hover:bg-[#F5F5F5]'}`}
                            onClick={() => setPaymentMethod('echelonne')}
                        >
                            <MdOutlineCreditCard className="inline-block mr-2" /> Paiement Échelonné (Collecte)
                        </button>
                    </div>

                    {paymentMethod === 'echelonne' && (
                        <div className="bg-gray-100 p-4 rounded-lg text-[#666666] text-sm">
                            <p className="mb-2">Versement Initial: Livraison à 60%, solde en tontine.</p>
                            <button className="bg-[#7ED321] text-white px-6 py-2 rounded-full hover:bg-[#388E3C] transition duration-300">
                                Simuler mon paiement
                            </button>
                        </div>
                    )}
                    {paymentMethod === 'cash' && (
                        <p className="bg-gray-100 p-4 rounded-lg text-[#666666] text-sm">
                            Paiement intégral à la livraison ou au retrait.
                        </p>
                    )}
                </div>

                <p className="text-[#666666] text-sm mt-4">Livraison estimée: 3-5 jours ouvrés</p>

                 {/* Description du produit (pour desktop et en bas pour mobile) */}
                 <div className="mt-8 hidden lg:block">
                    <h3 className="text-xl font-bold text-[#333333] mb-3">Description</h3>
                    <p className="text-[#666666] leading-relaxed">{product.description}</p>
                </div>
            </div>
        </section>
    );
}

export default ProductInfo;