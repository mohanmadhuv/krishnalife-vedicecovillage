"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AUTO_ADVANCE_MS = 4000;

const PILLARS = [
  {
    title: "Connect with Nature",
    description:
      "Explore lush gardens, orchards, and peaceful woods to find clarity and calm.",
    icon: LeafIcon,
    image: "/images/village-life-connect-with-nature.png",
  },
  {
    title: "Meet Our Animals",
    description:
      "Connect with gentle animals, each with their unique personality.",
    icon: PawIcon,
    image: "/images/village-life-meet-our-animals.webp",
  },
  {
    title: "Volunteer & Learn",
    description: "Tend the land and discover sustainable farming practices.",
    icon: SpadeIcon,
    image: "/images/village-life-volunteer-and-learn.png",
  },
  {
    title: "Wellness Retreats",
    description:
      "Join yoga retreats, workshops, and restorative stay-cations.",
    icon: LotusIcon,
    image: "/images/village-life-wellness-retreats.png",
  },
];

export default function WaysToConnect() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % PILLARS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [active]);

  const activePillar = PILLARS[active];
  const Icon = activePillar.icon;

  return (
    <section className="mx-auto w-full max-w-7xl px-8 py-section sm:px-16">
      <h2 className="max-w-md text-ink">Ways to Connect</h2>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="p2 max-w-lg">
          From peaceful garden walks to hands-on volunteering, discover the
          many ways to experience farm life.
        </p>

        <a href="#visit" className="link shrink-0 whitespace-nowrap">
          View Photos
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          {activePillar.image ? (
            <Image
              key={activePillar.title}
              src={activePillar.image}
              alt={activePillar.title}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          ) : (
            <Icon className="h-20 w-20 text-ink transition-opacity duration-300 sm:h-28 sm:w-28" />
          )}
        </div>

        <div className="flex flex-col justify-start gap-2">
          {PILLARS.map((pillar, index) => {
            const isActive = index === active;
            const PillarIcon = pillar.icon;
            return (
              <button
                key={pillar.title}
                type="button"
                onClick={() => setActive(index)}
                className={`flex w-full flex-col gap-2 rounded-xl px-5 py-4 text-left transition-colors ${
                  isActive ? "bg-neutral-100" : "hover:bg-neutral-50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <PillarIcon className="h-5 w-5 shrink-0 text-ink" />
                  <h3 className="text-ink">{pillar.title}</h3>
                </span>
                {isActive && (
                  <p className="p2 pl-8">{pillar.description}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M5 19c3-5 6-8 11-11" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="7" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="7.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 15.5c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 3.5-4 3.5-4-1.3-4-3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpadeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 6h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M7.5 13c0 3.5 2 6.5 4.5 6.5s4.5-3 4.5-6.5c-1.5 1-3 1.4-4.5 1.4s-3-.4-4.5-1.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 20c-4-1-6-4-6-8 3 0 5 1.5 6 4 1-2.5 3-4 6-4 0 4-2 7-6 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 16c-1.5-3-1.5-7 0-11 1.5 4 1.5 8 0 11Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
