"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Activity,
  Apple,
  Flame,
  Wind,
} from "lucide-react";
import { services } from "@/lib/mock-landing";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Personal Training": Dumbbell,
  "Semi-Personalized Coaching": Users,
  "Functional Training": Activity,
  "Nutrition Guidance": Apple,
  "Strength & Conditioning": Flame,
  "Recovery & Mobility": Wind,
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Servicios
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#FEFEFE]/80 max-w-xl mx-auto mb-16"
        >
          Desde entrenamiento 1 a 1 hasta programas grupales — te tenemos cubierto.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.title] || Dumbbell;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.08 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(79, 188, 1, 0.25)" }}
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 hover:border-[#4FBC01]/50 transition-colors"
              >
                <Icon className="w-10 h-10 text-[#4FBC01] mb-4" />
                <h2 className="font-bold text-lg text-[#FEFEFE] mb-2">{s.title}</h2>
                <p className="text-[#FEFEFE]/70 text-sm">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
