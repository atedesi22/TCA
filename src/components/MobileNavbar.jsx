// src/components/MobileNavbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineHome, MdOutlineStorefront, MdOutlineSavings, MdOutlineContactMail } from 'react-icons/md';

function MobileNavbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <MdOutlineHome className="text-2xl" />, label: "Accueil" },
    { path: "/boutique", icon: <MdOutlineStorefront className="text-2xl" />, label: "Boutique" },
    { path: "/tontines", icon: <MdOutlineSavings className="text-2xl" />, label: "Tontines" },
    { path: "/contact", icon: <MdOutlineContactMail className="text-2xl" />, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden z-50">
      <div className="flex justify-around py-3">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col items-center text-xs font-medium 
              ${location.pathname === item.path ? 'text-[#4CAF50]' : 'text-gray-500 hover:text-[#4CAF50]'}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default MobileNavbar;