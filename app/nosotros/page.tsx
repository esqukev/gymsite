"use client";

import { motion } from "framer-motion";
import { Heart, Zap, TrendingUp } from "lucide-react";
import { aboutValues, stats } from "@/lib/mock-landing";

const iconMap = { Heart, Zap, TrendingUp };

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Nosotros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#FEFEFE]/80 max-w-2xl mx-auto mb-16"
        >
          Filosofía: comunidad, disciplina y un entorno de alto rendimiento. No somos solo un gimnasio — somos un movimiento.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {aboutValues.map((v, i) => {
            const Icon = iconMap[v.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center"
              >
                {Icon && <Icon className="w-10 h-10 text-[#D3E639] mx-auto mb-4" />}
                <h2 className="font-bold text-lg text-[#FEFEFE] mb-2">{v.title}</h2>
                <p className="text-[#FEFEFE]/70 text-sm">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-8 text-center"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <span className="block text-4xl md:text-5xl font-bold text-[#4FBC01]">{s.value}</span>
              <span className="text-[#FEFEFE]/70">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
