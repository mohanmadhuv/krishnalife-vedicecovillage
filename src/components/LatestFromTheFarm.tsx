import Image from "next/image";
import { MdOutlineArrowForward } from "react-icons/md";
import { SiSubstack } from "react-icons/si";

const POSTS = [
  {
    title: "Our First Harvest Season",
    excerpt:
      "From the first seeds to the first table, a look back at what the land taught us this year.",
    image: "/images/krishna-life-hero.jpg",
    href: "#",
  },
  {
    title: "What Volunteering Taught Us",
    excerpt:
      "Notes from a summer of visitors who came to help and stayed to learn.",
    image: "/images/village-life-volunteer-and-learn.png",
    href: "#",
  },
  {
    title: "Simple Living, Wide Open Sky",
    excerpt:
      "On slowing down, looking up, and what the Cumberland Plateau has to teach.",
    image: "/images/village-life-sky.png",
    href: "#",
  },
];

export default function LatestFromTheFarm() {
  return (
    <section
      id="blog"
      className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16"
    >
      <h2 className="max-w-2xl text-ink">Latest from the Farm</h2>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="p2 max-w-lg">
          Field notes, reflections, and updates from daily life at the
          ecovillage.
        </p>

        <a href="#" className="link shrink-0 whitespace-nowrap">
          Read all
          <SiSubstack className="h-4 w-4 text-black" aria-hidden />
        </a>
      </div>

      <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-3">
        {POSTS.map((post) => (
          <a
            key={post.title}
            href={post.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 transition-colors hover:border-neutral-300"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-ink">{post.title}</h3>
              <p className="p2">{post.excerpt}</p>
              <span className="link mt-1">
                Read more
                <MdOutlineArrowForward className="h-4 w-4" aria-hidden />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
