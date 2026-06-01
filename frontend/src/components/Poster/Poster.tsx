import { Clapperboard } from "lucide-react";
import PosterSkeleton from "./PosterSkeleton";
import { useImageLoader } from "@/hooks/useImageLoader";

interface Props {
  posterUrl: string | null;
  title: string;
  year?: number;
  hasError?: boolean;
}

export default function Poster({
  posterUrl,
  title,
  year,
  hasError,
}: Props) {
  const {
    shouldShowImage,
    shouldShowSkeleton,
    shouldShowFallback,
    handleLoad,
    handleError,
  } = useImageLoader({
    src: posterUrl,
    initialError: hasError,
  });

  return (
    <div className="relative group rounded-xl overflow-hidden cursor-pointer shrink-0 w-48 min-h-full">
      {shouldShowSkeleton && <PosterSkeleton />}

      {shouldShowImage && (
        <img
          src={posterUrl!}
          alt={title}
          onLoad={handleLoad}
          onError={handleError}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {shouldShowFallback && (
        <div className="size-full bg-neutral-700 flex flex-col items-center justify-center gap-2 text-neutral-500 transition-transform duration-300 group-hover:scale-105">
          <Clapperboard size={32} />
          <span className="text-xs">{title}</span>
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
        <span className="text-sm font-semibold leading-tight">{title}</span>
        <span className="text-xs text-neutral-400">{year}</span>
      </div>
    </div>
  );
}