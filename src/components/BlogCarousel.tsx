"use client";

import { useState } from "react";
import Image from "next/image";

const WIDTHS = ["52%", "20%", "11%", "9%", "8%"];

const POSTS = [
  {
    title: "Our First Harvest Season",
    category: "Farm Life",
    excerpt:
      "From the first seeds to the first table, a look back at what the land taught us this year.",
    image: "/images/krishna-life-hero.jpg",
    tone: "photo" as const,
  },
  {
    title: "Building the Goshala",
    category: "Cow Protection",
    excerpt:
      "How the community came together to raise a home for our cows, board by board.",
    tone: "dark" as const,
  },
  {
    title: "What Volunteering Taught Us",
    category: "Community",
    excerpt:
      "Notes from a summer of visitors who came to help and stayed to learn.",
    tone: "medium" as const,
  },
  {
    title: "Simple Living, Wide Open Sky",
    category: "Reflections",
    excerpt:
      "On slowing down, looking up, and what the Cumberland Plateau has to teach.",
    image: "/images/village-life-sky.png",
    tone: "photo" as const,
  },
  {
    title: "Raising Our First Barn",
    category: "Community",
    excerpt:
      "A single build day, forty pairs of hands, and one barn that wasn't there the morning before.",
    tone: "light" as const,
  },
];

const TONE_BG: Record<string, string> = {
  dark: "bg-neutral-900",
  medium: "bg-neutral-700",
  light: "bg-neutral-500",
};

export default function BlogCarousel() {
  const [active, setActive] = useState(0);
  const count = POSTS.length;

  const goTo = (index: number) => setActive(((index % count) + count) % count);

  return (
    <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="max-w-2xl text-ink">Stories from the Village</h2>
          <p className="p2 mt-6 max-w-lg">
            Field notes, reflections, and updates from daily life at the
            ecovillage.
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous story"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-ink transition-colors hover:bg-neutral-50"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next story"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-ink transition-colors hover:bg-neutral-50"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-14 flex h-96 w-full gap-1.5 overflow-hidden rounded-2xl border border-neutral-200 sm:mt-16">
        {POSTS.map((post, i) => {
          const offset = (i - active + count) % count;
          const isActive = offset === 0;
          return (
            <button
              key={post.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={post.title}
              style={{ flexBasis: WIDTHS[offset] ?? "6%" }}
              className="relative h-full shrink-0 grow-0 overflow-hidden transition-[flex-basis] duration-500 ease-in-out"
            >
              {post.tone === "photo" ? (
                <Image
                  src={post.image!}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 700px, 60vw"
                />
              ) : (
                <div className={`absolute inset-0 ${TONE_BG[post.tone]}`} />
              )}

              {isActive && (
                <span className="absolute bottom-6 left-6 max-w-[80%] text-left text-lg font-medium text-white drop-shadow-sm">
                  {post.title}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div key={active} className="animate-fade-in mt-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          {POSTS[active].category}
        </span>
        <h3 className="mt-3 max-w-2xl text-ink">{POSTS[active].title}</h3>
        <p className="p2 mt-2 max-w-2xl">{POSTS[active].excerpt}</p>
        <a href="#" className="link mt-4">
          Read more
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
