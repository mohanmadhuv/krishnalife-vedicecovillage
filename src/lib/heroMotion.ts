import type { Variants } from "motion/react";

export const HERO_EASE = [0.16, 1, 0.3, 1] as const;
export const HERO_DURATION = 1;
// HERO_STAGGER * 3 + HERO_DURATION = 1.618s total for a 4-element hero
export const HERO_STAGGER = 0.206;

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function heroTransition(index: number) {
  return {
    duration: HERO_DURATION,
    ease: HERO_EASE,
    delay: HERO_STAGGER * index,
  };
}
