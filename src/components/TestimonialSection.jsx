// src/components/TestimonialsSection.jsx
import React from 'react';
// import { MdOutlineStar } from 'react-icons/md'; // Si vous voulez des étoiles de notation

const testimonials = [
  { text: "TCA m'a permis de réaliser mon rêve d'ouvrir mon propre commerce. Leurs tontines sont incroyablement flexibles et adaptées à mes besoins.", author: "Marie K." },
  { text: "J'ai pu équiper toute ma maison grâce au système de collecte. C'est simple, sans stress, et le service client est top !", author: "Jean D." },
  { text: "La tontine scolaire est une bénédiction pour l'éducation de mes enfants. Je sais que leurs frais de scolarité sont sécurisés chaque année.", author: "Fatou L." },
];

function TestimonialsSection() {
  return (
    <section className="py-12 bg-white rounded-lg shadow-sm my-8 p-6 md:p-10">
      <h2 className="text-3xl font-bold text-[#333333] text-center mb-10">Témoignages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-4">
            {/* Si vous voulez des étoiles, décommentez et stylisez */}
            {/* <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => <MdOutlineStar key={i} className="text-yellow-400 text-xl" />)}
            </div> */}
            <p className="italic text-[#666666] mb-4">"{testimonial.text}"</p>
            <p className="font-semibold text-[#333333]">- {testimonial.author}</p>
          </div>
        ))}
      </div>
      {/* Indicateurs de carousel si plus de témoignages */}
      <div className="flex justify-center mt-8 space-x-2">
        <span className="w-3 h-3 bg-[#4CAF50] rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
}

export default TestimonialsSection;