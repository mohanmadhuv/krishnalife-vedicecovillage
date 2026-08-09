export default function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[32/9] w-full overflow-hidden rounded-2xl border border-neutral-200">
      <div className="absolute inset-0">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
        <h2 className="max-w-2xl text-white">
          &ldquo;Agriculture is the noblest profession.&rdquo;
        </h2>
        <p className="p1">— A.C. Bhaktivedanta Swami Prabhupada</p>
      </div>
    </div>
  );
}
