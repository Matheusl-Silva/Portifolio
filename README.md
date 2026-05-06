# Portfólio — Matheus Leandro Silva

Landing page profissional para portfólio de desenvolvedor backend, construída com **Next.js 14**, **TailwindCSS** e **Framer Motion**.

## Stack

| Tecnologia | Uso |
|---|---|
| Next.js 14 (App Router) | Framework React com SSR/SSG |
| TypeScript | Type safety |
| TailwindCSS | Estilização utility-first |
| Framer Motion | Animações e transições |
| Lucide React | Ícones |

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadados SEO
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais + utilitários
└── components/
    ├── Navbar.tsx        # Navegação fixa com scroll detection
    ├── Hero.tsx          # Hero section com foto + CTAs
    ├── About.tsx         # Sobre mim + tech stack
    ├── Experience.tsx    # Timeline de experiência
    ├── Skills.tsx        # Habilidades com barras de progresso
    ├── Projects.tsx      # Cards de projetos
    ├── Contact.tsx       # Formulário de contato
    ├── Footer.tsx        # Rodapé
    └── SectionWrapper.tsx # HOC de animação reutilizável
```

## Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Passos

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## Substituir foto de perfil

1. Adicione sua foto em `/public/profile.jpg` (ou `.png`, `.webp`)
2. Em `src/components/Hero.tsx`, substitua o componente `<ProfilePlaceholder />` por:

```tsx
import Image from "next/image";

// Dentro do div da foto circular:
<Image
  src="/profile.jpg"
  width={320}
  height={320}
  alt="Matheus Leandro Silva"
  className="w-full h-full object-cover rounded-full"
  priority
/>
```

## Deploy na Vercel

### Opção 1 — Via CLI (recomendado)

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Opção 2 — Via GitHub

1. Crie um repositório no GitHub e faça push do código
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta GitHub
3. Importe o repositório
4. Clique em **Deploy** — a Vercel detecta Next.js automaticamente

### Variáveis de ambiente

Para um formulário de contato com API real (ex: Resend, Formspree), adicione no painel da Vercel:

```
RESEND_API_KEY=sua_chave_aqui
```

## Personalizações comuns

| O que mudar | Onde |
|---|---|
| Informações pessoais | `src/components/Hero.tsx`, `About.tsx` |
| Experiência profissional | `src/components/Experience.tsx` |
| Projetos | `src/components/Projects.tsx` |
| Habilidades e níveis | `src/components/Skills.tsx` |
| Cores do tema | `tailwind.config.ts` + `globals.css` |
| SEO / metadados | `src/app/layout.tsx` |

## Scripts disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção local
npm run lint     # Linting ESLint
```
