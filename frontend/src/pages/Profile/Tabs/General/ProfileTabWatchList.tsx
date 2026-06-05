import CatalogList from "@/components/CatalogList/CatalogList";
import Separator from "@/components/Separator/Separator";
import { useCatalog } from "@/hooks/useCatalog";

export default function ProfileTabGeneral() {
  const { sortedByRating } = useCatalog();

  return (
    <>
      <section id="watchlist" className="flex gap-8">
        <div className="flex-1">
          <h3 className="text-xl">Watch List</h3>
          <p className="text-neutral-400">Your saved movies and series.</p>
        </div>
        <div className="flex-4 pt-6 overflow-hidden">
          <CatalogList mediaList={sortedByRating} className="w-full" />
        </div>
      </section>

      <Separator />
    </>
  );
}
