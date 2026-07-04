// src/components/Auth/AuthForm.jsx
import React, { useState } from 'react';
import { MdOutlinePerson, MdOutlineLock, MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true); // true pour Se Connecter, false pour S'inscrire

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = isLogin ? "Connexion" : "Inscription";
        alert(`Tentative de ${action} (Simulation)`);
        // Logique d'authentification ou d'inscription
    };

    const FormContent = ({ isLogin }) => {
        if (isLogin) {
            return (
                <>
                    {/* Champ Nom d'utilisateur */}
                    <div className="relative">
                        <MdOutlinePerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Nom d'utilisateur" 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            required
                        />
                    </div>
                    
                    {/* Champ Mot de passe */}
                    <div className="relative">
                        <MdOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="password" 
                            placeholder="Mot de passe" 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            required
                        />
                    </div>

                    {/* Options (Se souvenir de moi / Mot de passe oublié) */}
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" className="h-4 w-4 text-[#4CAF50] border-gray-300 rounded focus:ring-[#4CAF50]" />
                            <label htmlFor="rememberMe" className="ml-2 text-[#666666]">Se souvenir de moi</label>
                        </div>
                        <Link to="/mot-de-passe-oublie" className="text-[#4CAF50] hover:underline">
                            Mot de passe oublié ?
                        </Link>
                    </div>

                    {/* Bouton de Connexion */}
                    <button 
                        type="submit" 
                        className="w-full bg-[#174A7C] text-white py-3 rounded-lg font-semibold hover:bg-darkBlue transition duration-300 shadow-md"
                    >
                        Se Connecter
                    </button>

                    {/* Lien vers Inscription */}
                    <p className="text-center text-sm text-[#666666]">
                        Pas encore de compte? <button type="button" onClick={() => setIsLogin(false)} className="text-[#4CAF50] hover:underline font-semibold">S'inscrire maintenant</button>
                    </p>
                </>
            );
        } else {
            return (
                <>
                    {/* Champ Nom d'utilisateur */}
                    <div className="relative">
                        <MdOutlinePerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Nom d'utilisateur" 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            required
                        />
                    </div>

                    {/* Champ Email */}
                    <div className="relative">
                        <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            required
                        />
                    </div>

                    {/* Champ Mot de passe */}
                    <div className="relative">
                        <MdOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="password" 
                            placeholder="Mot de passe" 
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                            required
                        />
                    </div>

                    {/* Bouton d'Inscription */}
                    <button 
                        type="submit" 
                        className="w-full bg-[#4CAF50] text-white py-3 rounded-lg font-semibold hover:bg-[#388E3C] transition duration-300 shadow-md"
                    >
                        S'inscrire
                    </button>

                    {/* Lien vers Connexion */}
                    <p className="text-center text-sm text-[#666666]">
                        Déjà un compte? <button type="button" onClick={() => setIsLogin(true)} className="text-[#174A7C] hover:underline font-semibold">Se connecter</button>
                    </p>
                </>
            );
        }
    };

    return (
        <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl">
            {/* Onglets */}
            <div className="flex mb-6 border-b border-gray-200">
                <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 text-center py-2 font-semibold transition duration-300 ${isLogin 
                        ? 'text-[#174A7C] border-b-2 border-[#174A7C]' 
                        : 'text-[#666666] hover:text-[#333333]'}`
                    }
                >
                    Se Connecter
                </button>
                <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 text-center py-2 font-semibold transition duration-300 ${!isLogin 
                        ? 'text-[#4CAF50] border-b-2 border-[#4CAF50]' 
                        : 'text-[#666666] hover:text-[#333333]'}`
                    }
                >
                    S'inscrire
                </button>
            </div>
            
            <h2 className="text-xl font-bold text-[#333333] mb-6 text-center">
                {isLogin ? "Connexion à votre compte TCA" : "Créer votre compte TCA"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <FormContent isLogin={isLogin} />
            </form>
        </div>
    );
}

export default AuthForm;