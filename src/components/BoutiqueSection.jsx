// src/components/BoutiqueSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function BoutiqueSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-[#333333] text-center mb-10">Notre Boutique</h2>
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Témoignage côté gauche */}
        <div className="lg:w-1/3 p-6 flex flex-col justify-center bg-[#F5F5F5] lg:bg-white border-b lg:border-r border-gray-200">
          <div className="flex items-center mb-4">
            <img 
              src="/path/to/your/client-avatar.jpg" // Remplacez par l'avatar
              alt="Client Avatar" 
              className="w-12 h-12 rounded-full mr-3" 
            />
            <div>
              <p className="font-semibold text-[#333333]">Oulée à TCA, j'ai pu financer</p>
              <p className="text-sm text-[#666666]">J'ai pu financer mes études !</p>
            </div>
          </div>
          <p className="text-[#666666] italic text-sm">"Grâce à TCA, j'ai pu financer mes études et acheter mon matériel informatique sans stress. Le paiement en collecte est une bénédiction."</p>
        </div>

        {/* Produits populaires côté droit */}
        <div className="lg:w-2/3 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <img 
              src="/path/to/your/product-laptop.jpg" // Remplacez par l'image
              alt="Laptop" 
              className="w-20 h-20 object-cover rounded-md" 
            />
            <div>
              <h4 className="font-semibold text-[#333333]">159 000 XAF</h4>
              <p className="text-sm text-[#666666]">Écran 15.6", Core i5, 8Go RAM</p>
              <span className="text-xs text-[#4CAF50] font-medium">Électronique & Bureautique</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
            <img 
              src="/path/to/your/product-bike.jpg" // Remplacez par l'image
              alt="VTT" 
              className="w-20 h-20 object-cover rounded-md" 
            />
            <div>
              <h4 className="font-semibold text-[#333333]">23 000 XAF</h4>
              <p className="text-sm text-[#666666]">VTT, 26 pouces, Vert</p>
              <span className="text-xs text-[#4CAF50] font-medium">Sport & Loisirs</span>
            </div>
          </div>
          
          <div className="col-span-full text-center mt-4">
            <Link 
              to="/boutique" 
              className="bg-[#4CAF50] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#388E3C] transition duration-300"
            >
              Découvrir la Boutique
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoutiqueSection;