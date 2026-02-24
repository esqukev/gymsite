"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Clases" },
  { href: "/entrenadores", label: "Entrenadores" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(18,18,18,0)", "rgba(18,18,18,0.95)"]);
  const navBorder = useTransform(scrollY, [0, 80], ["rgba(254,254,254,0)", "rgba(254,254,254,0.08)"]);

  return (
    <motion.header
      style={{
        backgroundColor: navBg,
        borderBottomColor: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent py-4 px-6 transition-colors"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-black text-[#FEFEFE] tracking-tight hover:text-[#4FBC01] transition-colors"
        >
          FFO <span className="text-[#4FBC01]">GYM</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                pathname === href ? "text-[#4FBC01]" : "text-[#FEFEFE]/90 hover:text-[#4FBC01]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full bg-[#4FBC01] text-[#121212] hover:bg-[#6dd118] transition-all hover:scale-105"
        >
          Únete
        </Link>
      </div>
    </motion.header>
  );
}
