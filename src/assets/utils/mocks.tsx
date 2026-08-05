import React from "react";

import { FaAngular, FaFigma, FaGitAlt, FaGithub, FaGlobe, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { SiJavascript, SiMui, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

import ashUp from "../../imports/Projects/ashUp.png";
import solarsMovie from "../../imports/Projects/solarsMovie.png";
import imovie from "../../imports/Projects/imovie.png";
import MusicPlayer from "../../imports/Projects/musicPlayer.png";
import Floryou from "../../imports/Projects/floricultura.png";

import Brain from "../../assets/images/brain.png";
import Clean from "../../assets/images/clean.png";
import Paint from "../../assets/images/paint.png";

export const projects = [
  {
    title: "Ash Up",
    description: "Projeto desenvolvido com foco em gameplay de plataforma.",
    technologies: "GameMaker - React",
    image: ashUp,
    link: "https://www.figma.com/design/xjAAFYQMjTMbkfs2gRQVrR/Ash-up?m=auto&t=idjbLDoFwMgiAfy0-1",
    linkType: "design"
  },
  {
    title: "Solars Movies",
    description: "Aplicação de catálogo de filmes com foco em experiência do usuário",
    technologies: "React - Mui",
    image: solarsMovie,
    link: "https://www.figma.com/design/3cR1gzxRRcvuMLkLmIU4id/Streaming-interface?m=auto&t=idjbLDoFwMgiAfy0-1",
    linkType: "design"
  },
  {
    title: "Imovie",
    description: "Aplicativo Mobile para exibição de filmes consumindo API externa.",
    technologies: "React - Mui - Tmdb - Node",
    image: imovie,
    link: "https://i-movie-vmuy.vercel.app/home",
    linkType: "site"
  },
  {
    title: "Music Player",
    description: "Player de música integrado com a letra que exibe em sincronia enquanto a música é reproduzida.",
    technologies: "React - Tailwind - Express",
    image: MusicPlayer,
    link: "https://github.com/LucasF19/Music-Player",
    linkType: "design"
  },
  {
    title: "Floryu",
    description: "Protótipo de uma loja online de flores desenvolvido no Figma.",
    technologies: "Figma",
    image: Floryou,
    link: "https://www.figma.com/design/NDZsiJGuWhHhyZf1O32QVz/Floricultura?m=auto&t=39XiEqvVZKruJRvy-1",
    linkType: "design"
  },
];

export const linkTypeConfig = {
  site: {
    label: "Site ao vivo",
    icon: <FaGlobe className="w-3 h-3" />,
    badgeBg: "rgba(34,197,94,0.15)",
    badgeText: "#4ADE80",
    buttonLabel: "Acessar site",
  },
  design: {
    label: "Apenas design",
    icon: <FaFigma className="w-3 h-3" />,
    badgeBg: "rgba(168,85,247,0.15)",
    badgeText: "#C084FC",
    buttonLabel: "Ver no Figma",
  },
  github: {
    label: "Código-fonte",
    icon: <FaGithub className="w-3 h-3" />,
    badgeBg: "rgba(148,163,184,0.15)",
    badgeText: "#CBD5E1",
    buttonLabel: "Ver no GitHub",
  },
};

export const technologies = [
  {
    id: 1,
    name: "Angular",
    description: "Framework front-end mantido pelo Google para criação de aplicações web escaláveis, robustas e altamente organizadas.",
    tags: [
      "SPA",
      "TypeScript",
      "RxJS",
      "Frontend",
      "Components"
    ],
    whyUse: "Utilizo Angular em aplicações maiores que exigem arquitetura sólida, modularização e excelente organização de código.",
    whereUse: "Uso principalmente em dashboards administrativos, sistemas empresariais e aplicações complexas com múltiplos módulos.",
    documentation: "https://angular.dev/",
    icon: FaAngular
  },

  {
    id: 2,
    name: "MUI",
    description: "Biblioteca de componentes React baseada no Material Design, utilizada para criar interfaces modernas e profissionais.",
    tags: [
      "React",
      "UI",
      "Material Design",
      "Components",
      "Frontend"
    ],
    whyUse: "Utilizo MUI para acelerar a construção de interfaces elegantes e manter consistência visual entre componentes.",
    whereUse: "Uso em dashboards, painéis administrativos, tabelas avançadas, formulários e interfaces corporativas.",
    documentation: "https://mui.com/",
    icon: SiMui
  },

  {
    id: 3,
    name: "JavaScript",
    description: "Linguagem amplamente utilizada no desenvolvimento web para criar interatividade e comportamento dinâmico.",
    tags: [
      "Frontend",
      "Backend",
      "ES6+",
      "Web",
      "DOM"
    ],
    whyUse: "Utilizo JavaScript por sua versatilidade no desenvolvimento web moderno tanto no front-end quanto no back-end.",
    whereUse: "Uso em interações de interface, manipulação do DOM, APIs, lógica de aplicações e automações.",
    documentation: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    icon: SiJavascript
  },

  {
    id: 4,
    name: "TypeScript",
    description: "Superset do JavaScript que adiciona tipagem estática para tornar aplicações mais seguras e escaláveis.",
    tags: [
      "Types",
      "Scalability",
      "Frontend",
      "Backend",
      "JavaScript"
    ],
    whyUse: "Utilizo TypeScript para evitar erros em tempo de desenvolvimento e melhorar manutenção do código.",
    whereUse: "Uso em aplicações React, Angular, APIs Node.js e projetos que exigem maior organização.",
    documentation: "https://www.typescriptlang.org/",
    icon: SiTypescript
  },

  {
    id: 5,
    name: "C#",
    description: "Linguagem moderna da Microsoft focada em desenvolvimento back-end, APIs, desktop e aplicações corporativas.",
    tags: [
      ".NET",
      "Backend",
      "APIs",
      "Microsoft",
      "OOP"
    ],
    whyUse: "Utilizo C# pela performance, organização e excelente integração com o ecossistema .NET.",
    whereUse: "Uso no desenvolvimento de APIs REST, sistemas empresariais e aplicações desktop.",
    documentation: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    icon: TbBrandCSharp
  },

  {
    id: 6,
    name: "React",
    description: "Biblioteca JavaScript utilizada para construção de interfaces modernas, componentizadas e altamente performáticas.",
    tags: [
      "SPA",
      "Hooks",
      "Components",
      "Frontend",
      "TypeScript"
    ],
    whyUse: "Utilizo React pela produtividade, reutilização de componentes e excelente ecossistema para aplicações modernas.",
    whereUse: "Uso principalmente em interfaces web, dashboards, landing pages e aplicações completas integradas com APIs.",
    documentation: "https://react.dev/",
    icon: FaReact
  },
  {
    id: 7,
    name: "Git",
    description: "Sistema de versionamento distribuído utilizado para controle de código e colaboração entre desenvolvedores.",
    tags: [
      "Version Control",
      "GitHub",
      "CLI",
      "Branches",
      "Collaboration"
    ],
    whyUse: "Utilizo Git para manter histórico das aplicações, organização de versões e colaboração em projetos.",
    whereUse: "Uso diariamente em versionamento de código, deploys, gerenciamento de branches e integração com GitHub.",
    documentation: "https://git-scm.com/doc",
    icon: FaGitAlt
  },

  {
    id: 8,
    name: "Node.js",
    description: "Ambiente de execução JavaScript server-side utilizado para APIs, serviços e aplicações escaláveis.",
    tags: [
      "Backend",
      "API",
      "Express",
      "Server",
      "JavaScript"
    ],
    whyUse: "Utilizo Node.js pela velocidade no desenvolvimento e ótima integração com o ecossistema JavaScript.",
    whereUse: "Uso na criação de APIs REST, autenticação, integrações externas e serviços back-end.",
    documentation: "https://nodejs.org/en/docs",
    icon: FaNodeJs
  },

  {
    id: 9,
    name: "Vue",
    description: "Framework progressivo para construção de interfaces modernas com foco em simplicidade e produtividade.",
    tags: [
      "SPA",
      "Frontend",
      "Components",
      "Reactive",
      "JavaScript"
    ],
    whyUse: "Utilizo Vue em projetos que exigem rapidez no desenvolvimento e curva de aprendizado mais simples.",
    whereUse: "Uso em interfaces administrativas, landing pages e aplicações reativas.",
    documentation: "https://vuejs.org/",
    icon: FaVuejs
  },

  {
    id: 10,
    name: "Python",
    description: "Linguagem versátil amplamente utilizada em automações, back-end, inteligência artificial e análise de dados.",
    tags: [
      "Automation",
      "Backend",
      "AI",
      "Data",
      "Scripts"
    ],
    whyUse: "Utilizo Python pela simplicidade, produtividade e enorme variedade de bibliotecas disponíveis.",
    whereUse: "Uso em automações, scripts, APIs, inteligência artificial e processamento de dados.",
    documentation: "https://www.python.org/doc/",
    icon: FaPython
  }
];

export const cardsAbout = [
  {
    title: "Mentalidade",
    description: "Foco em performance e usabilidade, sempre buscando soluções escaláveis.",
    imagePath: Brain
  },
  {
    title: "Código Limpo",
    description: "Código bem estruturado, boas práticas e atenção aos detalhes.",
    imagePath: Clean
  },
  {
    title: "Design",
    description: "Desenvolvedor com visão de design, criando interfaces que unem estética e funcionalidade.",
    imagePath: Paint
  },
]