// src/pages/ProductDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ProductDetailHeader from '../components/ProductDetail/ProductDetailHeader';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import SimilarProducts from '../components/ProductDetail/SimilarProducts';
import productsData from '../data/productData';
// import productsData from '../data/productsData'; // Import des données de produits

function ProductDetailPage() {
  const { productSlug } = useParams(); // Récupère le slug de l'URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // En production, vous feriez un appel API ici pour récupérer les détails du produit
    // En attendant, on filtre nos données fictives
    const foundProduct = productsData.find(p => p.name.toLowerCase().replace(/\s/g, '-') === productSlug);
    setProduct(foundProduct);
  }, [productSlug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] font-sans flex items-center justify-center">
        <p className="text-[#333333] text-lg">Chargement du produit ou produit introuvable...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Navbar /> 
      
      <ProductDetailHeader productName={product.name} productCategory={product.category} />
      
      <main className="container mx-auto px-4 py-8 md:px-0">
        <ProductInfo product={product} />
        <SimilarProducts currentProductId={product.id} />
      </main>

      <CTASection />
      <Footer />
      <MobileNavbar />
    </div>
  );
}

export default ProductDetailPage;