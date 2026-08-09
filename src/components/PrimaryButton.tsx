import type { ReactNode } from "react";

export default function PrimaryButton({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`p1 inline-block rounded-full border border-[#D76F00] bg-gradient-to-b from-[#FFB45D] to-[#FF8513] px-4.5 py-1.5 text-center capitalize font-medium text-white transition-[filter,transform] duration-150 active:scale-[0.97] ${className}`}
    >
      {children}
    </a>
  );
}
