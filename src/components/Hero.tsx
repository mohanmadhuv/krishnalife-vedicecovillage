"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import {
  HERO_TRANSITION,
  heroItemVariants,
  heroTransition,
} from "@/lib/heroMotion";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function Hero() {
  // Below `sm` (640px), the subtitle row wraps to flex-col and the "Our
  // story" link drops to the left edge, below the subtitle — so the reveal
  // order there is title -> subtitle -> button -> image. At `sm` and above
  // the link sits beside the subtitle instead, so it reveals last:
  // title -> subtitle -> image -> button.
  const isWideLayout = useMediaQuery("(min-width: 640px)", true);
  const buttonDelayIndex = isWideLayout ? 3 : 2;
  const imageDelayIndex = isWideLayout ? 2 : 3;

  return (
    <MotionConfig transition={HERO_TRANSITION} reducedMotion="user">
      <section className="mx-auto w-full max-w-7xl px-8 pt-section sm:px-16">
        <motion.h1
          className="max-w-lg text-ink"
          initial="hidden"
          animate="visible"
          variants={heroItemVariants}
        >
          Simple Living, High Thinking Rooted in Vedic Wisdom
        </motion.h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            className="p2 max-w-lg"
            initial="hidden"
            animate="visible"
            variants={heroItemVariants}
            transition={heroTransition(1)}
          >
            Vedic Ecovillage is a growing eco-farm built on ancient knowledge
            from over 5000 years back and is taking shape in Tennessee.
          </motion.p>

          <motion.a
            href="/about"
            className="link shrink-0 whitespace-nowrap"
            initial="hidden"
            animate="visible"
            variants={heroItemVariants}
            transition={heroTransition(buttonDelayIndex)}
          >
            Our story
            <span aria-hidden>→</span>
          </motion.a>
        </div>

        <motion.div
          className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 sm:mt-20"
          initial="hidden"
          animate="visible"
          variants={heroItemVariants}
          transition={heroTransition(imageDelayIndex)}
        >
          <Image
            src="/images/krishna-life-hero.jpg"
            alt="Krishna Life Vedic Ecovillage"
            fill
            loading="eager"
            className="object-cover object-bottom"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />
        </motion.div>
      </section>
    </MotionConfig>
  );
}
