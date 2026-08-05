import React from "react";
import { redirect } from "../../assets/utils/tools";

type ContactCardProps = {
  icon: React.ReactNode;
  value: string;
  theme: any;
  link?: string | undefined;
};

export default function ContactCard({ icon, value, theme, link }: ContactCardProps) {
  return (
    <div
      className="group h-[45px] rounded-[20px] p-1 px-2 flex items-center gap-[12px] cursor-pointer relative"
      style={{ background: theme.cardIconBg }}
      onClick={() => redirect(link ? link : undefined)}
    >
      <div
        className="flex items-center justify-center h-8 w-8 rounded-full bg-white"
      >
        <span>
          {icon}
        </span>
      </div>

      <span className="text-white text-[13px] tracking-[1.68px]">
        {value}
      </span>
    </div>
  );
}