// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TontineSection from '../components/TontineSection';
import BoutiqueSection from '../components/BoutiqueSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';
import TestimonialsSection from '../components/TestimonialSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-4 py-8 md:px-0">
        <ServicesSection />
        <TontineSection />
        <BoutiqueSection />
        <TestimonialsSection />
      </main>
      <CTASection />
      <Footer />
      <MobileNavbar /> {/* Barre de navigation mobile fixe en bas */}
    </div>
  );
}

export default HomePage;