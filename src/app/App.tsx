import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ThemeToggle } from "./components/ThemeToggle";
import { TechnologyInfo } from "./components/TechnologyInfo";
import { TechnologyIcon } from "./components/TechnologyIcon";

import { FaRegFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowUpRightFromSquare, FaCirclePlus } from "react-icons/fa6";

import imgTwitter from "../imports/ProjetoPessoal/a5fe1130cf500224058598ebb6b444952c36a595.png";
import imgFacebook from "../imports/ProjetoPessoal/57fdba435f4a25b10eea21d827fed7d3aa39887b.png";
import imgYoutube from "../imports/ProjetoPessoal/232e9521e6f117d8012d37da4dd191a08b2ae8bc.png";
import imgInstagram from "../imports/ProjetoPessoal/2237c3947840814abfaeadba7897348b541db330.png";

import imgBgProfessional from "../imports/ProjetoProfissional/0155c8a9b33dd22dbe5d6da3979ea02aff7441d1.png";
import imgBgPersonal from "../imports/ProjetoPessoal/d44c790025165179347b4d743a9c0f98da7fc27d.png";
import svgPathsPersonal from "../imports/ProjetoPessoal/svg-86xydgqyks";
import svgPathsProfessional from "../imports/ProjetoProfissional/svg-9qr9mfx9n8";
import curriculumPdf from "../assets/cv/lucas-maia-cv.pdf";

import { cardsAbout, technologies } from "../assets/utils/mocks";
import { navItem, personalTheme, professionalTheme } from "../assets/utils/theme";
import ContactCard from "./components/ContactCard";
import { redirect } from "../assets/utils/tools";

