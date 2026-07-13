import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { redirect } from "../../assets/utils/tools";

type ContactCardProps = {
  icon: React.ReactNode;
  value: string;
  theme: any;
  link?: string | undefined;
};

export default function ContactCard({ icon, value, theme, link }: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link ? link : value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className="group h-[45px] rounded-[20px] p-1 px-2 flex items-center gap-[12px] cursor-pointer relative"
      style={{ background: theme.cardIconBg }}
      onClick={() => redirect(link ? link : undefined)}
    >
      <div
        className="flex items-center justify-center h-8 w-8 rounded-full bg-white"
      >
        {copied ? (
          <FaCheckCircle className="text-green-500 text-md font-bold"/>
        ) : (
          <>
            <span className="group-hover:hidden">
              {icon}
            </span>

            <MdContentCopy onClick={handleCopy} className="hidden group-hover:block text-[#222950] w-4 h-4" />
          </>
        )}
      </div>

      <span className="text-white text-[13px] tracking-[1.68px]">
        {value}
      </span>
    </div>
  );
}