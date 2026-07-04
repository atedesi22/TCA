// src/components/TontineSection.jsx
import React from 'react';
import { MdOutlineAccountBalanceWallet, MdOutlineSchool, MdOutlineEventNote, MdOutlineSecurity, MdOutlineHandshake, MdOutlineCalendarMonth } from 'react-icons/md';

const tontines = [
  { icon: <MdOutlineAccountBalanceWallet className="text-3xl text-[#4CAF50] mb-2" />, title: "Tontine Simple", description: "Liberté de dépôt & retrait." },
  { icon: <MdOutlineSchool className="text-3xl text-[#4CAF50] mb-2" />, title: "Tontine Scolaire", description: "Prépare la rentrée." },
  { icon: <MdOutlineHandshake className="text-3xl text-[#4CAF50] mb-2" />, title: "Tontine Investissement", description: "Deviens actionnaire." },
  { icon: <MdOutlineCalendarMonth className="text-3xl text-[#4CAF50] mb-2" />, title: "Tontine Fin d'année", description: "Tes projets pour les fêtes." },
  { icon: <MdOutlineSecurity className="text-3xl text-[#4CAF50] mb-2" />, title: "Tontine d'Assurance", description: "Épargne sécurisée." },
  { icon: <MdOutlineEventNote className="text-3xl text-[#4CAF50] mb-2" />, title: "Tontine Islamique", description: "Épargne mensuelle." }, // Icône ajustée
];

function TontineSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-[#333333] text-center mb-10">Nos Tontines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tontines.map((tontine, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm flex items-center space-x-4 transform hover:scale-105 transition duration-300">
            <div className="flex-shrink-0">
              {tontine.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#333333]">{tontine.title}</h3>
              <p className="text-sm text-[#666666]">{tontine.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TontineSection;