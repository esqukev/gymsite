"use client";

import { motion } from "framer-motion";
import { galleryImages } from "@/lib/mock-landing";

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Galería
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] relative group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#121212]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
