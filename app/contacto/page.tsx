"use client";

import { motion } from "framer-motion";
import { MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Contacto
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-[#FEFEFE]/90 mb-2">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl bg-[#121212]/60 border border-white/20 text-[#FEFEFE] placeholder-[#FEFEFE]/50 focus:border-[#4FBC01] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#FEFEFE]/90 mb-2">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-xl bg-[#121212]/60 border border-white/20 text-[#FEFEFE] placeholder-[#FEFEFE]/50 focus:border-[#4FBC01] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#FEFEFE]/90 mb-2">Teléfono</label>
              <input
                type="tel"
                placeholder="+34 600 000 000"
                className="w-full px-4 py-3 rounded-xl bg-[#121212]/60 border border-white/20 text-[#FEFEFE] placeholder-[#FEFEFE]/50 focus:border-[#4FBC01] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#FEFEFE]/90 mb-2">Mensaje</label>
              <textarea
                rows={4}
                placeholder="Tu mensaje..."
                className="w-full px-4 py-3 rounded-xl bg-[#121212]/60 border border-white/20 text-[#FEFEFE] placeholder-[#FEFEFE]/50 focus:border-[#4FBC01] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold bg-[#4FBC01] text-[#121212] hover:bg-[#6dd118] transition-all glow-green"
            >
              Enviar mensaje
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl overflow-hidden bg-white/5 border border-white/20 h-[300px] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4 text-[#FEFEFE]/60">
              <MapPin className="w-12 h-12" />
              <p>Google Maps (mock)</p>
              <p className="text-sm">Calle Fitness 123, Madrid</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#4FBC01] hover:border-[#4FBC01] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#4FBC01] hover:border-[#4FBC01] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#4FBC01] hover:border-[#4FBC01] transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
