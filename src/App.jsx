// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import TontinesPage from './pages/TontinesPage'; // Page à créer
import BoutiquePage from './pages/BoutiquePage'; // Page à créer
// import AboutPage from './pages/AboutPage'; // Page à créer
import ContactPage from './pages/ContactPage'; // Page à créer
import TontineScolairePage from './pages/TontineScolairePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AuthPage from './pages/AuthPage';
import TontinesListPage from './pages/TontinesListPage';
import TontineDetailPage from './pages/TontineDetailPage'; // Nouveau composant

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/tontines" element={<TontinesPage />} /> */}
        <Route path="/tontines/scolaire" element={<TontineScolairePage />} />
         <Route path="/boutique" element={<BoutiquePage />} />
         <Route path="/boutique/:productSlug" element={<ProductDetailPage />} />
        {/* <Route path="/a-propos" element={<AboutPage />} /> */}
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/se-connecter" element={<AuthPage />} />
        <Route path="/tontines" element={<TontinesListPage />} />
        <Route path="/tontines/:tontineSlug" element={<TontineDetailPage />} />
        Ajoutez d'autres routes au fur et à mesure
      </Routes>
    </Router>
  );
}

export default App;