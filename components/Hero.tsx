'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
          alt="FFO Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-green-600/90 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            El gimnasio de quien exige lo mejor 🔥
          </span>
        </div>
        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
          FFO <span className="text-green-500">GYM</span>
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-4 max-w-3xl mx-auto text-gray-200">
          {/* Espacio para eslogan */}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-lg text-gray-300">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Rutinas enfocadas en tus objetivos
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Profesionales altamente calificados
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contacto" className="px-10 py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-2xl">
            Reservar Cita
          </Link>
          <Link href="/instalaciones" className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30">
            Ver Instalaciones
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

