"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionWrapper";
import { Mail, Github, Linkedin, Send, CheckCircle, MapPin, MessageSquare } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "matleandrosilva@gmail.com",
    href: "mailto:matleandrosilva@gmail.com",
    color: "violet",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Matheusl-Silva",
    href: "https://github.com/Matheusl-Silva",
    color: "slate",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/matheus-silva-241b8a276",
    href: "https://linkedin.com/in/matheus-silva-241b8a276",
    color: "cyan",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Londrina, PR — Brasil",
    href: "#",
    color: "emerald",
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  slate: { text: "text-slate-300", bg: "bg-slate-500/10", border: "border-slate-500/20" },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simple mailto fallback — replace with an API route or Resend/Formspree for production
    await new Promise((r) => setTimeout(r, 800));
    const subject = encodeURIComponent(`[Portfólio] Mensagem de ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`
    );
    window.open(`mailto:matleandrosilva@gmail.com?subject=${subject}&body=${body}`);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-violet-500/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Contato"
          title="Vamos conversar"
          subtitle="Estou aberto a novas oportunidades. Entre em contato e retorno em breve."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                Matheus Leandro Silva
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Desenvolvedor Backend Júnior com foco em PHP, Delphi, PL/SQL e Oracle.
                Disponível para posições de backend, fullstack ou oportunidades de
                crescimento em times de desenvolvimento.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link) => {
                const c = colorMap[link.color];
                const Icon = link.icon;
                const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl ${c.bg} border ${c.border} group hover:scale-[1.01] transition-transform`}
                    onClick={link.href === "#" ? (e) => e.preventDefault() : undefined}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon size={16} className={c.text} />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-xs font-semibold ${c.text} mb-0.5`}>
                        {link.label}
                      </p>
                      <p className="text-sm text-slate-300 truncate">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <MessageSquare size={16} className="text-violet-400" />
                </div>
                <h3 className="text-base font-semibold text-slate-200">
                  Enviar mensagem
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} className="text-emerald-400 mb-4" />
                  <h4 className="text-lg font-bold text-slate-100 mb-2">
                    Mensagem enviada!
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Seu cliente de email foi aberto. Retornarei em breve.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 btn-outline !py-2 !text-sm"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Olá Matheus, gostaria de conversar sobre..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="form-input resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Enviar mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
