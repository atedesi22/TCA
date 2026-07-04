// src/pages/TontineDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import TontineDetailHeader from '../components/TontineDetail/TontineDetailHeader';
import TontineContent from '../components/TontineDetail/TontineContent';
import tontinesData from '../data/tontinesData'; // Import des données de tontines

function TontineDetailPage() {
  const { tontineSlug } = useParams(); // Récupère le slug de l'URL
  const [tontine, setTontine] = useState(null);

  useEffect(() => {
    // Simuler la récupération des données de la tontine par son slug
    const foundTontine = tontinesData.find(t => t.slug === tontineSlug);
    setTontine(foundTontine);
  }, [tontineSlug]);

  if (!tontine) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] font-sans flex items-center justify-center">
        <p className="text-[#333333] text-lg">Chargement des détails de la tontine ou tontine introuvable...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Navbar /> 
      
      <TontineDetailHeader tontine={tontine} />
      
      <main className="container mx-auto px-4 py-8 md:px-0">
        <TontineContent tontine={tontine} />
      </main>

      <CTASection />
      <Footer />
      <MobileNavbar />
    </div>
  );
}

export default TontineDetailPage;