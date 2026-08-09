"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import {
  HERO_TRANSITION,
  heroItemVariants,
  heroTransition,
} from "@/lib/heroMotion";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? () => {} : useLayoutEffect;

export default function Hero() {
  // Below `sm` (640px), the subtitle row wraps to flex-col and the "Our
  // story" link drops to the left edge, below the subtitle — so the reveal
  // order there is title -> subtitle -> button -> image. At `sm` and above
  // the link sits beside the subtitle instead, so it reveals last:
  // title -> subtitle -> image -> button.
  //
  // `ready` and `isWideLayout` are set together, atomically, in one layout
  // effect, and the entrance animation only starts (animate flips from
  // "hidden" to "visible") once `ready` is true. This guarantees Motion
  // never begins animating with the wrong (SSR-default) breakpoint — there
  // is no window where it could start, then get corrected too late.
  const [{ ready, isWideLayout }, setState] = useState({
    ready: false,
    isWideLayout: true,
  });

  useIsomorphicLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    setState({ ready: true, isWideLayout: mediaQuery.matches });

    const listener = (event: MediaQueryListEvent) =>
      setState((s) => ({ ...s, isWideLayout: event.matches }));
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const animate = ready ? "visible" : "hidden";
  const buttonDelayIndex = isWideLayout ? 3 : 2;
  const imageDelayIndex = isWideLayout ? 2 : 3;

  return (
    <MotionConfig transition={HERO_TRANSITION} reducedMotion="user">
      <section className="mx-auto w-full max-w-7xl px-8 pt-section sm:px-16">
        <motion.h1
          className="max-w-lg text-ink"
          initial="hidden"
          animate={animate}
          variants={heroItemVariants}
        >
          Simple Living, High Thinking Rooted in Vedic Wisdom
        </motion.h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            className="p2 max-w-lg"
            initial="hidden"
            animate={animate}
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
            animate={animate}
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
          animate={animate}
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
