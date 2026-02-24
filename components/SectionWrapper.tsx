"use client";

import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  viewportOnce?: boolean;
};

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
  viewportOnce = true,
}: SectionWrapperProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: "-80px" }}
      variants={defaultVariants}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
