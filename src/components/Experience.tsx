"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";
import { Briefcase, Calendar, ChevronRight, Star } from "lucide-react";

interface Job {
  title: string;
  company: string;
  period: string;
  type: "current" | "previous";
  description: string[];
  tags: string[];
}

const jobs: Job[] = [
  {
    title: "Desenvolvedor de Sistemas Júnior",
    company: "Solus Saúde",
    period: "Mar 2026 — Atual",
    type: "current",
    description: [
      "Desenvolvimento e manutenção de sistemas backend críticos com PHP, Delphi e PL/SQL.",
      "Otimização de queries Oracle para ganho de performance em relatórios e processos internos.",
      "Integração com APIs REST e serviços externos do setor de saúde.",
      "Containerização de serviços com Docker para ambientes de desenvolvimento e produção.",
      "Correção de bugs e implementação de melhorias em sistemas legados com alto impacto no negócio.",
    ],
    tags: ["PHP", "Delphi", "PL/SQL", "Oracle", "Docker", "REST API"],
  },
  {
    title: "Analista de Suporte Técnico III",
    company: "Solus Saúde",
    period: "2025 — Mar 2026",
    type: "previous",
    description: [
      "Suporte avançado a sistemas críticos da empresa com foco em resolução de incidentes complexos.",
      "Análise e diagnóstico de falhas em ambientes de produção.",
      "Apoio técnico à equipe de desenvolvimento na identificação de bugs.",
    ],
    tags: ["Suporte N3", "Diagnóstico", "Oracle", "Sistemas Críticos"],
  },
  {
    title: "Analista de Suporte Técnico II",
    company: "Solus Saúde",
    period: "2024 — 2025",
    type: "previous",
    description: [
      "Atendimento e resolução de chamados técnicos de nível intermediário.",
      "Documentação de processos e criação de base de conhecimento interno.",
      "Treinamento de usuários nos sistemas da empresa.",
    ],
    tags: ["Suporte N2", "Documentação", "Treinamento"],
  },
  {
    title: "Analista de Suporte JR",
    company: "Solus Saúde",
    period: "2023 — 2024",
    type: "previous",
    description: [
      "Atendimento de primeiro nível para usuários internos.",
      "Suporte a sistemas ERP e módulos de saúde.",
    ],
    tags: ["Suporte N1", "ERP", "Saúde Digital"],
  },
  {
    title: "Estagiário de Suporte",
    company: "Solus Saúde",
    period: "2022 — 2023",
    type: "previous",
    description: [
      "Início da trajetória profissional com suporte técnico básico e aprendizado contínuo.",
      "Auxílio na gestão de chamados e resolução de dúvidas de usuários.",
    ],
    tags: ["Estágio", "Suporte", "Aprendizado"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 relative bg-[#0a0a16]">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-6">
        <SectionTitle
          label="Carreira"
          title="Experiência Profissional"
          subtitle="Trajetória de crescimento contínuo na Solus Saúde — do suporte ao desenvolvimento."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-violet-500 via-cyan-500/50 to-transparent" />

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={`${job.title}-${i}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-[9px] top-[22px]">
                  {job.type === "current" ? (
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-[0_0_12px_rgba(124,58,237,0.7)]" />
                      <div className="absolute inset-0 rounded-full bg-violet-400/30 animate-ping" />
                    </div>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-[#1e1e3f] border-2 border-violet-500/50 mt-0.5" />
                  )}
                </div>

                <div
                  className={`card p-5 ${
                    job.type === "current"
                      ? "border-violet-500/30 bg-gradient-to-br from-[#11112b] to-[#141430]"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {job.type === "current" && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-violet-400 bg-violet-500/15 border border-violet-500/25 px-2 py-0.5 rounded-full">
                            <Star size={9} fill="currentColor" />
                            Atual
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-slate-100">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-violet-400" />
                        <span className="text-violet-300 text-sm font-medium">
                          {job.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-[#0d0d1a] border border-[#1e1e3f] px-3 py-1.5 rounded-full whitespace-nowrap">
                      <Calendar size={12} />
                      {job.period}
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {job.description.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight
                          size={13}
                          className="text-violet-400 flex-shrink-0 mt-0.5"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium text-cyan-400 bg-cyan-500/8 border border-cyan-500/15 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
