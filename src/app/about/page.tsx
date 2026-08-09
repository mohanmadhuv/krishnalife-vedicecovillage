import type { Metadata } from "next";
import Image from "next/image";
import {
  MdOutlineGroups,
  MdOutlineMenuBook,
  MdOutlineLocationOn,
  MdOutlineConstruction,
  MdOutlineForest,
  MdOutlineArrowForward,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import SecondaryButton from "@/components/SecondaryButton";
import AboutHero from "@/components/AboutHero";

export const metadata: Metadata = {
  title: "About | Krishna Life",
  description:
    "A monk-led spiritual eco-village rooted in Vedic wisdom — 580 acres in the Tennessee mountains where devotional living meets regenerative agriculture.",
};

const WELCOME_PILLARS = [
  {
    title: "Devotional Living",
    description:
      "Simple living, high thinking. Daily prayer, cow protection, and sacred service — not just self-realization, but God-realization.",
    icon: MdOutlineFavoriteBorder,
  },
  {
    title: "Sacred Community",
    description:
      "No alcohol, no intoxication, just peace. Live alongside monks who work the land, protect cows, and serve Krishna.",
    icon: MdOutlineGroups,
  },
  {
    title: "Spiritual Agriculture",
    description:
      "Ox-powered farming, cob homes, permaculture gardens. We're not just sustainable — we're regenerative, sacred, and self-sufficient.",
    icon: MdOutlineMenuBook,
  },
];

const TENNESSEE_REASONS = [
  {
    title: "Perfect Location",
    description:
      "An hour north of Chattanooga and two hours south of Nashville, with easy access for weekend retreats and a scenic mountain setting.",
    icon: MdOutlineLocationOn,
  },
  {
    title: "Freedom to Build",
    description:
      "A county with no zoning or building codes lets us move quickly with natural building techniques and eco-friendly construction — no red tape.",
    icon: MdOutlineConstruction,
  },
  {
    title: "Ideal Environment",
    description:
      "A mild climate and excellent growing season, quality soil, natural water sources, and 580 pristine acres to create something truly sacred.",
    icon: MdOutlineForest,
  },
];

export default function About() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <AboutHero />

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <h2 className="max-w-2xl text-ink">
          Everyone Is Welcome
        </h2>
        <p className="p2 mt-6 max-w-lg">
          Whether you&apos;re seeking spiritual growth, sustainable living,
          or just want to escape the rat race, you belong here. We welcome
          people from all walks of life who share our vision of simple
          living, community connection, and caring for the earth.
        </p>

        <div className="mt-14 grid border-t border-neutral-200 sm:mt-16 sm:grid-cols-3">
          {WELCOME_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="border-neutral-200 py-8 pr-8 sm:border-l sm:py-10 sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <Icon className="h-5 w-5 text-ink" />
                <h3 className="mt-5 text-ink">{pillar.title}</h3>
                <p className="p2 mt-3">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-16">
          <div>
            <h2 className="text-ink">
              Our Story: From City to Farm
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <p className="p2">
                Four years ago, we bought an old church in Atlanta for $1
                million and spent $700k on renovations, creating a thriving
                spiritual community with 100 people coming every week. But
                something was missing.
              </p>
              <p className="p2">
                People wanted to help, but there wasn&apos;t much for them to
                do. That&apos;s when we had a bold idea: what if we sold that
                place and found land where we could grow our own food,
                protect cows, and live in real community?
              </p>
              <p className="p2">
                Now it&apos;s happening. We invested $2.5 million to purchase
                580 acres in Tennessee, and we&apos;re building one of
                America&apos;s most authentic spiritual eco-villages on that
                land right now.
              </p>
            </div>

            <a href="#visit" className="link mt-6 inline-flex w-fit">
              Our Story
              <MdOutlineArrowForward className="h-5 w-5" aria-hidden />
            </a>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 sm:aspect-square">
            <Image
              src="/images/village-life-tennessee-land.png"
              alt="Misty wetland view of the Tennessee land at dawn"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <h2 className="max-w-2xl text-ink">Location: Tennessee</h2>
        <p className="p2 mt-6 max-w-lg">
          Why we chose the Cumberland Plateau for the most important project
          of our lives.
        </p>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-[1.2fr_1fr] sm:gap-16">
          <div className="flex flex-col gap-8 border-t border-neutral-200 pt-8">
            {TENNESSEE_REASONS.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="flex gap-4">
                  <Icon className="h-5 w-5 shrink-0 text-ink" />
                  <div>
                    <h3 className="text-ink">{reason.title}</h3>
                    <p className="p2 mt-2">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200">
            <Image
              src="/images/village-life-connect-with-nature.png"
              alt="A quiet moment in the Tennessee mountains near the ecovillage land"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </figure>
        </div>
      </section>

      <section
        id="visit"
        className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16"
      >
        <div className="relative isolate aspect-[32/9] min-h-80 w-full overflow-hidden rounded-2xl border border-[#D76F00] bg-gradient-to-br from-[#FFB45D] to-[#FF8513]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <h2 className="max-w-2xl text-white">Come see it for yourself</h2>
            <p className="p1 max-w-md">
              Volunteer with us, join a workshop, or book a call to visit —
              this is your chance to help build something sacred from the
              ground up.
            </p>
            <SecondaryButton href="/visit" className="mt-2">
              Plan your visit
            </SecondaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
