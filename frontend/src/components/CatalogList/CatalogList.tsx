"use client";

import { useRef } from "react";
import type { Media } from "@/types/mediaTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Poster from "../Poster/Poster";

interface Props {
  className?: string;
  mediaList: Media[];
  title?: string;
}

export default function CatalogList({ className, mediaList, title }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 200 : -200,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${className} min-h-0 flex flex-col rounded-2xl text-white`}>
      {title && (
        <div className="relative z-10 py-2 px-4 flex justify-between items-center rounded-t-2xl shrink-0">
          <h2 className="font-semibold text-xl">{title}</h2>
        </div>
      )}

      <div className="relative flex-1 min-h-0 h-32">
        {mediaList.length > 9 && (
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
          {mediaList.map((item) => (
            <Poster
              key={item.id}
              posterUrl={item.posterUrl}
              title={item.title}
              year={item.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
}