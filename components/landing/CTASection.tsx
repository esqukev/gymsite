"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CTASectionProps = {
  headline: string;
  subline?: string;
  buttonLabel: string;
  buttonHref?: string;
};

export default function CTASection({
  headline,
  subline,
  buttonLabel,
  buttonHref = "/contacto",
}: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24 md:py-32 px-6 bg-[#4FBC01]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#121212] uppercase tracking-tight leading-[1.05]">
          {headline}
        </h2>
        {subline && (
          <p className="mt-6 text-xl md:text-2xl text-[#121212]/80 font-medium max-w-2xl mx-auto">
            {subline}
          </p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            href={buttonHref}
            className="inline-block px-12 py-5 rounded-full font-bold text-lg bg-[#121212] text-[#4FBC01] hover:bg-[#0d0d0d] transition-all hover:scale-105"
          >
            {buttonLabel}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
