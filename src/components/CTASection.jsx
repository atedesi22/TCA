// src/components/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="py-16 bg-[#7ED321] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre avenir financier ?</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Link 
          to="/s-inscrire" 
          className="bg-[#333333] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-black transition duration-300"
        >
          S'inscrire Maintenant
        </Link>
        <Link 
          to="/contact" 
          className="border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#7ED321] transition duration-300"
        >
          Nous Contacter
        </Link>
      </div>
    </section>
  );
}

export default CTASection;