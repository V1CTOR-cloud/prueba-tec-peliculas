import Button from "@/components/Button/Button";
import type { Episode } from "@/types/mediaTypes";
import { Play, Clapperboard } from "lucide-react";
import { useState } from "react";

export default function EpisodeThumb({ title, description, thumbnail, onClick }: Episode) {
  const [imgError, setImgError] = useState(false);

  return (
    <div onClick={onClick} className="relative group rounded-xl overflow-hidden cursor-pointer shrink-0 w-72 lg:w-92 h-full">
      {imgError || !thumbnail ? (
        <div className="size-full bg-neutral-700 flex flex-col items-center justify-center gap-2 text-neutral-500 transition-transform duration-300 group-hover:scale-105">
          <Clapperboard size={32} />
          <span className="text-xs">{title}</span>
        </div>
      ) : (
        <img
          src={thumbnail}
          alt={title}
          onError={() => setImgError(true)}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <Button
          variant={"glass"}
          aria-label="Play Episode"
          className="size-fit absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-3"
        >
          <Play className="text-white" size={14} />
        </Button>
        <span className="text-sm text-white font-semibold">{title}</span>
        <span className="text-xs text-neutral-400 line-clamp-2 text-ellipsis">{description}</span>
      </div>
    </div>
  );
}