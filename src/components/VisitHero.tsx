"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import {
  HERO_TRANSITION,
  heroItemVariants,
  heroTransition,
} from "@/lib/heroMotion";

export default function VisitHero() {
  return (
    <MotionConfig transition={HERO_TRANSITION} reducedMotion="user">
      <section className="mx-auto w-full max-w-7xl px-8 pt-section pb-section sm:px-16">
        <motion.h1
          className="max-w-lg text-ink"
          initial="hidden"
          animate="visible"
          variants={heroItemVariants}
        >
          Plan Your Visit
        </motion.h1>

        <motion.p
          className="p2 mt-6 max-w-lg"
          initial="hidden"
          animate="visible"
          variants={heroItemVariants}
          transition={heroTransition(1)}
        >
          Escape to Krishna Life Vedic Ecovillage, where nature and community
          unite in the Tennessee mountains. Whether you&apos;re seeking a day
          visit, a workshop, or a longer stay, we have something special for
          everyone.
        </motion.p>

        <motion.div
          className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 sm:mt-20"
          initial="hidden"
          animate="visible"
          variants={heroItemVariants}
          transition={heroTransition(2)}
        >
          <Image
            src="/images/krishna-life-hero.jpg"
            alt="Visitors exploring Krishna Life Vedic Ecovillage"
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
