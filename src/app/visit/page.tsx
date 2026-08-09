import type { Metadata } from "next";
import Image from "next/image";
import {
  MdOutlineLightMode,
  MdOutlineMenuBook,
  MdOutlineCabin,
  MdOutlineSelfImprovement,
  MdOutlineSchedule,
  MdOutlineLocationOn,
  MdOutlineBackpack,
  MdOutlineHandshake,
  MdOutlineGroups,
  MdOutlineTrendingUp,
} from "react-icons/md";
import PrimaryButton from "@/components/PrimaryButton";
import VolunteerForm from "@/components/VolunteerForm";
import VisitHero from "@/components/VisitHero";

export const metadata: Metadata = {
  title: "Visit | Krishna Life",
  description:
    "Plan a day visit, workshop, or stay-cation at Krishna Life Vedic Ecovillage — 580 acres of gardens, gentle animals, and sacred community in the Tennessee mountains.",
};

const EXPERIENCES = [
  {
    title: "Day Visits",
    description:
      "Explore our gardens, orchards, and peaceful woods. Meet our gentle animals and enjoy a peaceful walk through the property.",
    icon: MdOutlineLightMode,
  },
  {
    title: "Workshops",
    description:
      "Learn sustainable farming practices, natural building techniques, and connect with like-minded souls.",
    icon: MdOutlineMenuBook,
  },
  {
    title: "Stay-cations",
    description:
      "Immerse yourself in village life with overnight stays in simple cabins, paired with yoga and nature activities.",
    icon: MdOutlineCabin,
  },
  {
    title: "Yoga Retreats",
    description:
      "Find balance and peace with yoga sessions surrounded by the beauty of the Cumberland Plateau.",
    icon: MdOutlineSelfImprovement,
  },
];

const VISIT_DETAILS = [
  {
    label: "Operating Hours",
    value: "Saturday–Sunday, 10 AM – 4 PM",
    icon: MdOutlineSchedule,
  },
  {
    label: "Location",
    value:
      "Cumberland Plateau, Tennessee — an hour north of Chattanooga, two hours south of Nashville",
    icon: MdOutlineLocationOn,
  },
  {
    label: "What to Bring",
    value: "Comfortable shoes, a water bottle, and an open heart",
    icon: MdOutlineBackpack,
  },
];

const GET_INVOLVED = [
  {
    title: "Hands-On Learning",
    description:
      "Tend organic gardens and care for cows while learning sustainable, regenerative practices.",
    icon: MdOutlineHandshake,
  },
  {
    title: "Community Connection",
    description:
      "Foster bonds with fellow devotees, volunteers, and visitors from around the world.",
    icon: MdOutlineGroups,
  },
  {
    title: "Personal Growth",
    description:
      "Find balance and purpose while contributing to a thriving, sacred community.",
    icon: MdOutlineTrendingUp,
  },
];

const VOLUNTEER_OPPORTUNITIES = [
  "Garden & orchard maintenance",
  "Cow protection & animal care",
  "Natural building & farm infrastructure",
  "Event support & workshops",
  "Long-term volunteer stays",
];

const GALLERY = [
  {
    title: "Scenic Trails",
    image: "/images/village-life-connect-with-nature.png",
  },
  {
    title: "Yoga & Wellness",
    image: "/images/village-life-wellness-retreats.png",
  },
  {
    title: "Garden Care",
    image: "/images/village-life-volunteer-and-learn.png",
  },
  {
    title: "Farm Views",
    image: "/images/village-life-sky.png",
  },
  {
    title: "Meet the Animals",
    image: "/images/village-life-meet-our-animals.webp",
  },
  {
    title: "Love Feast",
    image: "/images/village-life-love-feast.png",
  },
];

const CONTACT_EMAIL = "hello@vedicecovillage.org";

export default function Visit() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <VisitHero />

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <h2 className="max-w-2xl text-ink">Ways to Experience</h2>
        <p className="p2 mt-6 max-w-lg">
          There&apos;s no single way to visit — come for an afternoon, a
          weekend, or something in between.
        </p>

        <div className="mt-14 grid border-t border-neutral-200 sm:mt-16 sm:grid-cols-4">
          {EXPERIENCES.map((experience) => {
            const Icon = experience.icon;
            return (
              <div
                key={experience.title}
                className="border-neutral-200 py-8 pr-8 sm:border-l sm:py-10 sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <Icon className="h-5 w-5 text-ink" />
                <h3 className="mt-5 text-ink">{experience.title}</h3>
                <p className="p2 mt-3">{experience.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-16">
          <div>
            <h2 className="text-ink">Visit Details</h2>
            <div className="mt-8 flex flex-col gap-8 border-t border-neutral-200 pt-8">
              {VISIT_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex gap-4">
                    <Icon className="h-5 w-5 shrink-0 text-ink" />
                    <div>
                      <h3 className="text-ink">{detail.label}</h3>
                      <p className="p2 mt-2">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <PrimaryButton
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-block"
            >
              Contact us to book your visit
            </PrimaryButton>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 sm:aspect-square">
            <Image
              src="/images/village-life-community.png"
              alt="Community members sharing a moment together at Krishna Life Vedic Ecovillage"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <h2 className="max-w-2xl text-ink">Get Involved</h2>
        <p className="p2 mt-6 max-w-lg">
          We&apos;re officially open for volunteers — come tend the land and
          become part of the community.
        </p>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-[1.2fr_1fr] sm:gap-16">
          <div className="flex flex-col gap-8 border-t border-neutral-200 pt-8">
            {GET_INVOLVED.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <Icon className="h-5 w-5 shrink-0 text-ink" />
                  <div>
                    <h3 className="text-ink">{item.title}</h3>
                    <p className="p2 mt-2">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8">
            <h3 className="text-ink">Volunteer Opportunities</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {VOLUNTEER_OPPORTUNITIES.map((opportunity) => (
                <li key={opportunity} className="p2 flex items-start gap-3">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8513]"
                    aria-hidden
                  />
                  {opportunity}
                </li>
              ))}
            </ul>

            <a href="#volunteer-form" className="link mt-6 w-fit">
              Get in touch to volunteer
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
        <h2 className="max-w-2xl text-ink">A Day at the Ecovillage</h2>
        <p className="p2 mt-6 max-w-lg">
          Moments from our growing community.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3">
          {GALLERY.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <span className="absolute bottom-4 left-4 text-[16px] font-medium text-white">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div id="volunteer-form">
        <VolunteerForm showVisitLink={false} />
      </div>
    </main>
  );
}
