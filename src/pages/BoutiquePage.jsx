// src/pages/BoutiquePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
// import MobileNavbar from '../components/MobileNavbar';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import CatalogueHeader from '../components/Catalogue/CatalogueHeader';
import CatalogueContent from '../components/Catalogue/CatalogueContent';

function BoutiquePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Navbar /> 
      
      <CatalogueHeader />
      
      <main className="container mx-auto px-4 py-8 md:px-0">
        <CatalogueContent />
      </main>

      <CTASection />
      <Footer />
      {/* <MobileNavbar /> */}
    </div>
  );
}

export default BoutiquePage;