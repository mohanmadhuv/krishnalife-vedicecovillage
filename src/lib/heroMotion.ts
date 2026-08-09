import type { Variants } from "motion/react";

export const HERO_EASE = [0.16, 1, 0.3, 1] as const;
export const HERO_DURATION = 1;
// HERO_STAGGER * 3 + HERO_DURATION = 1.618s total for a 4-element hero
export const HERO_STAGGER = 0.206;

// Stable object reference: MotionConfig's default transition, used by the
// first element in a sequence. Must not be recreated on every render, or a
// re-render mid-animation makes Motion treat it as a new instruction and
// restart the tween from scratch.
export const HERO_TRANSITION = { duration: HERO_DURATION, ease: HERO_EASE };

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

// Precomputed, stable transition objects for staggered elements (same
// reason as HERO_TRANSITION above — heroTransition(index) as an inline JSX
// call would create a new object every render).
const MAX_HERO_ITEMS = 8;
export const HERO_TRANSITIONS = Array.from(
  { length: MAX_HERO_ITEMS },
  (_, index) => ({
    duration: HERO_DURATION,
    ease: HERO_EASE,
    delay: HERO_STAGGER * index,
  }),
);

export function heroTransition(index: number) {
  return HERO_TRANSITIONS[index];
}
