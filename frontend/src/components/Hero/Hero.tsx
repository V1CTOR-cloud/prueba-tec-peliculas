import HeroCarousel from "@/components/Hero/Carousel/Carousel";
import HeroEpisodes from "@/components/Hero/Episodes/HeroEpisodes";
import HeroCast from "@/components/Hero/Cast/HeroCast";
import HeroDetails from "./Details/HeroDetails";
import HeroTrending from "./Trending/HeroTrending";



export default function Hero() {
  return (
    <section className="p-6">
      <div className="grid grid-cols-12 auto-rows-[145px] gap-4">
        <HeroCarousel className="col-span-12 md:col-span-8 row-span-3" />

        {/* <HeroEpisodes /> */}

        <HeroDetails />

        <HeroTrending />  

        <HeroCast />
      </div>
    </section>
  );
}
