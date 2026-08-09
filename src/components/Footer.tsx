"use client";

import { useState, type FormEvent } from "react";
import {
  MdOutlineEmail,
  MdOutlineArrowForward,
} from "react-icons/md";
import { SiSubstack, SiX, SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import PrimaryButton from "./PrimaryButton";
import { momoSignature } from "@/lib/fonts";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Substack", href: "#", icon: SiSubstack },
  { label: "X", href: "#", icon: SiX },
  { label: "Instagram", href: "#", icon: SiInstagram },
  { label: "YouTube", href: "#", icon: SiYoutube },
  { label: "Facebook", href: "#", icon: SiFacebook },
];

const CONTACT_EMAIL = "hello@vedicecovillage.org";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  }

  return (
    <footer id="site-footer" className="border-t border-neutral-200">
      <div className="mx-auto w-full max-w-7xl px-8 py-section sm:px-16">
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          <div>
            <span className={`${momoSignature.className} text-2xl text-ink`}>
              Vedic Ecovillage
            </span>
            <p className="p2 mt-4 max-w-xs">
              A growing eco-farm rooted in Vedic wisdom, sustainable
              farming, and simple, sacred living in Tennessee.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link mt-4 w-fit text-sm"
            >
              <MdOutlineEmail className="h-4 w-4" aria-hidden />
              {CONTACT_EMAIL}
            </a>
            <PrimaryButton href="#visit" className="mt-6 inline-block">
              Plan your visit
            </PrimaryButton>
          </div>

          <div>
            <h3 className="text-ink">Explore</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="p2 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ink">Newsletter</h3>
            <p className="p2 mt-4">
              Exclusive updates from the farm once a month. No spam, no
              nonsense.
            </p>

            {status === "success" ? (
              <p className="p2 mt-4 text-ink">
                You&apos;re subscribed — thank you!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex items-center gap-1 rounded-full border border-neutral-200 py-1 pl-4 pr-1"
              >
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent text-[16px] text-ink placeholder:text-neutral-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  aria-label="Subscribe"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform duration-150 active:scale-[0.97] disabled:opacity-60"
                >
                  <MdOutlineArrowForward className="h-4 w-4" aria-hidden />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Vedic Ecovillage. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-ink transition-colors hover:bg-neutral-50"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
