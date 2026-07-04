// src/components/ServicesSection.jsx
import React from 'react';
import { MdOutlineAccountBalanceWallet, MdOutlineShoppingCart, MdOutlineSchool, MdOutlineLightbulb } from 'react-icons/md'; 
// Les icônes MdOutline... sont fines et conviennent à la charte.

const services = [
  { icon: <MdOutlineAccountBalanceWallet className="text-4xl text-[#4CAF50] mb-3" />, title: "Épargne sécurisée", description: "Dépôts & retraits flexibles" },
  { icon: <MdOutlineShoppingCart className="text-4xl text-[#4CAF50] mb-3" />, title: "Achats facilités", description: "Deviens propriétaire facilement" },
  { icon: <MdOutlineSchool className="text-4xl text-[#4CAF50] mb-3" />, title: "Tontine Scolaire", description: "Prépare l'avenir de tes enfants" },
  { icon: <MdOutlineLightbulb className="text-4xl text-[#4CAF50] mb-3" />, title: "Investissement rentable", description: "Vos projets prennent vie" },
];

function ServicesSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-[#333333] text-center mb-10">Nos Services en Bref</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center transform hover:scale-105 transition duration-300">
            {service.icon}
            <h3 className="text-xl font-semibold text-[#333333] mb-2">{service.title}</h3>
            <p className="text-[#666666]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;