export default function App() {
  const [isPersonal, setIsPersonal] = useState(false);
  const [selectedTech, setSelectedTech] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  
  const timeoutRef = useRef<any>(1);
  const theme = isPersonal ? professionalTheme : personalTheme;

  const projects = [
    {
      id: 1,
      title: "Ash Up",
      description:
        "Projeto desenvolvido com foco em gameplay dinâmica, interface moderna e integração entre front-end e lógica de jogo.",
      technologies: "GameMaker - React",
      image: theme.project1,
    },

    {
      id: 2,
      title: "Solars Movies",
      description:
        "Aplicação de catálogo de filmes com foco em experiência do usuário, navegação intuitiva e design responsivo.",
      technologies: "React - Mui",
      image: theme.project2,
    },

    {
      id: 3,
      title: "Imovie",
      description:
        "Sistema completo para exibição de filmes consumindo API externa com filtros, autenticação e gerenciamento de conteúdo.",
      technologies: "React - Mui - Tmdb - Node",
      image: theme.project3,
      link: "https://i-movie-vmuy.vercel.app/home"
    },

    {
      id: 4,
      title: "Golden Tech",
      description:
        "Landing page institucional moderna desenvolvida para apresentação empresarial e captação de clientes.",
      technologies: "PHP - Bootstrap",
      image: theme.project4,
    },
  ];

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
  
    setCopied(true);
  
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div>
      <div className="h-[100vh] relative overflow-hidden" id="home">
        <div className="absolute inset-0">
          <div
            className={`
              absolute inset-0
              bg-cover
              transition-opacity
              duration-700
              ease-in-out
              ${isPersonal ? "opacity-0" : "opacity-100"}
              bg-top
            `}
            style={{
              backgroundImage: `url(${imgBgProfessional})`,
            }}
          />
          <div
            className={`
                absolute inset-0
                bg-cover
                transition-opacity
                duration-700
                ease-in-out
                ${isPersonal ? "opacity-100" : "opacity-0"}
                bg-bottom
              `}
            style={{
              backgroundImage: `url(${imgBgPersonal})`,
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-[75%] transition-all duration-700 ease-in-out"
            style={{
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              clipPath: "polygon(0 0, 75% 0, 45% 100%, 0 100%)",
              background: theme.overlayColor,
            }}
          />
        </div>

        <div className="px-[35px] pt-7 pb-8 relative flex flex-col justify-between h-full w-full">
          <div className="flex items-start justify-between">
            <nav>
              <div className="flex gap-[65px] items-center ">
                <a href="#home" className={navItem}>Início</a>
                <a href="#about" className={navItem}>Sobre</a>
                <a href="#projects" className={navItem}>Projetos</a>
                <a href="#contact" className={navItem}>Contato</a>
              </div>
            </nav>

            <div className="flex flex-col text-end leading-[10px]">
              <div>
                <h2 className="text-white font-semibold text-[35px] leading-[55px] tracking-[2px] text-shadow-lg">
                  Lucas Maia
                </h2>

                <p className="font-light text-white text-[20px] tracking-[3px] text-shadow-lg">
                  Desenvolvedor full-stack
                </p>
              </div>

              <div className="flex items-center justify-end mt-5 gap-4">
                <div onClick={() => redirect("https://github.com/LucasF19")} className={`cursor-pointer flex items-center justify-center h-8 w-8 rounded-full bg-white hover:scale-103`}>
                  <FaGithub className="w-10 h-10" style={{ color: theme.primaryColor }} />
                </div>
                <div onClick={() => redirect("https://www.linkedin.com/in/lucas-maia-55728a233/")} className={`cursor-pointer flex items-center justify-center h-8 w-8 rounded-full hover:scale-103`} style={{ background: theme.primaryColor }} >
                  <FaLinkedinIn className="text-white w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-white w-[435px]">
            <motion.h1 initial={{opacity: 0, y: -40}} animate={{opacity: 1, y: 0}} transition={{ duration: 0.8}} className="text-[45px] mb-2 text-shadow-lg font-bold tracking-[11px] leading-[50px]">
              OLÁ, SEJA BEM-VINDO
            </motion.h1>
            <motion.p initial={{opacity: 0, y: -40}} animate={{opacity: 1, y: 0}} transition={{ duration: 0.8, delay: 0.3}} className="font-light text-[17px] tracking-[3px] leading-[20px]">
              Conheça projetos em que me dediquei durante minha carreira.
            </motion.p>
          </div>

          <div className="flex flex-col items-end">
            <ThemeToggle
              isPersonal={isPersonal}
              onToggle={() => setIsPersonal(!isPersonal)}
              primaryColor={theme.primaryColor}
            />

            <button
              className={`mt-5 flex items-center cursor-pointer gap-2 px-[35px] py-[6px] rounded-[20px] text-[17px] font-bold transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-[0_0_25px_rgba(255,255,255,0.18)]`}
              style={{
                backgroundColor: theme.buttonBgCv,
                color: theme.buttonTextCv
              }}
              onClick={() => redirect(curriculumPdf)}
            >
              Currículo
              <FaRegFileAlt className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute top-[93%] left-[50%] w-[93px] h-[27px] flex items-center justify-center rotate-180">
            <svg width="81" height="21" viewBox="0 0 81 21" fill="none">
              <path d={isPersonal ? svgPathsPersonal.p2f172a40 : svgPathsProfessional.p2f172a40} fill="white" fillOpacity="0.96" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-5 bg-[#080b1a]" id="about">
        <div className="flex items-stretch justify-between">
          <div className="max-w-[520px]">
            <motion.h3 initial={{opacity: 0, y: -40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{ duration: 0.8}} className="text-white text-[35px] font-semibold drop-shadow-lg">
              Sobre
            </motion.h3>
            <motion.p initial={{opacity: 0, y: -40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.8}} transition={{ duration: 0.8, delay: 0.3}} className="text-[#f3f3f3] text-[18px] font-light tracking-[2px]">
              Desenvolvimento de aplicações modernas com foco na experiência do usuário.
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-7">
              {technologies.map((tech, index) => (
                <motion.div initial={{opacity: 0, y: -40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{ duration: 0.8, delay: index * 0.1,}}>
                  <TechnologyIcon
                    key={tech.id}
                    icon={tech.icon}
                    name={tech.name}
                    iconBg={theme.iconBg}
                    iconBorder={theme.iconBorder}
                    onClick={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        setSelectedTech(index);
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 h-auto">
            <motion.div className="flex items-end justify-end gap-[8px]" initial={{opacity: 0 }} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{ duration: 2 }}>
              <ContactCard
                icon={<FaLinkedinIn className="text-[#222950] w-5 h-5" />}
                value="Lucas Maia"
                theme={theme}
                link="https://www.linkedin.com/in/lucas-maia-55728a233/"
              />

              <ContactCard
                icon={<FaGithub className="text-[#222950] w-5 h-5" />}
                value="https://github.com/LucasF19"
                link="https://github.com/LucasF19"
                theme={theme}
              />

              <ContactCard
                icon={<MdOutlineEmail className="text-[#222950] w-5 h-5" />}
                value="lucasmaiaferreira6@gmail.com"
                link="mailto:lucasmaiaferreira6@gmail.com"
                theme={theme}
              />
            </motion.div>

            <div className="h-full flex gap-[27px]">
              {
                cardsAbout.map((item: any, index: number) => (
                  <motion.div key={item.id} className="rounded-[15px] bg-[#121525] p-2" initial={{opacity: 0, y: -40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{ duration: 0.8, delay: index * 0.2,}}>
                    <div className="h-full flex flex-col gap-5 items-center border-2 justify-start px-[25px] py-8 rounded-[15px]" style={{ borderColor: theme.borderCardsAbout }}>
                      <div className="rounded-full w-[80px] h-[80px] flex items-center justify-center bg-transparent" style={{ border: `2px solid ${theme.iconBorder}` }}>
                        <div className="flex items-center justify-center rounded-full w-[70px] h-[70px]" style={{ backgroundColor: theme.cardIconBg, }}>
                          <img src={item.imagePath} alt={item.title} className="w-10" />
                        </div>
                      </div>
                      <h3 className="text-[#f3f3f3] text-[18px] font-bold text-center w-full tracking-[2px]">
                        {item.title}
                      </h3>
                      <p className="w-[180px] text-[#F3F3F3] text-[15px] font-light text-center">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </div>
        </div>

        <motion.div initial={{opacity: 0, y: -40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{ duration: 0.8}}>
          <TechnologyInfo
            selectedTech={selectedTech}
            technologies={technologies}
            image={theme.aboutBg}
            theme={theme}
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
            }}
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => {
                setSelectedTech(null);
              }, 5000);
            }}
          />
        </motion.div>
      </div>

      <div className="p-5" style={{ backgroundImage: `linear-gradient(to bottom, ${theme.gradientFrom}, ${theme.gradientTo})` }} id="projects">
        <motion.h2 initial={{opacity: 0, y: -40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{ duration: 0.8}} className="text-white text-[35px] font-semibold drop-shadow-lg">
          Projetos
        </motion.h2>

        <motion.p initial={{opacity: 0, y: -40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{ duration: 0.8, delay: 0.5}} className="text-[#f3f3f3] text-[18px] font-light tracking-[2px]">
          Explore projetos desenvolvidos durante minha jornada.
        </motion.p>

        <div className="grid grid-cols-5 gap-8 mt-7">
          {[...Array(10)].map((_, index) => {
            const project = projects[index];

            if (project) {
              const hasLink = Boolean(project.link);

              return (
                <motion.div
                  initial={{opacity: 0, y: -40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{ duration: 0.3, delay: index * 0.3}}
                  key={project.id}
                  className={`group relative overflow-hidden rounded-[15px] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] animate-in fade-in slide-in-from-bottom ${hasLink ? "cursor-pointer" : "cursor-default"}`}
                  onClick={() => hasLink && redirect(project.link)}
                >
                  <div className="h-[119px] relative overflow-hidden">
                    <ImageWithFallback
                      alt={project.title}
                      className="rounded-t-[15px] w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={project.image}
                    />

                    {hasLink && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-2">
                        <FaArrowUpRightFromSquare className="w-4 h-4 text-white" />
                        <span className="text-white text-[13px] font-medium tracking-[1px]">
                          Ver projeto
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="h-full flex flex-col gap-3 p-4 backdrop-blur-[4.6px] bg-[rgba(148,148,148,0.14)] rounded-b-[15px] border border-[rgba(255,255,255,0.05)]">
                    <h3 className="text-white text-[22px] text-center">
                      {project.title}
                    </h3>

                    <p className="text-white text-[13px] font-normal text-justify">
                      {project.description}
                    </p>

                    <p className="text-right text-[12px]" style={{color: theme.accentColor}}>
                      {project.technologies}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <div
                key={index}
                className=" group w-full p-2 h-full min-h-[275px] rounded-[15px] backdrop-blur-[4.6px] bg-[rgba(158,158,158,0.2)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:bg-[rgba(180,180,180,0.25)]"
              >
                <div className="flex items-center justify-center h-full w-full rounded-[15px] border-dashed border-2 border-[rgba(200,200,200,0.2)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.35)]">
                  <FaCirclePlus className="w-12 h-12 text-[rgba(158,158,158,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:text-[rgba(255,255,255,0.35)]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#080b1a] p-10" id="contact">
        <div className="h-full flex flex-col items-center justify-between">
          <div className="flex gap-[16px] mb-5">
            <button className="w-full h-full p-2 bg-[#f6f6f6] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <ImageWithFallback alt="YouTube" className="w-[25px] h-[25px]" src={imgYoutube} />
            </button>
            <button className="w-full h-full p-2 bg-[#f6f6f6] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <ImageWithFallback alt="Instagram" className="w-[25px] h-[25px]" src={imgInstagram} />
            </button>
            <button className="w-full h-full p-2 bg-[#f6f6f6] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <ImageWithFallback alt="Twitter" className="w-[25px] h-[25px]" src={imgTwitter} />
            </button>
            <button className="w-full h-full p-2 bg-[#f6f6f6] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <ImageWithFallback alt="Facebook" className="w-[25px] h-[25px]" src={imgFacebook} />
            </button>
          </div>
          <p className="text-white text-[16px] text-center leading-normal mb-7">
            Copyright © 2026 - All rights reserved | This website design <br /> was made by{' '}
            <span className="font-semibold" style={{ color: theme.highlightColor }}>Lucas Maia</span>
          </p>
          <p className="text-white text-[12px] text-center">
            Terms & Conditions | Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}
