// src/components/TontineDetail/TontineContent.jsx
import React from 'react';
import { MdOutlineCheckCircleOutline, MdOutlineQuestionAnswer } from 'react-icons/md';
import { IoTimerOutline, IoDocumentTextOutline, IoWalletOutline } from 'react-icons/io5';

// Données fictives d'étapes (adaptées de la maquette "Comment ça marche ?")
const steps = [
    { num: 1, title: 'Ouvrir votre compte', description: 'Remplissez le formulaire en ligne.' },
    { num: 2, title: 'Déposer votre argent', description: 'Versement régulier par mobile money ou virement.' },
    { num: 3, title: 'Retirer à la période', description: 'Recevez votre capital et vos gains à l\'échéance.' },
];

function TontineContent({ tontine }) {
    // Les caractéristiques clés peuvent être générées dynamiquement ou définies spécifiquement
    // Ici, nous utilisons les données de la Tontine Scolaire en exemple, adaptées
    const keyFeatures = [
        { label: 'Type de compte', value: 'Compte bloqué' },
        { label: 'Montant minimum', value: `${tontine.minAmount.toLocaleString('fr-FR')} XAF (non remboursable)` },
        { label: 'Durée de placement', value: tontine.duration },
        { label: 'Fréquence de dépôt', value: 'Définie avec l\'équipe' },
        { label: 'Retraits', value: 'Uniquement à l\'échéance du blocage' },
        { label: 'Souplesse', value: 'Rattrapage en période de déblocage' },
    ];

    const benefits = [
        'Sécurité de fonds', 
        'Épargne dédiée (objectif)', 
        'Tranquillité d\'esprit', 
        'Accompagnement personnalisé'
    ];

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Colonne Gauche (Contenu Principal) */}
            <div className="lg:col-span-2 space-y-8">
                {/* 1. Description/Bénéfices */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-[#333333] mb-4">
                        {tontine.name === 'Tontine Scolaire' ? "Préparez sereinement les études de vos enfants" : `Les bénéfices de la ${tontine.name}`}
                    </h2>
                    <p className="text-[#666666] mb-6 leading-relaxed">
                        {tontine.longDescription}
                    </p>

                    {/* Liste des Avantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center text-[#333333] font-medium">
                                <MdOutlineCheckCircleOutline className="text-[#4CAF50] mr-2 text-xl flex-shrink-0" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Comment ça Marche ? */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-[#333333] mb-6">Comment ça Marche ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {steps.map(step => (
                            <div key={step.num} className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                                <div className="w-12 h-12 flex items-center justify-center bg-[#4CAF50] text-white rounded-full mx-auto mb-3 text-xl font-bold">
                                    {step.num}
                                </div>
                                <h3 className="font-semibold text-[#333333] mb-1">{step.title}</h3>
                                <p className="text-sm text-[#666666]">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. CTA direct (au lieu d'une section Produits Similaires) */}
                <div className="bg-lightGreen p-6 rounded-lg text-center shadow-lg">
                    <h3 className="text-xl font-bold text-[#333333] mb-3">Prêt à démarrer votre avenir financier ?</h3>
                    <div className="flex justify-center space-x-4">
                        <Link to="/simulation" className="bg-[#333333] text-white px-6 py-2 rounded-lg font-semibold hover:bg-black transition duration-300">
                            Simuler maintenant
                        </Link>
                        <button className="border border-[#333333] text-[#333333] px-6 py-2 rounded-lg font-semibold hover:bg-[#333333] hover:text-white transition duration-300">
                            Contacter un Conseiller
                        </button>
                    </div>
                </div>
            </div>

            {/* Colonne Droite (Caractéristiques et FAQ) */}
            <div className="lg:col-span-1 space-y-6">
                
                {/* Caractéristiques Clés */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-[#333333] mb-4">Caractéristiques Clés</h3>
                    <ul className="space-y-3 text-[#666666]">
                        {keyFeatures.map((feature, index) => (
                            <li key={index} className="flex border-b border-gray-100 pb-2">
                                <span className="font-medium text-[#333333] flex-1">{feature.label}:</span>
                                <span className="text-right">{feature.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Questions Fréquentes (FAQ) */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-[#333333] mb-4">Questions Fréquentes</h3>
                    <div className="space-y-3">
                        {['Qui peut souscrire ?', 'Comment est calculé mon rendement ?', 'Puis-je retirer avant terme ?'].map((question, index) => (
                            <div key={index} className="flex justify-between items-center border border-gray-200 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                                <span className="text-[#333333] font-medium">{question}</span>
                                <MdOutlineChevronRight className="text-gray-500 text-xl" />
                            </div>
                        ))}
                        <Link to={`/faq?tontine=${tontine.slug}`} className="block text-center text-[#4CAF50] font-semibold mt-4 hover:underline">
                            Voir toutes les questions
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TontineContent;