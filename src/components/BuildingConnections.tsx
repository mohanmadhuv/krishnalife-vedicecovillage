import {
  MdOutlineHandshake,
  MdOutlineGrass,
  MdOutlineAutoAwesome,
} from "react-icons/md";
import { TbBrandWhatsapp } from "react-icons/tb";

const PILLARS = [
  {
    title: "Mutual Support",
    description:
      "Sharing resources, knowledge, and experiences to help each other thrive.",
    icon: MdOutlineHandshake,
  },
  {
    title: "Sustainable Practices",
    description:
      "Promoting organic farming and mindful stewardship of our natural resources.",
    icon: MdOutlineGrass,
  },
  {
    title: "Peace & Harmony",
    description:
      "Creating spaces where people, animals, and nature coexist in balance.",
    icon: MdOutlineAutoAwesome,
  },
];

export default function BuildingConnections() {
  return (
    <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
      <h2 className="max-w-2xl text-ink">Building Connections in Cumberland Plateau, TN</h2>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="p2 max-w-lg">
          We're honored to join a vibrant community of folks who share our
          vision. Through mutual support, we're working together to promote
          peace and mindful living.
        </p>

        <a href="/about" className="link shrink-0 whitespace-nowrap">
          Join the community
          <TbBrandWhatsapp className="h-5 w-5" aria-hidden />
        </a>
      </div>

      <div className="mt-14 grid border-t border-neutral-200 sm:mt-16 sm:grid-cols-3">
        {PILLARS.map((pillar) => {
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
  );
}
