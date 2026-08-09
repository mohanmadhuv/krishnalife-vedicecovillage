import Image from "next/image";
import Hero from "@/components/Hero";
import WaysToEngage from "@/components/WaysToEngage";
import BuildingConnections from "@/components/BuildingConnections";
import LatestFromTheFarm from "@/components/LatestFromTheFarm";
import VolunteerForm from "@/components/VolunteerForm";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Hero />

      <WaysToEngage />

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <div className="relative aspect-[32/9] min-h-64 w-full overflow-hidden rounded-2xl border border-neutral-200">
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
