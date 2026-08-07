import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ThemeToggle } from "./components/ThemeToggle";
import { TechnologyInfo } from "./components/TechnologyInfo";
import { TechnologyIcon } from "./components/TechnologyIcon";

import { FaRegFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowUpRightFromSquare, FaCirclePlus } from "react-icons/fa6";

import { cardsAbout, linkTypeConfig, projects, technologies } from "../assets/utils/mocks";
import { personalTheme, professionalTheme } from "../assets/utils/theme";
import { redirect } from "../assets/utils/tools";

import imgBgProfessional from "../imports/ProjetoProfissional/mainBackground.png";
import imgBgPersonal from "../imports/ProjetoPessoal/mainBackground.png";

import curriculumPdf from "../assets/cv/lucas-maia-cv.pdf";

import ContactCard from "./components/ContactCard";

export default function App() {
  const [isPersonal, setIsPersonal] = useState(false);
  const [selectedTech, setSelectedTech] = useState<number | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const timeoutRef = useRef<any>(1);
  const theme = isPersonal ? professionalTheme : personalTheme;

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

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
              <motion.div
                className="flex gap-[65px] items-center"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredNav(link.href)}
                    onMouseLeave={() => setHoveredNav(null)}
                    className="relative text-white text-[16px] tracking-[1px] font-normal py-1 text-shadow-lg"
                    variants={{
                      hidden: { opacity: 0, y: -12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.label}

                    {hoveredNav === link.href && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full"
                        style={{ backgroundColor: theme.primaryColor }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </motion.div>
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
            <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-[45px] mb-2 text-shadow-lg font-bold tracking-[11px] leading-[50px]">
              OLÁ, SEJA BEM-VINDO
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="font-light text-[17px] tracking-[3px] leading-[20px]">
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
        </div>
      </div>

      <div className="p-5 bg-[#080b1a]" id="about">
        <div className="flex items-stretch justify-between">
          <div className="max-w-[520px]">
            <motion.h3 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-white text-[35px] font-semibold drop-shadow-lg">
              Sobre
            </motion.h3>
            <motion.p initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-[#f3f3f3] text-[18px] font-light tracking-[2px]">
              Desenvolvimento de aplicações modernas com foco na experiência do usuário.
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-7">
              {technologies.map((tech, index) => (
                <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: index * 0.1, }}>
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
            <motion.div className="flex items-end justify-end gap-[8px]" initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 2 }}>
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
                  <motion.div key={item.id} className="rounded-[15px] bg-[#121525] p-2" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: index * 0.2, }}>
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

        <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
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
        <motion.h2 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-white text-[35px] font-semibold drop-shadow-lg">
          Projetos
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[#f3f3f3] text-[18px] font-light tracking-[2px]">
          Explore projetos desenvolvidos durante minha jornada.
        </motion.p>

        <div className="grid grid-cols-4 gap-6 my-7">
          {[...Array(8)].map((_, index) => {
            const project = projects[index];

            if (project) {
              const hasLink = Boolean(project.link);

              return (
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.13 }}
                  key={index}
                  className={`flex flex-col justify-between max-h-[310px] rounded-[18px] overflow-hidden bg-[#10142a] border border-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] ${hasLink ? "cursor-pointer" : "cursor-default"}`}
                  onClick={() => hasLink && redirect(project.link)}
                >
                  <div className="h-full relative overflow-hidden">
                    <ImageWithFallback
                      alt={project.title}
                      className="w-full h-full object-cover"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10142a] via-[#10142a]/40 to-transparent" />

                    <div className="w-full px-2 justify-between flex items-center gap-2 absolute top-2">
                      <span
                        className="flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md"
                        style={{
                          backgroundColor: linkTypeConfig[project.linkType].badgeBg,
                          color: linkTypeConfig[project.linkType].badgeText,
                        }}
                      >
                        {linkTypeConfig[project.linkType].icon}
                        {linkTypeConfig[project.linkType].label}
                      </span>

                      <span
                        className="text-[11px] text-white px-2.5 py-1 rounded-full backdrop-blur-md"
                        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
                      >
                        {project.technologies}
                      </span>
                    </div>
                  </div>

                  <div className="p-[18px] pt-0">
                    <h3 className="text-white text-[22px] font-bold drop-shadow-md">
                      {project.title}
                    </h3>
                      
                    <p className="text-white/70 text-[13px] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {hasLink && (
                      <button
                        style={{ backgroundColor: theme.primaryColor }}
                        className="cursor-pointer mt-4 w-full flex items-center justify-center gap-3 p-2 rounded-[15px] text-white text-[13px] font-semibold transition-transform hover:scale-[1.02]"
                        onClick={(e) => {
                          e.stopPropagation();
                          redirect(project.link);
                        }}
                      >
                        {linkTypeConfig[project.linkType].buttonLabel}
                        <FaArrowUpRightFromSquare className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            }

            return (
              <div
                key={index}
                className="group w-full min-h-[280px] rounded-[18px] bg-white/[0.03] border-2 border-dashed border-white/10 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 flex items-center justify-center"
              >
                <FaCirclePlus className="w-10 h-10 text-white/15 transition-all duration-500 group-hover:scale-110 group-hover:text-white/30" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#080b1a] p-10" id="contact">
        <p className="text-white text-[13px] text-center leading-normal">
          Copyright © 2026 - All rights reserved | This website design <br /> was made by{' '}
          <span className="font-semibold" style={{ color: theme.highlightColor }}>Lucas Maia</span>
        </p>
      </div>
    </div>
  );
}