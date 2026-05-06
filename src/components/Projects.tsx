"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";
import { Github, ExternalLink, Lock } from "lucide-react";

interface Project {
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  tagColor: "violet" | "cyan" | "emerald";
  githubUrl: string;
  liveUrl?: string;
  status: "public" | "private" | "wip";
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "SaudePositivo APP",
    description: "Aplicativo mobile para gestão de saúde e exames laboratoriais.",
    longDescription:
      "App React Native integrado a uma API Node.js para gerenciamento de informações de saúde de pacientes. Contempla cadastro de usuários, controle de acesso com JWT, registro de exames hematológicos e associação de exames a pacientes.",
    tags: ["React Native", "Expo", "Node.js", "Express", "MySQL", "JWT"],
    tagColor: "violet",
    githubUrl: "https://github.com/Matheusl-Silva/SaudePositivoAPP",
    status: "public",
    featured: true,
  },
  {
    name: "ProjetoDesenv",
    description: "Sistema completo de gestão de exames laboratoriais.",
    longDescription:
      "Sistema web fullstack para laboratórios com cadastro de pacientes, agendamento de exames, geração de relatórios e rastreamento de resultados. Backend em PHP com Node.js e Java, banco de dados MySQL e autenticação de usuários.",
    tags: ["PHP", "Node.js", "Java", "MySQL", "REST API", "Auth"],
    tagColor: "cyan",
    githubUrl: "https://github.com/Matheusl-Silva/ProjetoDesenv",
    status: "public",
  },
  {
    name: "Ecclesia Londrina Front",
    description: "Frontend institucional para a igreja Ecclesia em Londrina.",
    longDescription:
      "Aplicação frontend desenvolvida em TypeScript com foco em apresentação institucional, interface moderna e responsiva. Projeto pessoal que reforça habilidades em TypeScript e desenvolvimento web.",
    tags: ["TypeScript", "CSS", "JavaScript", "Frontend", "Responsivo"],
    tagColor: "emerald",
    githubUrl: "https://github.com/Matheusl-Silva/Ecclesia-Londrina-Front",
    status: "public",
  },
];

const statusMap = {
  public: { label: "Público", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  private: { label: "Privado", color: "text-slate-400 bg-slate-500/10 border-slate-500/20" },
  wip: { label: "Em andamento", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
};

const tagColorMap = {
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
};

export default function Projects() {
  return (
    <section id="projetos" className="py-24 relative bg-[#0a0a16]">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Projetos"
          title="O que estou construindo"
          subtitle="Projetos práticos que demonstram minha experiência com sistemas backend, banco de dados e APIs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const status = statusMap[project.status];
            const tagClass = tagColorMap[project.tagColor];
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`card flex flex-col p-6 group ${
                  project.featured
                    ? "border-violet-500/30 bg-gradient-to-br from-[#11112b] to-[#141432]"
                    : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {project.featured && (
                      <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-violet-400 bg-violet-500/15 border border-violet-500/25 px-2 py-0.5 rounded-full mb-2">
                        ★ Destaque
                      </span>
                    )}
                    <h3 className="text-base font-bold text-slate-100 leading-snug">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className={`flex-shrink-0 text-[10px] font-semibold border px-2 py-0.5 rounded-full ml-2 ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>

                <p className="text-sm text-slate-500 mb-1">{project.description}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                  {project.longDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`skill-badge ${tagClass} text-[10px]`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    {project.status === "private" ? (
                      <Lock size={14} />
                    ) : (
                      <Github size={14} />
                    )}
                    {project.status === "private" ? "Privado" : "Ver código"}
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Veja mais no meu perfil do GitHub
          </p>
          <a
            href="https://github.com/Matheusl-Silva"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            github.com/Matheusl-Silva
          </a>
        </motion.div>
      </div>
    </section>
  );
}
