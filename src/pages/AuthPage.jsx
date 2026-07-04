// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import AuthForm from '../components/Auth/AuthForm';

function AuthPage() {
    // La maquette montre un design centré simple, le fond peut être gris clair comme le reste du site
    // La barre de navigation est conservée.

    return (
        <div className="min-h-screen bg-lightGray font-sans flex flex-col">
            <Navbar /> 
            
            <main className="flex-grow flex items-center justify-center p-4">
                <AuthForm />
            </main>

            {/* Pied de page simplifié et MobileNavbar conservés */}
            <footer className="w-full text-center py-4 text-xs text-lightText border-t border-gray-200">
                <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
                    <a href="/cgu" className="hover:text-darkText">Conditions Générales d'Utilisation</a>
                    <a href="/politique-confidentialite" className="hover:text-darkText">Politique de Confidentialité</a>
                </div>
            </footer>

            <MobileNavbar />
        </div>
    );
}

export default AuthPage;