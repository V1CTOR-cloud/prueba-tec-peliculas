// context/MediaContext.tsx
"use client";
import { createContext, useState, type ReactNode } from "react";
import type { Media, WatchingMedia } from "@/types";
import {
  mediaList as initialMedia,
  watchingList as initialWatching,
} from "@/data/data";

interface MediaContextType {
  mediaList: Media[];
  watchingList: WatchingMedia[];
  addToWatching: (media: Media) => void;
  removeFromWatching: (mediaId: string) => void;
  updateProgress: (
    mediaId: string,
    progress: number,
    episodeId?: string,
  ) => void;
}

export const MediaContext = createContext<MediaContextType | null>(null);

export function MediaProvider({ children }: { children: ReactNode }) {
  const [mediaList] = useState<Media[]>(initialMedia);
  const [watchingList, setWatchingList] =
    useState<WatchingMedia[]>(initialWatching);

  const addToWatching = (media: Media) => {
    const already = watchingList.some((w) => w.media.id === media.id);
    if (already) return;
    setWatchingList((prev) => [
      ...prev,
      {
        media,
        progress: 0,
        lastWatched: new Date(),
      },
    ]);
  };

  const removeFromWatching = (mediaId: string) => {
    setWatchingList((prev) => prev.filter((w) => w.media.id !== mediaId));
  };

  const updateProgress = (
    mediaId: string,
    progress: number,
    episodeId?: string,
  ) => {
    setWatchingList((prev) =>
      prev.map((w) =>
        w.media.id === mediaId
          ? {
              ...w,
              progress,
              currentEpisode: episodeId ?? w.currentEpisode,
              lastWatched: new Date(),
            }
          : w,
      ),
    );
  };

  return (
    <MediaContext.Provider
      value={{
        mediaList,
        watchingList,
        addToWatching,
        removeFromWatching,
        updateProgress,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
}
