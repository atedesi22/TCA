import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#4CAF50', // sdfsdUn vert pour votre charte
        darkGreen: '#388E3C',
        lightGray: '#F5F5F5',
        darkText: '#333333',
        lightText: '#666666',
        ctaGreen: '#7ED321', // Vert un peu plus vif pour les CTA
      },
    },
  },
   plugins: [react(),
    tailwindcss(),
    ],
})
