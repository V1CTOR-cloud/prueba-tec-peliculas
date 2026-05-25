import Button from "@/components/Button/Button";
import type { Episode } from "@/types";
import { Play } from "lucide-react";

export default function EpisodeThumb({ title, description, thumbnail, onClick }: Episode) {
  return (
    <div onClick={onClick} className="relative group rounded-xl overflow-hidden cursor-pointer shrink-0 w-72 md:w-92 h-full">
      <img
        src={thumbnail}
        alt={title}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
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
