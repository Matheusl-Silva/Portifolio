"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Code2,
  Server,
  Database,
} from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    color: "violet",
    title: "Experiência Profissional",
    text: "Atuando como Desenvolvedor de Sistemas Júnior na Solus Saúde desde março de 2026, com trajetória de crescimento desde estágio.",
  },
  {
    icon: GraduationCap,
    color: "cyan",
    title: "Formação Acadêmica",
    text: "Pós-graduação em Engenharia de Software em andamento na UEL, com graduação em Análise e Desenvolvimento de Sistemas concluída.",
  },
  {
    icon: MapPin,
    color: "emerald",
    title: "Londrina — PR",
    text: "Baseado em Londrina, Paraná. Aberto a oportunidades remotas ou híbridas em todo o Brasil.",
  },
];

const techStack = [
  { group: "Backend", icon: Code2, color: "violet", items: ["PHP", "Delphi", "Node.js", "PL/SQL"] },
  { group: "Database", icon: Database, color: "cyan", items: ["Oracle", "SQL", "Queries", "Otimização"] },
  { group: "Infra & Tools", icon: Server, color: "emerald", items: ["Docker", "Git", "REST APIs", "JSON"] },
];

const colorMap: Record<string, { text: string; bg: string; border: string; icon: string }> = {
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    icon: "text-violet-400",
  },
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    icon: "text-cyan-400",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
  },
};

export default function About() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Sobre mim"
          title="Quem sou eu"
          subtitle="Desenvolvedor apaixonado por backend, sistemas críticos e código que escala."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Sou um{" "}
                <span className="text-violet-300 font-semibold">
                  Desenvolvedor de Sistemas Júnior
                </span>{" "}
                com foco em backend, atuando na área da saúde com sistemas críticos
                que exigem alta confiabilidade e performance.
              </p>
              <p>
                Minha jornada profissional começou no suporte técnico, passando por
                níveis progressivos até migrar para o desenvolvimento — o que me deu
                uma visão única: entendo tanto o lado técnico do código quanto o
                impacto real na experiência do usuário.
              </p>
              <p>
                Trabalho com{" "}
                <span className="text-cyan-400 font-medium">PHP, Delphi e PL/SQL</span>{" "}
                no backend, bancos Oracle e integração com APIs REST. Além disso, utilizo{" "}
                <span className="text-emerald-400 font-medium">Docker</span> para
                containerização e me atualizo constantemente com cursos em React,
                Java e C#.
              </p>
              <p>
                Busco oportunidades onde possa crescer e contribuir com soluções
                robustas, escaláveis e bem testadas.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map((item) => {
                const c = colorMap[item.color];
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex gap-4 p-4 rounded-xl ${c.bg} border ${c.border}`}
                  >
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center`}
                    >
                      <Icon size={16} className={c.icon} />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${c.text} mb-0.5`}>
                        {item.title}
                      </p>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {techStack.map((stack, i) => {
              const c = colorMap[stack.color];
              const Icon = stack.icon;
              return (
                <div key={stack.group} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-8 h-8 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center`}
                    >
                      <Icon size={15} className={c.icon} />
                    </div>
                    <h3 className={`text-sm font-semibold ${c.text}`}>
                      {stack.group}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.06 }}
                        className={`skill-badge ${c.bg} ${c.border} ${c.text}`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2+", label: "Anos na área" },
                { value: "5", label: "Cargos progressivos" },
                { value: "10+", label: "Tecnologias" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card p-4 text-center"
                >
                  <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
