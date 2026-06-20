import React from "react";

interface ThemeToggleProps {
  isPersonal: boolean;
  onToggle: () => void;
  primaryColor: string;
}

export function ThemeToggle({ isPersonal, onToggle, primaryColor }: ThemeToggleProps) {
  return (
    <div className="flex flex-col items-center gap-[8px]">
      <p className="text-white text-[13px] font-bold tracking-[1.92px] drop-shadow-md">VFX</p>
      <button
        onClick={onToggle}
        className="relative w-[55px] h-[27px] rounded-full transition-all duration-300 hover:opacity-90"
        style={{ backgroundColor: isPersonal ? "#5645A6" : "#282828" }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[21px] h-[21px] rounded-full bg-[#F2EFFF] transition-all duration-300 shadow-md"
          style={{ left: isPersonal ? 'calc(100% - 24px)' : '3px' }}
        />
      </button>
    </div>
  );
}
