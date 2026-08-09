"use client";

import { useState } from "react";

export default function RealFootageVariant() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-900 px-8 text-center">
        <p className="p1 max-w-md">
          This browser can&rsquo;t decode the raw .mov container. Production
          needs the clip transcoded to compressed .mp4/.webm first.
        </p>
      </div>
    );
  }

  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onError={() => setFailed(true)}
    >
      <source src="/videos/grass-trees-source.mov" type="video/mp4" />
    </video>
  );
}
