// src/pages/TontineScolairePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
// import MobileNavbar from '../components/MobileNavbar';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import TontineHero from '../components/TontineScolaire/TontineHero';
import TontineDetails from '../components/TontineScolaire/TontineDetails';

function TontineScolairePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Navbar /> 
      {/* La Navbar prend en charge l'affichage desktop (1) */}

      <TontineHero />
      
      <main className="container mx-auto px-4 py-8 md:px-0">
        <TontineDetails />
      </main>

      {/* Réutilisation de la section CTA et du Footer */}
      <CTASection />
      <Footer />
      {/* <MobileNavbar />  */}
      {/* La MobileNavbar prend en charge l'affichage mobile (2) */}
    </div>
  );
}

export default TontineScolairePage;