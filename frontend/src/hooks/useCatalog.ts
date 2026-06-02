import { useMemo } from "react";
import { useMedia } from "./useMedia";
import type { Genre, MediaType } from "@/types/mediaTypes";

export function useCatalog() {
  const { mediaList } = useMedia();

  // ─── Ordenaciones ────────────────────────

  const sortedByRating = useMemo(
    () => [...mediaList].sort((a, b) => b.rating - a.rating),
    [mediaList],
  );

  const sortedByYears = useMemo(
    () => [...mediaList].sort((a, b) => b.year - a.year),
    [mediaList],
  );

  // ─── Filtrados ────────────────────────

  const filterByGenre = useMemo(
    () => (genre: Genre) => mediaList.filter((m) => m.genres.includes(genre)),
    [mediaList],
  );

  const filterByType = useMemo(
    () => (type: MediaType) => mediaList.filter((m) => m.type === type),
    [mediaList],
  );

  // ─── Objetos ────────────────────────

  const topRated = useMemo(() => sortedByRating[0], [sortedByRating]);

  return {
    sortedByRating,
    sortedByYears,
    filterByGenre,
    filterByType,
    topRated,
  };
}
