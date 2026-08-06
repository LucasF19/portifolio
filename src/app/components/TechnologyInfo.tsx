import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface TechnologyInfoProps {
  theme: {
    primaryColor: string;
    subtitle: string;
    iconBorder: string;
    cardIconBg: string;
    borderCardsAbout: string;
    tagsAboutBg: string;
    titleAboutInfo: string;
  };
  selectedTech: number | null;
  technologies: Array<{
    id: number;
    name: string;
    description: string;
    icon: React.ElementType;
    tags: string[];
    whyUse: string;
    whereUse: string;
    documentation: string;
  }>;
  image: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function TechnologyInfo({
  selectedTech,
  technologies,
  image,
  onMouseEnter,
  onMouseLeave,
  theme
}: TechnologyInfoProps) {
  if (selectedTech !== null) {
    const tech = technologies[selectedTech];
    const Icon = tech.icon;

    return (
      <div
        onClick={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="
          mt-6
          relative
          overflow-hidden
          rounded-[25px]
          border
          min-h-[250px]

          animate-in
          fade-in
          zoom-in-[0.98]
          duration-500

          before:absolute
          before:top-0
          before:left-[-120%]
          before:w-[70%]
          before:h-full
          before:skew-x-[-25deg]
          before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]
          before:animate-[shine_1.8s_ease_forwards]
        "
        style={{
          background: `linear-gradient(135deg, ${theme.cardIconBg}, #07142a)`,
        }}
      >
        <div
          className="
            absolute
            inset-0
            animate-pulse
          "
          style={{
            background: `
              radial-gradient(
                circle at top right,
                ${theme.primaryColor}40,
                transparent 35%
              )
            `,
            animationDuration: "4s"
          }}
        />
        <div className="relative z-10 flex h-full">
          <div className="w-[280px] py-10 px-11 border-1 flex flex-col justify-center items-center">
            <div className="w-full h-full p-[40px] rounded-[50px] border flex items-center justify-center" style={{
              background: theme.cardIconBg,
              borderColor: theme.iconBorder,
              boxShadow: `0 0 25px ${theme.primaryColor}55`
            }}>
              <Icon
                className="
                  w-full
                  h-full
                  text-white
                  animate-in
                  fade-in
                  zoom-in
                  duration-500
                "
              />
            </div>
          </div>

          <div className="flex-1 gap-4 py-4 px-8 flex flex-col justify-between">
            <div className="flex flex-col items-start">
              <a
                href={tech.documentation}
                target="_blank"
                rel="noreferrer"
                className="
                  font-bold
                  flex
                  items-center
                  gap-2
                  text-[30px]
                  hover:!text-white
                  duration-300
                  transition-all
                "
                style={{
                  color: theme.subtitle
                }}
              >
                {tech.name}
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>

              <p className="text-[#f3f3f3] text-[14px] tracking-[1px] max-w-[900px]">
                {tech.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {tech.tags.map((tag) => (
                <div
                  key={tag}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    text-[13px]
                    tracking-[1px]
                    cursor-default
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]
                  "
                  style={{
                    background: theme.cardIconBg,
                    borderColor: theme.iconBorder,
                    color: "#f3f3f3"
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-[18px] border py-3 px-5" style={{
                borderColor: theme.borderCardsAbout,
                background: `${theme.cardIconBg}55`
              }}>
                <span className="text-[13px] uppercase tracking-[2px]" style={{
                  color: theme.subtitle
                }}>
                  Por que utilizo?
                </span>

                <p className="text-[#f3f3f3] text-[15px] leading-[28px] mt-3">
                  {tech.whyUse}
                </p>
              </div>

              <div className="rounded-[18px] border py-3 px-5" style={{
                borderColor: theme.borderCardsAbout,
                background: `${theme.cardIconBg}55`
              }}>
                <span className="text-[13px] uppercase tracking-[2px]" style={{
                  color: theme.subtitle
                }}>
                  Onde utilizo?
                </span>

                <p className="text-[#f3f3f3] text-[15px] leading-[28px] mt-3">
                  {tech.whereUse}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 h-[285px] w-full rounded-[25px] overflow-hidden border">
      <img
        src={image}
        className="w-full h-full object-cover animate-in fade-in duration-500"
        style={{ objectPosition: "center" }}
      />
    </div>
  );
}