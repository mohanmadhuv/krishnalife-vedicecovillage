"use client";

import Image from "next/image";
import {
  MdOutlineEco,
  MdOutlinePark,
  MdOutlineDinnerDining,
  MdOutlineImage as MdImageIcon,
} from "react-icons/md";
import { PiCow, PiFlower } from "react-icons/pi";
import type { IconType } from "react-icons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import useMeasure from "react-use-measure";

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
    description: "Join yoga retreats, workshops, and restorative stay-cations.",
    icon: PiFlower,
    image: "/images/village-life-wellness-retreats.png",
  },
  {
    title: "Love Feast (Prasadam)",
    description:
      "Make sure to come with an empty stomach, our 12 course feast will blow you away, and best of all it is completely free!",
    icon: MdOutlineDinnerDining,
    image: "/images/village-life-love-feast.png",
  },
];

export default function WaysToEngage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % PILLARS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section className="mx-auto w-full max-w-7xl px-8 py-section sm:px-16">
      <h2 className="max-w-2xl text-ink">Ways to Engage</h2>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="p2 max-w-lg">
          From peaceful garden walks to hands-on volunteering, discover the many
          ways to experience farm life.
        </p>

        <a href="/visit" className="link shrink-0 whitespace-nowrap">
          View photos
          <MdImageIcon className="h-5 w-5" aria-hidden />
        </a>
      </div>

      <MotionConfig
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        reducedMotion="user"
      >
        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
            {PILLARS.map((pillar, index) => (
              <PillarImage
                key={pillar.title}
                title={pillar.title}
                image={pillar.image}
                isActive={index === active}
              />
            ))}
          </div>

          <div className="flex flex-col justify-start gap-2">
            {PILLARS.map((pillar, index) => (
              <PillarRow
                key={pillar.title}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
                isActive={index === active}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </MotionConfig>
    </section>
  );
}

function PillarImage({
  title,
  image,
  isActive,
}: {
  title: string;
  image: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      style={{ pointerEvents: isActive ? "auto" : "none" }}
      initial={false}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 28 }}
      transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(min-width: 640px) 50vw, 100vw"
      />
    </motion.div>
  );
}

function PillarRow({
  title,
  description,
  icon: PillarIcon,
  isActive,
  onClick,
}: {
  title: string;
  description: string;
  icon: IconType;
  isActive: boolean;
  onClick: () => void;
}) {
  const [measureRef, bounds] = useMeasure();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={{ height: bounds.height || "auto" }}
      className="relative w-full overflow-hidden rounded-xl text-left transition-colors hover:bg-neutral-50"
    >
      {isActive && (
        <motion.span
          layoutId="pillar-highlight"
          className="absolute inset-0 rounded-xl bg-neutral-100"
        />
      )}
      <div
        ref={measureRef}
        className="relative z-10 flex flex-col gap-2 px-5 py-4"
      >
        <span className="flex items-center gap-3">
          <PillarIcon className="h-5 w-5 shrink-0 text-ink" />
          <h3 className="text-ink">{title}</h3>
        </span>
        <div className="relative">
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.p
                key={title}
                className="p2 pl-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6, position: "absolute" }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.button>
  );
}
