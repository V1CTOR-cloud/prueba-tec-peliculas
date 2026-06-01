"use client";

import { useEffect, useState } from "react";
import { useMedia } from "@/hooks/useMedia";
import { useCatalog } from "@/hooks/useCatalog";
import type { Media } from "@/types";

import HeroCarousel from "@/components/Hero/Carousel/Carousel";
import HeroEpisodes from "@/components/Hero/Episodes/HeroEpisodes";
import HeroCast from "@/components/Hero/Cast/HeroCast";
import HeroDetails from "@/components/Hero/Details/HeroDetails";

export default function Hero() {
  const { watchingList } = useMedia();
  const [activeMedia, setActiveMedia] = useState<Media | null>(null);
  const { topRated } = useCatalog();

  const carouselItems =
    watchingList.length > 0
      ? watchingList.map((w) => w.media)
      : topRated
        ? [topRated]
        : [];

  useEffect(() => {
    if (carouselItems.length > 0 && !activeMedia)
      setActiveMedia(carouselItems[0]);
  }, []);

  if (!activeMedia) return null;

  return (
    <section>
      <div className="grid grid-cols-12 auto-rows-[150px] gap-4">
        <HeroCarousel
          className="col-span-12 lg:col-span-8 row-span-3"
          items={carouselItems}
        />

        <HeroDetails
          className="col-span-12 lg:col-span-4 row-span-3"
          media={activeMedia}
        />

        {activeMedia.season?.length ? (
          <HeroEpisodes
            className="col-span-12 lg:col-span-8 row-span-2"
            season={activeMedia.season}
          />
        ) : null}

        <HeroCast
          className="col-span-12 lg:col-span-4 row-span-2 "
          cast={activeMedia.cast}
        />

        
      </div>
    </section>
  );
}
