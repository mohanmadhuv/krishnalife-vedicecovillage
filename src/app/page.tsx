import Image from "next/image";
import WaysToEngage from "@/components/WaysToEngage";
import BuildingConnections from "@/components/BuildingConnections";
import LatestFromTheFarm from "@/components/LatestFromTheFarm";
import VolunteerForm from "@/components/VolunteerForm";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="mx-auto w-full max-w-7xl px-8 pt-section sm:px-16">
        <h1 className="max-w-lg text-ink">
          Simple Living, High Thinking Rooted in Vedic Wisdom
        </h1>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="p2 max-w-lg">
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
            className="object-cover object-bottom"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />
        </div>
      </section>

      <WaysToEngage />

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <div className="relative aspect-[32/9] w-full overflow-hidden rounded-2xl border border-neutral-200">
          <Image
            src="/images/village-life-sky.png"
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <h2 className="max-w-2xl text-white">
              &ldquo;Agriculture is the noblest profession.&rdquo;
            </h2>
            <p className="p1">— A.C. Bhaktivedanta Swami Prabhupada</p>
          </div>
        </div>
      </section>

      <BuildingConnections />

      <LatestFromTheFarm />

      <VolunteerForm />
    </main>
  );
}
