"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  className?: string;
}

export default function HeroTrending({ className }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const trending = [
    {
      title: "Batman",
      year: 2015,
      image:
        "https://imgs.search.brave.com/sjBX0ZbFJsV7YZOOIgsiFxKxtLhxiG7IzKDrHwr1X7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Z2l2ZS1tZS1zb21l/LW9mLXRoZS1iZXN0/LW1vdmllcy13YWxs/cGFwZXJzLWZvci1t/eS1wYy12MC1sdXlt/aWsydW45cGYxLmpw/ZWc_d2lkdGg9NzM2/JmZvcm1hdD1wanBn/JmF1dG89d2VicCZz/PTc0YjY4Mjg3MzJj/NjdiNWFiYjljMjE1/OWNlYjk1ZDkyMzQy/MmExNGI",
    },
    {
      title: "Breaking Bad",
      year: 2008,
      image:
        "https://imgs.search.brave.com/wld7Et7aA-Iy44r3J-2vU9lHvTAbsw--bGROzOHtFs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YnJlYWtpbmctYmFk/LXR2LXNob3ctb3Jp/Z2luYWwtcmVzb2x1/dGlvbi0yODgweDE4/MDAtdjAtbXQ0YnZ4/Z2gwbXFkMS5qcGVn/P3dpZHRoPTY0MCZj/cm9wPXNtYXJ0JmF1/dG89d2VicCZzPTg0/MzVkYjExZWI1NDJk/M2ZlMjI2ZWYzMzk3/MTVlYTg3MWUzY2Fm/OTg",
    },
    {
      title: "Invincible",
      year: 2019,
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/26273.jpg",
    },
    {
      title: "One Piece",
      year: 2023,
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/25732.jpg",
    },
    {
      title: "Avatar Fire and Ash",
      year: 2025,
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/24826.jpg",
    },
    {
      title: "Minecraft the movie",
      year: 2026,
      image: "https://4kwallpapers.com/images/walls/thumbs/24237.jpg",
    },
    {
      title: "Wednesday",
      year: 2021,
      image: "https://4kwallpapers.com/images/walls/thumbs/24008.jpg",
    },
    {
      title: "Lilo's & Stich",
      year: 2012,
      image: "https://4kwallpapers.com/images/walls/thumbs/23837.jpg",
    },
    {
      title: "Infinity Castle",
      year: 2012,
      image: "https://4kwallpapers.com/images/walls/thumbs/23650.jpg",
    },
    {
      title: "Scream",
      year: 2010,
      image: "https://4kwallpapers.com/images/walls/thumbs/23043.png",
    },
    {
      title: "I Know What You Did Last Summer",
      year: 2025,
      image: "https://4kwallpapers.com/images/walls/thumbs/22846.png",
    },
    {
      title: "Love Death & Robots",
      year: 2022,
      image: "https://4kwallpapers.com/images/walls/thumbs/22564.png",
    },
  ];

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 200 : -200,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${className} min-h-0 flex flex-col rounded-2xl  text-white`}>
      <div className="relative z-10 py-2 px-4 flex justify-between items-center  rounded-t-2xl shrink-0">
        <h2 className="font-semibold text-xl">Trending</h2>
      </div>

      <div className="relative flex-1 min-h-0">
        {/* Controls */}
        {trending.length > 5 && (
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
          {trending.map((item) => (
            <div
              key={item.title}
              className="relative group rounded-xl overflow-hidden cursor-pointer shrink-0 w-48 h-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
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
