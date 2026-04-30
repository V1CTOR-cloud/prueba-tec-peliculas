import Carousel from "./Carousel/Carousel";

export default function Hero() {
  return (
    <section className="p-6">
      <div className="grid grid-cols-12 auto-rows-[120px] gap-4">
        <Carousel />

        {/* Bloque dinámico (1x2) */}
        <div className="col-span-12 md:col-span-4 row-span-2 rounded-2xl bg-neutral-700 p-4">
          <h3 className="text-white text-md font-medium mb-2">
            Details / Episodes
          </h3>
        </div>

        {/* Top Picks */}
        <div className="col-span-6 md:col-span-4 row-span-2 rounded-2xl bg-neutral-700 p-4">
          Top Picks
        </div>

        {/* Trending */}
        <div className="col-span-6 md:col-span-8 row-span-1 rounded-2xl bg-neutral-700 p-4">
          Trending
        </div>
      </div>
    </section>
  );
}
