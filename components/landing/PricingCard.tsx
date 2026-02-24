"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  note: string;
  featured?: boolean;
  cta: string;
  index?: number;
};

export default function PricingCard({
  name,
  price,
  period,
  note,
  featured = false,
  cta,
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 md:p-10 ${
        featured
          ? "bg-[#4FBC01] text-[#121212] ring-2 ring-[#4FBC01] shadow-[0_0_60px_rgba(79,188,1,0.3)]"
          : "bg-[#1a1a1a] border border-[#FEFEFE]/10 text-[#FEFEFE]"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-wider opacity-80">{name}</p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-5xl md:text-6xl font-black">{price}</span>
        <span className="text-xl font-medium opacity-80">{period}</span>
      </div>
      <p className="mt-3 text-sm opacity-90">{note}</p>
      <Link
        href="/contacto"
        className={`mt-8 inline-block w-full py-4 rounded-xl font-bold text-center transition-all hover:scale-[1.02] ${
          featured
            ? "bg-[#121212] text-[#4FBC01] hover:bg-[#0d0d0d]"
            : "bg-[#4FBC01] text-[#121212] hover:bg-[#6dd118]"
        }`}
      >
        {cta}
      </Link>
    </motion.div>
  );
}
