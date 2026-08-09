"use client";

import Image from "next/image";
import {
  MdOutlineEco,
  MdOutlinePark,
  MdOutlineImage as MdImageIcon,
} from "react-icons/md";
import { PiCow, PiFlower } from "react-icons/pi";
import { useEffect, useState } from "react";

const AUTO_ADVANCE_MS = 4000;

const PILLARS = [
  {
    title: "Connect with Nature",
    description:
      "Explore lush gardens, orchards, and peaceful woods to find clarity and calm.",
    icon: MdOutlineEco,
    image: "/images/village-life-connect-with-nature.png",
  },
  {
    title: "Meet Our Animals",
    description:
      "Connect with gentle animals, each with their unique personality.",
    icon: PiCow,
    image: "/images/village-life-meet-our-animals.webp",
  },
  {
    title: "Volunteer & Learn",
    description: "Tend the land and discover sustainable farming practices.",
    icon: MdOutlinePark,
    image: "/images/village-life-volunteer-and-learn.png",
  },
  {
    title: "Wellness Retreats",
    description:
      "Join yoga retreats, workshops, and restorative stay-cations.",
    icon: PiFlower,
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
      <h2 className="max-w-2xl text-ink">Ways to Connect</h2>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="p2 max-w-lg">
          From peaceful garden walks to hands-on volunteering, discover the
          many ways to experience farm life.
        </p>

        <a href="#visit" className="link shrink-0 whitespace-nowrap">
          View photos
          <MdImageIcon className="h-4 w-4" aria-hidden />
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
                  <PillarIcon className="h-4 w-4 shrink-0 text-ink" />
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
