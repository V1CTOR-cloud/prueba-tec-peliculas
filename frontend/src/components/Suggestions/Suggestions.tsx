import { useCatalog } from "@/hooks/useCatalog";
import CatalogList from "@/components/CatalogList/CatalogList";
import type { MediaType } from "@/types/mediaTypes";

export default function Suggestions() {
  const { sortedByRating, sortedByYears, filterByType } = useCatalog();
  const typesItems: MediaType[] = ["documentary", "movie", "series", "short"];

  return (
    <section>
      <CatalogList
        className="h-92 mt-10"
        mediaList={sortedByRating}
        title="Trending"
      />
      <CatalogList
        className="h-92 mt-10"
        mediaList={sortedByYears}
        title="New"
      />
      {typesItems.map((mediaType) => {
        const items = filterByType(mediaType);

        if (items.length === 0) return null;

        return (
          <CatalogList
            key={mediaType}
            className="h-92 mt-10"
            mediaList={items}
            title={mediaType}
          />
        );
      })}
    </section>
  );
}
