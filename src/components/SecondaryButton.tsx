import type { ReactNode } from "react";

export default function SecondaryButton({
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
      className={`inline-block rounded-full border border-white bg-white px-4.5 py-1.5 text-center text-[16px] font-medium text-ink transition-transform duration-150 active:scale-[0.97] ${className}`}
    >
      {children}
    </a>
  );
}
