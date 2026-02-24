"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 pb-24 pt-32 w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#D3E639] font-semibold tracking-[0.2em] uppercase text-sm mb-6"
        >
          Premium urban performance
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-tighter text-[#FEFEFE] leading-[0.9] uppercase"
        >
          Train <br /> harder.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-xl md:text-2xl text-[#FEFEFE]/90 max-w-lg font-medium"
        >
          No limits. No excuses. Just results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            href="/contacto"
            className="inline-block px-10 py-5 rounded-full font-bold text-lg bg-[#4FBC01] text-[#121212] hover:bg-[#6dd118] transition-all hover:scale-105 shadow-[0_0_40px_rgba(79,188,1,0.4)]"
          >
            Start free trial
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-[#FEFEFE]/40 flex items-start justify-center pt-2"
        >
          <ChevronDown className="w-4 h-4 text-[#FEFEFE]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
