'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-gray-900">
          FFO <span className="text-green-600">GYM</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`transition-colors font-medium ${isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
          >
            Inicio
          </Link>
          <Link 
            href="/instalaciones" 
            className={`transition-colors font-medium ${isActive('/instalaciones') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
          >
            Instalaciones
          </Link>
          <Link 
            href="/equipo" 
            className={`transition-colors font-medium ${isActive('/equipo') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
          >
            Equipo
          </Link>
          <Link 
            href="/modalidades" 
            className={`transition-colors font-medium ${isActive('/modalidades') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
          >
            Modalidades
          </Link>
          <Link 
            href="/intizom" 
            className={`transition-colors font-medium ${isActive('/intizom') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
          >
            Intizom
          </Link>
          <Link 
            href="/contacto" 
            className={`transition-colors font-medium ${isActive('/contacto') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
          >
            Contacto
          </Link>
        </div>
        <Link 
          href="/contacto" 
          className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Reservar Cita
        </Link>
      </div>
    </nav>
  );
}

