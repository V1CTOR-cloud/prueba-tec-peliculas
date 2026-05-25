import Button from "@/components/Button/Button";
import { Star, Drama, Play, Bookmark } from "lucide-react";

interface Props {
  className?: string;
}

export default function HeroDetails({ className }: Props) {
  return (
    <div className={`${className} flex flex-col bg-neutral-800 gap-4 rounded-2xl overflow-auto no-scrollbar text-white`}>
      <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-t-2xl">
        <h2 className="font-semibold">Details</h2>
        <small className="md:hidden">+16</small>
      </div>

      <div className="h-full flex flex-col justify-between px-4 py-3 pb-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-3.5">
              <h1 className="text-4xl md:text-5xl font-semibold">Mr Robot</h1>
              <div className="hidden size-fit md:grid place-content-center rounded-full p-3 bg-black/60 backdrop-blur-md border border-white/10">
                +16
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-center justify-center gap-1">
                <Star size={16} className="text-neutral-400" />
                <span>4.8 iMDB</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Drama size={16} className="text-neutral-400" />
                <span>Drama</span>
              </div>
            </div>
          </div>
          <p className="text-neutral-400">
            Un grupo de hackers recluta a un hombre que trabaja como ingeniero
            de ciberseguridad de día y como cibervigilante por la noche para
            acabar con una empresa global.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Button icon={Play} size={"lg"} variant={"secondary"} className="w-full md:">
            <h1>Watch Now</h1>
          </Button>
          <Button icon={Bookmark} size={"lg"} variant={"default"} className="w-full">
            <h1>Add to Watchlist</h1>
          </Button>
        </div>

        <div className="flex justify-between text-neutral-400">
          <small>2019</small>
          <small>By: Sam Esmail</small>
        </div>
      </div>
    </div>
  );
}
