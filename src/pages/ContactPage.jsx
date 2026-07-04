// src/pages/ContactPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactHeader from '../components/Contact/ContactHeader';

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Navbar /> 
      
      <ContactHeader />
      
      <main className="container mx-auto px-4 py-8 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne du formulaire (2/3 de la largeur sur grand écran) */}
            <div className="lg:col-span-2">
                <ContactForm />
            </div>

            {/* Colonne des infos (1/3 de la largeur sur grand écran) */}
            <div className="lg:col-span-1">
                <ContactInfo />
            </div>
        </div>
      </main>

      <CTASection />
      <Footer />
      <MobileNavbar />
    </div>
  );
}

export default ContactPage;