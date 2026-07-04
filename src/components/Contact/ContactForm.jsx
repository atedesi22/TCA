// src/components/Contact/ContactForm.jsx
import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        telephone: '',
        subject: 'general',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
        alert('Votre message a été envoyé ! (Simulation)');
        // Logique d'envoi vers un backend
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#333333] mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nom Complet et Email (Maquette) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        type="text" 
                        name="fullName"
                        placeholder="Nom complet" 
                        className="p-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        className="p-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {/* Téléphone (Maquette) */}
                <input 
                    type="tel" 
                    name="telephone"
                    placeholder="Téléphone" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                    value={formData.telephone}
                    onChange={handleChange}
                />

                {/* Question Type et Sujet (Maquette) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-sm text-[#666666] mb-1">Type de question:</label>
                        <select 
                            id="subject"
                            name="subject"
                            className="p-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            value={formData.subject}
                            onChange={handleChange}
                        >
                            <option value="general">Question générale</option>
                            <option value="support">Support Technique</option>
                            <option value="commercial">Commercial/Vente</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-[#666666]">Support Technique</span>
                        <button 
                            type="button" 
                            className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#388E3C] transition duration-300"
                        >
                            Voir nos FAQ
                        </button>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="text-sm text-[#666666] mb-1">Message:</label>
                    <textarea 
                        id="message"
                        name="message"
                        placeholder="Votre message" 
                        rows="5" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50] resize-none"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                
                {/* Bouton d'Envoi */}
                <button 
                    type="submit" 
                    className="bg-[#333333] text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition duration-300"
                >
                    Envoyer le Message
                </button>
            </form>
        </div>
    );
}

export default ContactForm;