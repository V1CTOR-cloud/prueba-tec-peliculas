import Button from "@/components/Button/Button";
import Chip from "@/components/Chip/Chip";
import type { Media } from "@/types";
import { Star, Play, Bookmark, User } from "lucide-react";

interface Props {
  className?: string;
  media: Media;
}

export default function HeroDetails({ className, media }: Props) {
  return (
    <div
      className={`${className} flex flex-col bg-neutral-800 gap-4 rounded-2xl overflow-auto no-scrollbar text-white`}
    >
      <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-t-2xl">
        <h2 className="font-semibold">Details</h2>
        <small className="lg:hidden">{media.ageRating}</small>
      </div>

      <div className="h-full flex flex-col justify-between px-4 py-3 pb-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-3.5">
              <h1 className="text-4xl lg:text-5xl font-semibold">
                {media.title}
              </h1>
              <div className="hidden size-fit lg:grid place-content-center rounded-full p-3 bg-black/60 backdrop-blur-md border border-white/10">
                {media.ageRating}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-center justify-center gap-1">
                <Star size={16} className="text-neutral-400" />
                <span>{media.rating} iMDB</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <User size={16} className="text-neutral-400" />
                <span>{media.director} </span>
              </div>
            </div>
          </div>
          <p className="text-neutral-400">{media.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <Button
            icon={Play}
            size={"lg"}
            variant={"secondary"}
            className="w-full"
          >
            <h1>Watch Now</h1>
          </Button>
          <Button
            icon={Bookmark}
            size={"lg"}
            variant={"default"}
            className="w-full"
          >
            <h1>Add to Watchlist</h1>
          </Button>
        </div>

        <div className="flex gap-2.5">
          {media.genres.slice(0, 3).map((genre, index) => (
            <Chip
              key={index}
              variant={index === 0 ? "secondary" : "default"}
              text={genre}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
