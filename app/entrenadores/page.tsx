"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import { trainers } from "@/lib/mock-landing";

export default function EntrenadoresPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Nuestros entrenadores
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#FEFEFE]/80 max-w-xl mx-auto mb-16"
        >
          Entrenadores certificados de élite. Gente real, resultados reales.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(79, 188, 1, 0.15)" }}
              className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden group"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-bold text-[#FEFEFE]">{t.name}</h2>
                <p className="text-[#4FBC01] text-sm font-medium">{t.specialty}</p>
                <p className="text-[#FEFEFE]/70 text-sm mt-1">{t.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
