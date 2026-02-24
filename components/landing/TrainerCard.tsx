"use client";

import { motion } from "framer-motion";

type TrainerCardProps = {
  name: string;
  role: string;
  image: string;
  index?: number;
};

export default function TrainerCard({ name, role, image, index = 0 }: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-[#FEFEFE]">{name}</h3>
        <p className="text-sm text-[#4FBC01] font-semibold">{role}</p>
      </div>
    </motion.div>
  );
}
