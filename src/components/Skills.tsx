"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";
import { Code2, Database, Wrench, BookOpen, Globe } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  color: "violet" | "cyan" | "emerald" | "amber" | "rose";
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    icon: Code2,
    color: "violet",
    skills: [
      { name: "PHP", level: 80 },
      { name: "Delphi", level: 75 },
      { name: "PL/SQL", level: 78 },
      { name: "Node.js", level: 55 },
    ],
  },
  {
    category: "Banco de Dados",
    icon: Database,
    color: "cyan",
    skills: [
      { name: "Oracle DB", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Otimização", level: 72 },
    ],
  },
  {
    category: "Ferramentas & Infra",
    icon: Wrench,
    color: "emerald",
    skills: [
      { name: "Docker", level: 65 },
      { name: "Git", level: 80 },
      { name: "REST APIs", level: 78 },
      { name: "JSON", level: 88 },
    ],
  },
  {
    category: "Frontend",
    icon: Globe,
    color: "amber",
    skills: [
      { name: "HTML / CSS", level: 65 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 55 },
    ],
  },
  {
    category: "Cursos & Extras",
    icon: BookOpen,
    color: "rose",
    skills: [
      { name: "Java (básico + OO)", level: 50 },
      { name: "C# avançado + OO", level: 55 },
      { name: "ReactJS (NLW)", level: 55 },
    ],
  },
];

const colorMap = {
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    bar: "from-violet-600 to-violet-400",
    track: "bg-violet-500/10",
  },
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    bar: "from-cyan-600 to-cyan-400",
    track: "bg-cyan-500/10",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    bar: "from-emerald-600 to-emerald-400",
    track: "bg-emerald-500/10",
  },
  amber: {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    bar: "from-amber-600 to-amber-400",
    track: "bg-amber-500/10",
  },
  rose: {
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    bar: "from-rose-600 to-rose-400",
    track: "bg-rose-500/10",
  },
};

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-500/30" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Skills"
          title="Habilidades Técnicas"
          subtitle="Tecnologias e ferramentas que utilizo no dia a dia para criar soluções robustas."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: gi * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-9 h-9 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}
                  >
                    <Icon size={16} className={c.text} />
                  </div>
                  <h3 className={`font-semibold text-sm ${c.text}`}>
                    {group.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-slate-300 font-medium font-mono">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono ${c.text} font-semibold`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-1.5 rounded-full ${c.track} overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: gi * 0.08 + si * 0.06 + 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${c.bar} shadow-sm`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Idiomas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇧🇷</span>
            <div>
              <p className="text-sm font-semibold text-slate-200">Português</p>
              <p className="text-xs text-slate-500">Nativo</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#1e1e3f]" />
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇺🇸</span>
            <div>
              <p className="text-sm font-semibold text-slate-200">Inglês</p>
              <p className="text-xs text-slate-500">Básico — leitura técnica</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
