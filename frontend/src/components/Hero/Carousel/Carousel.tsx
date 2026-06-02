"use client";

import { useState } from "react";
import { useMedia } from "@/hooks/useMedia";
import type { Media } from "@/types/mediaTypes";

import Button from "@/components/Button/Button";
import { Ellipsis, Play } from "lucide-react";

interface Props {
  className?: string;
  items: Media[];
}

export default function HeroCarousel({ className, items }: Props) {
  const [current, setCurrent] = useState(0);
  const { setActiveMedia } = useMedia();

  const goToSlide = (index: number) => {
    setCurrent(index);
    setActiveMedia(items[index]);
  };

  if (items.length === 0) return null;

  return (
    <div className={`${className} cursor-pointer relative rounded-2xl overflow-hidden`}>
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-full h-full relative bg-center bg-cover overflow-hidden group"
            style={{ backgroundImage: `url(${item.bannerUrl})` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-0" />

            <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/30 backdrop-blur-md border-b border-white/10">
              <h2 className="text-white font-semibold">{item.title}</h2>
              <Button
                variant={"ghost"}
                aria-label="Options"
                className="p-0 size-fit"
              >
                <Ellipsis className="text-white" />
              </Button>
            </div>

            <Button
              variant={"glass"}
              aria-label="Play"
              className="flex size-fit absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 opacity-0 scale-75 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto hover:scale-110
  "
            >
              <Play className="text-white" />
            </Button>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="absolute z-20 bottom-2 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg rounded-full">
          {items.map((_, index) => (
            <Button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`size-fit p-0 h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-6"
                  : "bg-white/40 w-2.5 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
