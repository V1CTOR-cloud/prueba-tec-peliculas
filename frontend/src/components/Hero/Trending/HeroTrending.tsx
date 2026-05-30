"use client";

import { useRef, useState } from "react";
import type { Media } from "@/types";
import { ChevronLeft, ChevronRight, Clapperboard } from "lucide-react";

interface Props {
  className?: string;
  trendingMediaList: Media[];
}

export default function HeroTrending({ className, trendingMediaList }: Props) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 200 : -200,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${className} min-h-0 flex flex-col rounded-2xl  text-white`}
    >
      <div className="relative z-10 py-2 px-4 flex justify-between items-center  rounded-t-2xl shrink-0">
        <h2 className="font-semibold text-xl">Trending</h2>
      </div>

      <div className="relative flex-1 min-h-0">
        {/* Controls */}
        {trendingMediaList.length > 5 && (
          <>
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer z-10 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-black/80 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer z-10 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-black/80 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="flex flex-row gap-3 p-4 overflow-x-auto no-scrollbar h-full"
        >
          {trendingMediaList.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-xl overflow-hidden cursor-pointer shrink-0 w-48 h-full"
            >
              {imageErrors[item.id] || !item.posterUrl ? (
                <div className="size-full bg-neutral-700 flex flex-col items-center justify-center gap-2 text-neutral-500 transition-transform duration-300 group-hover:scale-105">
                  <Clapperboard size={32} />
                  <span className="text-xs">{item.title}</span>
                </div>
              ) : (
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  onError={() =>
                    setImageErrors((prev) => ({
                      ...prev,
                      [item.id]: true,
                    }))
                  }
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                <span className="text-sm font-semibold leading-tight">
                  {item.title}
                </span>
                <span className="text-xs text-neutral-400">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
