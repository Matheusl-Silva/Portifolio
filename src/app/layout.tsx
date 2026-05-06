import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Leandro Silva — Desenvolvedor Backend",
  description:
    "Portfólio profissional de Matheus Leandro Silva, Desenvolvedor Backend com experiência em PHP, Delphi, PL/SQL, Oracle, APIs REST e Docker. Londrina - PR.",
  keywords: [
    "desenvolvedor backend",
    "PHP",
    "Delphi",
    "PL/SQL",
    "Oracle",
    "Docker",
    "Node.js",
    "APIs REST",
    "Londrina",
    "portfólio",
  ],
  authors: [{ name: "Matheus Leandro Silva" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Matheus Leandro Silva — Desenvolvedor Backend",
    description:
      "Desenvolvedor Backend com experiência em PHP, PL/SQL, Oracle e Docker.",
    siteName: "Portfólio Matheus Silva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Leandro Silva — Desenvolvedor Backend",
    description:
      "Desenvolvedor Backend com experiência em PHP, PL/SQL, Oracle e Docker.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#080812] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
