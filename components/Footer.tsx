import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const footerLinks = [
  { href: "/servicios", label: "Clases" },
  { href: "/entrenadores", label: "Entrenadores" },
  { href: "/contacto", label: "Contacto" },
  { href: "/contacto", label: "Prueba gratis" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-[#FEFEFE] py-16 px-6 border-t border-[#FEFEFE]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-2xl font-black text-[#FEFEFE]">
              FFO <span className="text-[#4FBC01]">GYM</span>
            </p>
            <p className="mt-3 text-sm text-[#FEFEFE]/60 max-w-xs">
              Premium urban performance. Train harder.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#FEFEFE]/50 mb-4">
              Enlaces
            </p>
            <ul className="space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[#FEFEFE]/70 hover:text-[#4FBC01] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#FEFEFE]/50 mb-4">
              Redes
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ffo_gym/" target="_blank" rel="noopener noreferrer" className="text-[#FEFEFE]/60 hover:text-[#4FBC01] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/FitnessforoneS.A" target="_blank" rel="noopener noreferrer" className="text-[#FEFEFE]/60 hover:text-[#4FBC01] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#FEFEFE]/60 hover:text-[#4FBC01] transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#FEFEFE]/60 hover:text-[#4FBC01] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#FEFEFE]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FEFEFE]/40">
          <p>© {new Date().getFullYear()} FFO GYM. Placeholder site.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#FEFEFE]/70 transition-colors">Términos</Link>
            <Link href="#" className="hover:text-[#FEFEFE]/70 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
