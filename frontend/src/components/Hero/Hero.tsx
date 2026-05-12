import Avatar from "../Avatar/Avatar";
import Carousel from "./Carousel/Carousel";
import HeroEpisodes from "./HeroEpisodes";

import Button from "@/components/Button/Button";
import { Ellipsis, Star, Drama } from "lucide-react";

const cast = [
  { name: "Rami Malek", role: "Elliot Alderson", initials: "RM" },
  { name: "Christian Slater", role: "Mr. Robot", initials: "CS" },
  { name: "Portia Doubleday", role: "Angela Moss", initials: "PD" },
  { name: "Carly Chaikin", role: "Darlene", initials: "CC" },
  { name: "Martin Wallström", role: "Tyrell Wellick", initials: "MW" },
  { name: "Stephanie Corneliussen", role: "Joanna Wellick", initials: "SC" },
  { name: "Grace Gummer", role: "Dominique DiPierro", initials: "GG" },
  { name: "Sunita Mani", role: "Trenton", initials: "SM" },
  { name: "B.D Wong", role: "Whiterose", initials: "BD" },
  { name: "Michael Cristofer", role: "Phillip Price", initials: "MC" },
  { name: "Bruce Altman", role: "Terry Colby", initials: "BA" },
  { name: "Brian Stokes Mitchell", role: "Scott Knowles", initials: "BS" },
  { name: "Michelle Hicks", role: "Sharon Knowles", initials: "MH" },
  { name: "Frankie Shaw", role: "Shayla Nico", initials: "FS" },
  { name: "Gloria Reuben", role: "Krista Gordon", initials: "GR" },
  { name: "Elliot Villar", role: "Fernando Vera", initials: "EV" },
];

export default function Hero() {
  return (
    <section className="p-6">
      <div className="grid grid-cols-12 auto-rows-[120px] gap-4">
        <Carousel className="col-span-12 md:col-span-8 row-span-3" />

        {/* <HeroEpisodes /> */}

        <div className="col-span-12 md:col-span-4 row-span-3 flex flex-col bg-neutral-800 gap-4 rounded-2xl overflow-auto no-scrollbar text-white">
          <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-t-2xl">
            <h2 className="font-semibold">Details</h2>
          </div>

          <div className="flex flex-col gap-4 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-3.5">
                <h1 className="text-5xl font-semibold">Mr Robot</h1>
                <div className="w-fit grid place-content-center rounded-full p-3 bg-black/60 backdrop-blur-md border border-white/10">
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
        </div>

        <div className="col-span-6 md:col-span-8 row-span-2 rounded-2xl bg-neutral-800 p-4">
          Trending
        </div>

        <div className="col-span-12 md:col-span-4 row-span-2 flex flex-col bg-neutral-800 gap-4 rounded-2xl overflow-hidden text-white">
          <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-t-2xl">
            <h2 className="font-semibold">Cast</h2>
            <Button
              variant={"ghost"}
              className="cursor-pointer text-xs text-neutral-400 p-0 h-fit"
            >
              Ver Todos
            </Button>
          </div>

          <div className="flex flex-col gap-3 px-4 pb-4">
            {cast.map((actor) => (
              <Avatar
                name={actor.name}
                fullInfo={{
                  name: actor.name,
                  role: actor.role
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


