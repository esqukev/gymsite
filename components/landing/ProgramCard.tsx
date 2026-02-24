"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ProgramCardProps = {
  title: string;
  subtitle: string;
  image: string;
  linkLabel: string;
  index?: number;
};

export default function ProgramCard({ title, subtitle, image, linkLabel, index = 0 }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden"
    >
      <Link href="/servicios" className="block absolute inset-0">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-[#121212]/0 group-hover:bg-[#121212]/30 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-black text-[#FEFEFE] uppercase tracking-tight">
            {title}
          </h3>
          <p className="text-[#FEFEFE]/80 mt-1 text-sm md:text-base">{subtitle}</p>
          <span className="inline-block mt-4 text-sm font-semibold text-[#4FBC01] group-hover:text-[#6dd118] transition-colors">
            {linkLabel} →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
