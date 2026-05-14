"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, MapPin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-emerald-400 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponível para oportunidades
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            <span className="text-slate-100">Matheus</span>
            <br />
            <span className="text-slate-100">Leandro</span>
            <br />
            <span className="gradient-text">Silva</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-violet-300 font-semibold font-mono mb-4"
          >
            {"<"} Desenvolvedor Backend {"/>"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-base leading-relaxed mb-4 max-w-md"
          >
            Desenvolvedor Júnior focado em backend com experiência em{" "}
            <span className="text-violet-300 font-medium">PHP, Delphi, PL/SQL</span>{" "}
            e{" "}
            <span className="text-cyan-400 font-medium">Oracle</span>. Comprometido com
            performance, estabilidade e código de qualidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-slate-500 text-sm mb-8"
          >
            <MapPin size={14} className="text-violet-400" />
            <span>Londrina, PR — Brasil</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <button onClick={scrollToProjects} className="btn-primary">
              Ver Projetos
              <ArrowDown size={16} />
            </button>
            <button onClick={scrollToContact} className="btn-outline">
              <Mail size={16} />
              Contato
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/Matheusl-Silva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-violet-400 transition-colors rounded-lg hover:bg-violet-500/10"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/matheus-silva-241b8a276"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:matleandrosilva@gmail.com"
              className="p-2 text-slate-500 hover:text-emerald-400 transition-colors rounded-lg hover:bg-emerald-500/10"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            {/* Glow blur */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-500/20 blur-2xl scale-125 pointer-events-none" />

            {/* Gradient border ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 p-[2px] animate-glow">
              <div className="w-full h-full rounded-full bg-[#0d0d1a] p-1">
                <div className="w-full h-full rounded-full overflow-hidden animate-float">
                  <Image
                    src="/profile.png"
                    width={320}
                    height={320}
                    alt="Matheus Leandro"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* PHP — topo centro */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-2 bg-[#0d0d1a]/95 border border-violet-500/40 rounded-xl shadow-xl backdrop-blur-sm whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
              <span className="text-xs font-mono font-semibold text-violet-300">PHP</span>
            </motion.div>

            {/* Oracle — baixo direita */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-4 flex items-center gap-1.5 px-3 py-2 bg-[#0d0d1a]/95 border border-cyan-500/40 rounded-xl shadow-xl backdrop-blur-sm whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-xs font-mono font-semibold text-cyan-300">Oracle</span>
            </motion.div>

            {/* Docker — baixo esquerda */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 flex items-center gap-1.5 px-3 py-2 bg-[#0d0d1a]/95 border border-emerald-500/40 rounded-xl shadow-xl backdrop-blur-sm whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-xs font-mono font-semibold text-emerald-300">Docker</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-violet-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProfilePlaceholder() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-cyan-900/20" />
      {/* Silhouette */}
      <svg
        viewBox="0 0 200 220"
        className="w-4/5 relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <ellipse cx="100" cy="68" rx="36" ry="38" fill="rgba(139,92,246,0.35)" />
        {/* Neck */}
        <rect x="88" y="100" width="24" height="20" rx="6" fill="rgba(139,92,246,0.28)" />
        {/* Body / shoulders */}
        <path
          d="M30 220 Q35 155 60 140 Q75 132 100 130 Q125 132 140 140 Q165 155 170 220Z"
          fill="rgba(109,40,217,0.35)"
        />
        {/* Shirt highlight */}
        <path
          d="M72 175 Q100 165 128 175 L132 220 H68Z"
          fill="rgba(6,182,212,0.12)"
        />
        {/* Code icon on shirt */}
        <text
          x="100"
          y="202"
          textAnchor="middle"
          fontSize="18"
          fill="rgba(139,92,246,0.5)"
          fontFamily="monospace"
        >
          {`</>`}
        </text>
      </svg>
      {/* Label */}
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <span className="text-[10px] text-slate-500 font-mono bg-[#080812]/60 px-2 py-0.5 rounded">
          substitua pela sua foto
        </span>
      </div>
    </div>
  );
}
