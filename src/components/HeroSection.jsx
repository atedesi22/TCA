// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section 
      className="relative h-[450px] md:h-[550px] bg-cover bg-center flex items-center justify-center text-center p-4 md:p-8"
      style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')" }} // Remplacez par votre image
    >
      {/* Superposition sombre pour le texte lisible */}
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      
      <div className="relative z-10 text-white max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          TCA : Votre Partenaire de Confiance <br /> pour Épargner et Réaliser vos Projets
        </h1>
        <p className="text-base md:text-lg mb-8">
          Épargnez pour l'avenir, investissez dans ce qui vous fait rêver, financez vos passions.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link 
            to="/tontines" 
            className="bg-primaryGreen text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-darkGreen transition duration-300"
          >
            Découvrir nos Tontines
          </Link>
          <Link 
            to="/boutique" 
            className="border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-primaryGreen transition duration-300"
          >
            Voir nos Produits
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;