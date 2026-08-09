const PILLARS = [
  {
    title: "Mutual Support",
    description:
      "Sharing resources, knowledge, and experiences to help each other thrive.",
    icon: HandshakeIcon,
  },
  {
    title: "Sustainable Practices",
    description:
      "Promoting organic farming and mindful stewardship of our natural resources.",
    icon: SproutIcon,
  },
  {
    title: "Peace & Harmony",
    description:
      "Creating spaces where people, animals, and nature coexist in balance.",
    icon: PeaceIcon,
  },
];

export default function BuildingConnections() {
  return (
    <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
      <h2 className="max-w-md text-ink">Building Connections in Cumberland Plateau</h2>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="p2 max-w-lg">
          We're honored to join a vibrant community of folks who share our
          vision. Through mutual support, we're working together to promote
          peace and mindful living.
        </p>

        <a href="#about" className="link shrink-0 whitespace-nowrap">
          Join the community
          <span aria-hidden>→</span>
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
              <Icon className="h-8 w-8 text-ink" />
              <h3 className="mt-5 text-ink">{pillar.title}</h3>
              <p className="p2 mt-3">{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SproutIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 20V11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M12 11C12 6.5 9 4.5 4 4.5 4 9 7 11 12 11Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 9C12 5.5 14.2 3.5 19 3.5c0 4-2.2 6-7 6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeaceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 3v18M12 12 6.5 17.5M12 12l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
