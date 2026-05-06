"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-3 max-w-xl mx-auto text-base">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
      </div>
    </motion.div>
  );
}
