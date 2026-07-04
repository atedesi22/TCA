// src/components/TontineScolaire/TontineDetails.jsx
import React from 'react';
import { MdOutlineCheckCircleOutline, MdOutlineAccessTime, MdOutlineMood, MdOutlineLock, MdOutlineSavings, MdOutlineQuestionAnswer } from 'react-icons/md';

// Liste des avantages (maquette de gauche)
const advantages = [
    { icon: <MdOutlineLock />, text: "Sécurité de fonds" },
    { icon: <MdOutlineSavings />, text: "Épargne dédiée" },
    { icon: <MdOutlineMood />, text: "Tranquillité d'esprit" },
    { icon: <MdOutlineCheckCircleOutline />, text: "Accompagnement personnalisé" },
];

// Étapes de fonctionnement (maquette du bas)
const steps = [
    { num: 1, text: "Ouvrez votre compte." },
    { num: 2, text: "Déposez régulièrement." },
    { num: 3, text: "Retirez à période de déblocage." },
];

// Questions (maquette de droite)
const faqs = [
    "Qui peut souscrire ?",
    "Comment effectuer un retrait ?",
    "Quels sont les frais ?",
];

function TontineDetails() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 md:mt-10">
            {/* Colonne 1 : Avantages et Fonctionnement */}
            <div className="lg:col-span-2 space-y-8">
                {/* 1. Section Préparation/Description */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-[#333333] mb-4">
                        Préparez sereinement l'avenir éducatif de vos enfants
                    </h2>
                    <p className="text-[#666666] mb-6">
                        La Tontine Scolaire de TCA est l'épargne qui vous permet de planifier les études de vos enfants en toute sécurité. 
                        C'est un compte bloqué jusqu'à la période définie par l'entreprise, vous assurant que l'argent sera disponible au moment de la rentrée scolaire.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {advantages.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 text-[#333333] font-medium">
                                {React.cloneElement(item.icon, { className: "text-xl text-[#4CAF50]" })}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Section Comment ça Marche ? */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold text-[#333333] mb-4">Comment ça Marche ?</h2>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {steps.map((step, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg">
                                <div className="w-10 h-10 bg-[#4CAF50] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                                    {step.num}
                                </div>
                                <p className="text-sm text-[#333333]">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Colonne 2 : Caractéristiques et FAQs */}
            <div className="lg:col-span-1 space-y-8">
                {/* 1. Caractéristiques Clés */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-[#333333] mb-4 border-b pb-2">Caractéristiques Clés</h3>
                    <ul className="space-y-3 text-sm text-[#666666]">
                        <li className="flex items-start">
                            <MdOutlineAccessTime className="text-[#4CAF50] mt-1 mr-2 flex-shrink-0" /> 
                            Type de compte: **Bloqué**
                        </li>
                        <li className="flex items-start">
                            <MdOutlineAccessTime className="text-[#4CAF50] mt-1 mr-2 flex-shrink-0" />
                            **500 XAF** (non-retirable) - Fonds de caisse initial
                        </li>
                        <li className="flex items-start">
                            <MdOutlineAccessTime className="text-[#4CAF50] mt-1 mr-2 flex-shrink-0" />
                            Frais gestion mensuelle: **500 XAF** (prélèvement auto.)
                        </li>
                        <li className="flex items-start">
                            <MdOutlineAccessTime className="text-[#4CAF50] mt-1 mr-2 flex-shrink-0" />
                            Retraits: **Uniquement à déblocage**
                        </li>
                        <li className="flex items-start">
                            <MdOutlineAccessTime className="text-[#4CAF50] mt-1 mr-2 flex-shrink-0" />
                            Période définie par TCA (généralement la rentrée)
                        </li>
                    </ul>
                </div>

                {/* 2. Questions Fréquentes */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-[#333333] mb-4 border-b pb-2">Questions Fréquentes</h3>
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0 cursor-pointer hover:bg-[#F5F5F5] px-2 -mx-2 rounded">
                                <p className="text-[#333333]">{faq}</p>
                                <MdOutlineChevronRight className="text-lg text-[#4CAF50]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TontineDetails;