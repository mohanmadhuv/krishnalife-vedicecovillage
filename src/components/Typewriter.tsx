"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED_MS = 80;
const DELETE_SPEED_MS = 40;
const PAUSE_AFTER_TYPED_MS = 1600;
const PAUSE_AFTER_DELETED_MS = 500;

function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersReducedMotion;
}

export default function Typewriter({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, TYPE_SPEED_MS);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPED_MS);
      return () => clearTimeout(timeout);
    }

    if (text.length > 0) {
      const timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, DELETE_SPEED_MS);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }, PAUSE_AFTER_DELETED_MS);
    return () => clearTimeout(timeout);
  }, [phase, text, wordIndex, words, prefersReducedMotion]);

  const displayedText = prefersReducedMotion ? words[0] : text;

  return (
    <span className={`block ${className}`}>
      <span aria-hidden className="inline-flex items-center">
        {displayedText}
        {!prefersReducedMotion && (
          <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-[blink_1s_step-end_infinite] bg-current" />
        )}
      </span>
      <span className="sr-only">{words.join(". ")}.</span>
    </span>
  );
}
