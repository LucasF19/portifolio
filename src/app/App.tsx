import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ThemeToggle } from "./components/ThemeToggle";
import { TechnologyInfo } from "./components/TechnologyInfo";
import { TechnologyIcon } from "./components/TechnologyIcon";

import { FaRegFileAlt, FaGithub, FaLinkedinIn, FaChevronDown } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowUpRightFromSquare, FaCirclePlus } from "react-icons/fa6";

import { cardsAbout, linkTypeConfig, navLinks, projects, roles, stats, technologies, techStack } from "../assets/utils/mocks";
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

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 80]);

  function useTypewriter(words: any, speed = 70, pause = 1800) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
      const current = words[wordIndex % words.length];
      let timeout: number | undefined;

      if (!deleting && text === current) {
        timeout = setTimeout(() => setDeleting(true), pause);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      } else {
        timeout = setTimeout(() => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        }, deleting ? speed / 2 : speed);
      }

      return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex, words, speed, pause]);

    return text;
  }

  const typedRole = useTypewriter(roles);

  return (
    <div>
      <div className="min-h-[100svh] relative overflow-hidden" id="home">
        <div className="absolute inset-0">
          <motion.div
            style={{ y: bgY, backgroundImage: `url(${imgBgProfessional})` }}
            className={`
              absolute inset-0 -top-20 h-[calc(100%+80px)]
              bg-cover bg-top
              transition-opacity duration-700 ease-in-out
              ${isPersonal ? "opacity-0" : "opacity-100"}
            `}
          />
          <motion.div
            style={{ y: bgY, backgroundImage: `url(${imgBgPersonal})` }}
            className={`
              absolute inset-0 -top-20 h-[calc(100%+80px)]
              bg-cover bg-bottom
              transition-opacity duration-700 ease-in-out
              ${isPersonal ? "opacity-100" : "opacity-0"}
            `}
          />

          <div
            className="absolute left-0 top-0 h-full w-full md:w-[75%] transition-all duration-700 ease-in-out"
            style={{
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              background: `linear-gradient(160deg, ${theme.overlayColor} 0%, ${theme.overlayColor} 60%, rgba(0,0,0,0.15) 100%)`,
            }}
          />
          <div
            className="hidden md:block absolute left-0 top-0 h-full w-[75%] transition-all duration-700 ease-in-out"
            style={{
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              clipPath: "polygon(0 0, 75% 0, 45% 100%, 0 100%)",
              background: `linear-gradient(160deg, ${theme.overlayColor} 0%, ${theme.overlayColor} 60%, rgba(0,0,0,0.15) 100%)`,
            }}
          />

          <div
            className="absolute inset-0 md:left-0 md:top-0 md:h-full md:w-[75%] opacity-[0.06] pointer-events-none"
            style={{
              clipPath: "polygon(0 0, 75% 0, 45% 100%, 0 100%)",
              backgroundImage: `radial-gradient(circle, ${theme.primaryColor} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.32) 100%)",
            }}
          />
        </div>

        <div className="px-5 sm:px-8 md:px-[35px] pt-5 sm:pt-6 md:pt-7 pb-6 sm:pb-8 relative flex flex-col justify-between min-h-[100svh] w-full">
          <div className="flex items-start justify-between gap-4">
            <nav className="flex-1 min-w-0">
              <motion.div
                className="flex gap-4 sm:gap-8 md:gap-[65px] items-center overflow-x-auto no-scrollbar"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredNav(link.href)}
                    onMouseLeave={() => setHoveredNav(null)}
                    className="relative whitespace-nowrap text-white text-[13px] sm:text-[14px] md:text-[16px] tracking-[1px] font-normal py-1 text-shadow-lg"
                    variants={{ hidden: { opacity: 0, y: -12 }, visible: { opacity: 1, y: 0 } }}
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

            <div className="flex flex-col text-end leading-[10px] shrink-0">
              <div>
                <h2 className="text-white font-semibold text-[18px] sm:text-[24px] md:text-[35px] leading-[24px] sm:leading-[36px] md:leading-[55px] tracking-[1px] md:tracking-[2px] text-shadow-lg">
                  Lucas Maia
                </h2>
                <p className="font-light text-white text-[12px] sm:text-[15px] md:text-[20px] tracking-[1px] md:tracking-[3px] text-shadow-lg h-[18px] sm:h-[22px] md:h-[24px]">
                  {typedRole}
                  <span className="inline-block w-[2px] h-[12px] sm:h-[14px] md:h-[16px] ml-[2px] align-middle bg-white animate-pulse" />
                </p>
              </div>

              <div className="flex items-center justify-end mt-2 gap-3 sm:gap-4">
                <div
                  onClick={() => redirect("https://github.com/LucasF19")}
                  className="cursor-pointer flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white hover:scale-103 transition-transform"
                >
                  <FaGithub className="w-6 h-6 sm:w-10 sm:h-10" style={{ color: theme.primaryColor }} />
                </div>
                <div
                  onClick={() => redirect("https://www.linkedin.com/in/lucas-maia-55728a233/")}
                  className="cursor-pointer flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full hover:scale-103 transition-transform"
                  style={{ background: theme.primaryColor }}
                >
                  <FaLinkedinIn className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-white w-full max-w-[435px] mt-6 md:mt-0">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[28px] sm:text-[36px] md:text-[45px] mb-2 text-shadow-lg font-bold tracking-[3px] sm:tracking-[6px] md:tracking-[11px] leading-[32px] sm:leading-[40px] md:leading-[50px]"
            >
              OLÁ, SEJA BEM-VINDO
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-light text-[14px] sm:text-[15px] md:text-[17px] tracking-[1px] sm:tracking-[2px] md:tracking-[3px] leading-[18px] sm:leading-[19px] md:leading-[20px]"
            >
              Conheça projetos em que me dediquei durante minha carreira.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-2 mt-4 flex-wrap"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full border border-white/30 backdrop-blur-sm text-white"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex gap-4 sm:gap-6 mt-5 text-shadow-lg flex-wrap"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">{stat.value}</span>
                  <p className="text-[11px] sm:text-[12px] opacity-80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col items-end mt-6 md:mt-0">
            <ThemeToggle
              isPersonal={isPersonal}
              onToggle={() => setIsPersonal(!isPersonal)}
              primaryColor={theme.primaryColor}
            />

            <button
              className={`mt-5 flex items-center cursor-pointer gap-2 px-6 sm:px-8 md:px-[35px] py-[6px] rounded-[20px] text-[14px] sm:text-[15px] md:text-[17px] font-bold transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-[0_0_25px_rgba(255,255,255,0.18)]`}
              style={{
                backgroundColor: theme.buttonBgCv,
                color: theme.buttonTextCv
              }}
              onClick={() => redirect(curriculumPdf)}
            >
              Currículo
              <FaRegFileAlt className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/70"
          >
            <FaChevronDown />
          </motion.div>
        </div>
      </div>

      <div className="p-5 sm:p-8 md:p-10 lg:p-[35px] bg-[#080b1a]" id="about">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-stretch justify-between gap-8 lg:gap-6">
          <div className="w-full lg:max-w-[520px]">
            <motion.h3 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-white text-[24px] sm:text-[28px] md:text-[35px] font-semibold drop-shadow-lg">
              Habilidades Técnicas
            </motion.h3>
            <motion.p initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-[#f3f3f3] text-[14px] sm:text-[16px] md:text-[18px] font-light tracking-[1px] sm:tracking-[2px]">
              Tecnologias e ferramentas que utilizo no desenvolvimento de projetos.
            </motion.p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7">
              {technologies.map((tech, index) => (
                <motion.div key={tech.id} initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: index * 0.1, }}>
                  <TechnologyIcon
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

          <div className="flex flex-col gap-4 h-auto w-full lg:w-auto">
            <motion.div className="flex flex-wrap md:flex-nowrap items-end justify-start lg:justify-end gap-2 sm:gap-[8px]" initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 2 }}>
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

            <div className="h-full flex flex-col sm:flex-row flex-wrap md:flex-nowrap gap-4 sm:gap-[27px]">
              {
                cardsAbout.map((item: any, index: number) => (
                  <motion.div key={item.id} className="flex-1 min-w-[220px] rounded-[15px] bg-[#121525] p-2" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: index * 0.2, }}>
                    <div className="h-full flex flex-col gap-4 sm:gap-5 items-center border-2 justify-start px-6 sm:px-[25px] py-6 sm:py-8 rounded-[15px]" style={{ borderColor: theme.borderCardsAbout }}>
                      <div className="rounded-full w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] flex items-center justify-center bg-transparent" style={{ border: `2px solid ${theme.iconBorder}` }}>
                        <div className="flex items-center justify-center rounded-full w-[54px] h-[54px] sm:w-[70px] sm:h-[70px]" style={{ backgroundColor: theme.cardIconBg, }}>
                          <img src={item.imagePath} alt={item.title} className="w-8 sm:w-10" />
                        </div>
                      </div>
                      <h3 className="text-[#f3f3f3] text-[16px] sm:text-[18px] font-bold text-center w-full tracking-[1px] sm:tracking-[2px]">
                        {item.title}
                      </h3>
                      <p className="w-full max-w-[180px] text-[#F3F3F3] text-[14px] sm:text-[15px] font-light text-center">
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

      <div className="p-5 sm:p-8 md:p-10 lg:p-[35px]" style={{ backgroundImage: `linear-gradient(to bottom, ${theme.gradientFrom}, ${theme.gradientTo})` }} id="projects">
        <motion.h2 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-white text-[24px] sm:text-[28px] md:text-[35px] font-semibold drop-shadow-lg">
          Projetos
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[#f3f3f3] text-[14px] sm:text-[16px] md:text-[18px] font-light tracking-[1px] sm:tracking-[2px]">
          Explore projetos desenvolvidos durante minha jornada.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 my-6 sm:my-7">
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
                  className={`flex flex-col justify-between min-h-[260px] sm:max-h-[310px] rounded-[18px] overflow-hidden bg-[#10142a] border border-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] ${hasLink ? "cursor-pointer" : "cursor-default"}`}
                  onClick={() => hasLink && redirect(project.link)}
                >
                  <div className="h-[180px] sm:h-full relative overflow-hidden">
                    <ImageWithFallback
                      alt={project.title}
                      className="w-full h-full object-cover"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10142a] via-[#10142a]/40 to-transparent" />

                    <div className="w-full px-2 justify-between flex items-center gap-2 absolute top-2 flex-wrap">
                      <span
                        className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-1 rounded-full backdrop-blur-md"
                        style={{
                          backgroundColor: linkTypeConfig[project.linkType].badgeBg,
                          color: linkTypeConfig[project.linkType].badgeText,
                        }}
                      >
                        {linkTypeConfig[project.linkType].icon}
                        {linkTypeConfig[project.linkType].label}
                      </span>

                      <span
                        className="text-[10px] sm:text-[11px] text-white px-2 sm:px-2.5 py-1 rounded-full backdrop-blur-md"
                        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
                      >
                        {project.technologies}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-[18px] pt-0">
                    <h3 className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-bold drop-shadow-md">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-[12px] sm:text-[13px] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {hasLink && (
                      <button
                        style={{ backgroundColor: theme.primaryColor }}
                        className="cursor-pointer mt-4 w-full flex items-center justify-center gap-3 p-2 rounded-[15px] text-white text-[12px] sm:text-[13px] font-semibold transition-transform hover:scale-[1.02]"
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
                className="group w-full min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] rounded-[18px] bg-white/[0.03] border-2 border-dashed border-white/10 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 flex items-center justify-center"
              >
                <FaCirclePlus className="w-8 h-8 sm:w-10 sm:h-10 text-white/15 transition-all duration-500 group-hover:scale-110 group-hover:text-white/30" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#080b1a] px-5 sm:px-8 py-8 sm:py-10" id="contact">
        <p className="text-white text-[12px] sm:text-[13px] text-center leading-normal">
          Copyright © 2026 - All rights reserved | This website design <br className="hidden sm:block" /> was made by{' '}
          <span className="font-semibold" style={{ color: theme.highlightColor }}>Lucas Maia</span>
        </p>
      </div>
    </div>
  );
}