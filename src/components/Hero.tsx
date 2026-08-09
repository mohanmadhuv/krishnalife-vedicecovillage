"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import {
  HERO_EASE,
  HERO_DURATION,
  heroItemVariants,
  heroTransition,
} from "@/lib/heroMotion";

export default function Hero() {
  return (
    <MotionConfig
      transition={{ duration: HERO_DURATION, ease: HERO_EASE }}
      reducedMotion="user"
    >
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
            transition={heroTransition(3)}
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
          transition={heroTransition(2)}
        >
          <Image
            src="/images/krishna-life-hero.jpg"
            alt="Krishna Life Vedic Ecovillage"
            fill
            priority
            className="object-cover object-bottom"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />
        </motion.div>
      </section>
    </MotionConfig>
  );
}
