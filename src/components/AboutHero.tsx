"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import Typewriter from "@/components/Typewriter";
import {
  HERO_TRANSITION,
  heroItemVariants,
  heroTransition,
} from "@/lib/heroMotion";

const HERO_PHRASES = ["escape your 9-5", "find your purpose", "live simply"];

const HERO_STATS = [
  { value: "580", label: "Acres" },
  { value: "25", label: "Monks" },
  { value: "0", label: "Troubles" },
];

export default function AboutHero() {
  return (
    <MotionConfig transition={HERO_TRANSITION} reducedMotion="user">
      <section className="mx-auto w-full max-w-7xl px-8 pt-section pb-section sm:px-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.h1
            className="text-ink"
            initial="hidden"
            animate="visible"
            variants={heroItemVariants}
          >
            <span className="block">We&apos;re building this so you can</span>
            <Typewriter words={HERO_PHRASES} className="mt-1" />
          </motion.h1>

          <motion.p
            className="p2 mx-auto mt-6 max-w-lg"
            initial="hidden"
            animate="visible"
            variants={heroItemVariants}
            transition={heroTransition(1)}
          >
            We&apos;re building a conscious experiential eco-village
            where you can cuddle cows, grow your own food, and discover the
            loving community you&apos;ve always wanted — a return to simple,
            natural, way of living that&apos;s grounded in 5,000-year-old Vedic wisdom.
          </motion.p>

          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-16 sm:mt-16 sm:gap-16"
            initial="hidden"
            animate="visible"
            variants={heroItemVariants}
            transition={heroTransition(2)}
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-[32px] font-medium leading-[1.25] tracking-[-0.02em] text-ink">
                  {stat.value}
                </span>
                <span className="p2 mt-2">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 sm:mt-20"
          initial="hidden"
          animate="visible"
          variants={heroItemVariants}
          transition={heroTransition(3)}
        >
          <Image
            src="/images/village-life-community.png"
            alt="Community members sharing a moment together on a bench in the Tennessee woods"
            fill
            loading="eager"
            className="object-cover"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />
        </motion.div>
      </section>
    </MotionConfig>
  );
}
