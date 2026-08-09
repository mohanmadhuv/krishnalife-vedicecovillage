"use client";

import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 sm:px-16">
        <a href="/" className="p1 font-medium tracking-tight text-ink">
          Vedic Ecovillage
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p1 text-neutral-600 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <PrimaryButton href="#visit" className="hidden md:inline-block">
          Plan Your Visit
        </PrimaryButton>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-8 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="p1 text-neutral-700"
              >
                {link.label}
              </a>
            ))}
            <PrimaryButton href="#visit" onClick={() => setOpen(false)} className="mt-2 block">
              Plan Your Visit
            </PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}
