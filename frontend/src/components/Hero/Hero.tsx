import HeroCarousel from "@/components/Hero/Carousel/Carousel";
import HeroEpisodes from "@/components/Hero/Episodes/HeroEpisodes";
import HeroCast from "@/components/Hero/Cast/HeroCast";
import HeroDetails from "./Details/HeroDetails";
import HeroTrending from "./Trending/HeroTrending";

export default function Hero() {
  return (
    <section className="p-6">
      <div className="grid grid-cols-12 auto-rows-[150px] gap-4">
        <HeroCarousel className="col-span-12 md:col-span-8 row-span-3" />

        <HeroDetails className="col-span-12 md:col-span-4 row-span-3" />

        <HeroEpisodes className="col-span-12 md:col-span-8 row-span-2" />

        <HeroCast className="col-span-12 md:col-span-4 row-span-2 " />

        <HeroTrending className="col-span-12 row-span-2" />
      </div>
    </section>
  );
}
