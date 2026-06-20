import React from "react";

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
    <div
      className="
        rounded-[14px]
        p-1
        transition-all
        duration-300
        hover:scale-115
        hover:-translate-y-1
        hover:shadow-2xl
        group
        cursor-pointer
        hover:opacity-[90%]
        hover:shadow-[0px_0px_10px_4px_#bababa22]
        "
      style={{ backgroundColor: iconBg}}
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
    </div>
  );
}