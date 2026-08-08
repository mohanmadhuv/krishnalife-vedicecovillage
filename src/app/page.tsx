import Image from "next/image";
import VillageLife from "@/components/VillageLife";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="mx-auto w-full max-w-7xl px-8 pt-24 sm:px-16 sm:pt-32">
        <h1 className="max-w-lg text-ink">
          Simple Living, High Thinking Rooted in Vedic Wisdom
        </h1>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="subtitle max-w-2xl">
            Vedic Ecovillage is a growing eco-farm built on ancient knowledge
            from over 5000 years back and is taking shape in Tennessee.
          </p>

          <a href="#visit" className="link shrink-0 whitespace-nowrap">
            Learn our story
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 sm:mt-20">
          <Image
            src="/images/krishna-life-hero.jpg"
            alt="Krishna Life Vedic Ecovillage"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />
        </div>
      </section>

      <VillageLife />
    </main>
  );
}
