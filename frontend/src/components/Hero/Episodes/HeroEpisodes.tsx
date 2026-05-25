"use-client";

import { useRef } from "react";
import EpisodeThumb from "./EpisodeThumb/EpisodeThumb";
import { ChevronLeft, ChevronRight, ChevronsUpDown } from "lucide-react";
import { mediaList } from "@/data/data";

interface Props {
  className?: string;
}

export default function HeroEpisodes({ className }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${className} min-h-0 flex flex-col rounded-2xl  text-white`}
    >
      <div className="relative z-10 py-2 px-4 flex justify-between items-center  rounded-t-2xl shrink-0">
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold text-xl">Episodes</h2>
          <div className="flex gap-1 items-center cursor-pointer">
            <span>
              - Season {mediaList[0].season[0].number}
            </span>
            <ChevronsUpDown size={20} />
          </div>
        </div>
      </div>

      <div className="relative flex-1 min-h-0">
        {/* Controls */}
        {mediaList[0].season[0]!.episodes!.length > 4 && (
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
          className="flex flex-row justify-between gap-3 p-4 overflow-x-auto no-scrollbar h-full"
        >
          {mediaList[0].season[0]!.episodes!.map((item) => (
            <EpisodeThumb
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
