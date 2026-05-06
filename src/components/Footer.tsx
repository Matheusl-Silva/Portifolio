"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Matheusl-Silva",
    label: "GitHub",
    color: "hover:text-slate-200",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/matheus-silva-241b8a276",
    label: "LinkedIn",
    color: "hover:text-cyan-400",
  },
  {
    icon: Mail,
    href: "mailto:matleandrosilva@gmail.com",
    label: "Email",
    color: "hover:text-violet-400",
  },
];

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#1e1e3f] bg-[#080812]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <Code2 size={15} className="text-white" />
              </div>
              <span className="font-bold text-slate-100">
                Matheus<span className="text-violet-400">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Desenvolvedor Backend focado em soluções robustas,
              escaláveis e de alta qualidade.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-3">
              Navegação
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-3">
              Contato
            </p>
            <div className="space-y-2">
              <a
                href="mailto:matleandrosilva@gmail.com"
                className="block text-sm text-slate-400 hover:text-violet-400 transition-colors"
              >
                matleandrosilva@gmail.com
              </a>
              <p className="text-sm text-slate-600">Londrina, PR — Brasil</p>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={social.label}
                    className={`p-2 text-slate-600 ${social.color} transition-colors rounded-lg hover:bg-[#1e1e3f]`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#1e1e3f] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {year} Matheus Leandro Silva. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Feito com{" "}
            <Heart size={11} className="text-rose-500 fill-rose-500" /> usando{" "}
            <span className="text-violet-400">Next.js</span> &{" "}
            <span className="text-cyan-400">TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
