"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import PrimaryButton from "./PrimaryButton";
import Logo from "./Logo";

const BLOG_URL = "https://southsidecommunityfarm.substack.com/";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "Blog", href: BLOG_URL, external: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur-sm transition-transform duration-300 ${
        footerVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 sm:px-16">
        <a href="/">
          <Logo className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-9 min-[960px]:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`link ${pathname === link.href ? "text-[#FF8513]" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden min-[480px]:block">
          <PrimaryButton href="/visit">Plan your visit</PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-ink min-[960px]:hidden"
        >
          {open ? (
            <MdOutlineClose className="h-5 w-5" />
          ) : (
            <MdOutlineMenu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-8 py-6 min-[960px]:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className={`link ${pathname === link.href ? "text-[#FF8513]" : ""}`}
              >
                {link.label}
              </a>
            ))}
            <div className="min-[480px]:hidden">
              <PrimaryButton
                href="/visit"
                onClick={() => setOpen(false)}
                className="mt-2 block"
              >
                Plan Your Visit
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
