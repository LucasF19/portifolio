import React from "react";
import { motion, scale } from "framer-motion"

interface TechnologyIconProps {
  icon: React.ElementType;
  name: string;
  iconBg: string;
  iconBorder: string;
  onClick: () => void;
}

export function TechnologyIcon({
  icon: Icon,
  name,
  iconBg,
  iconBorder,
  onClick
}: TechnologyIconProps) {
  return (
    <motion.div
      className="
        rounded-[14px]
        p-1
        group
        cursor-pointer
        hover:shadow-[0px_0px_10px_4px_#bababa22]
        "
      style={{ backgroundColor: iconBg}}
      whileHover={{ scale: 1.1 }}
      whileTap={{scale: 0.9, opacity: 0.9}}
      transition={{type: "spring", stiffness: 200}}
    >
      <button
        className="p-[30px] rounded-[14px] relative cursor-pointer"
        onClick={onClick}
        aria-label={name}
        style={{ border: `2px solid ${iconBorder}` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="
            text-white
            w-[33px]
            h-[33px]
            transition-all
            duration-300
            group-hover:scale-110
          "
          />
        </div>
      </button>
    </motion.div>
  );
}