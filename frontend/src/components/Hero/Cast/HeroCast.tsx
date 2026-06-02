import type { CastMember } from "@/types/mediaTypes";

import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";

interface Props {
  className?: string;
  cast: CastMember[]
}

export default function HeroCast({ className, cast }: Props) {
  
  return (
    <div className={`${className} flex flex-col bg-neutral-800 rounded-2xl text-white`}>
      <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-t-2xl">
        <h2 className="font-semibold">Cast</h2>
        <Button
          variant={"ghost"}
          className="cursor-pointer text-xs text-neutral-400 p-0 h-fit"
        >
          Ver Todos
        </Button>
      </div>

      <div className="flex pt-2 flex-col gap-3 px-4 pb-4 min-h-0 overflow-y-auto no-scrollbar">
        {cast.map((actor) => (
          <Avatar
            key={actor.id}
            name={actor.name}
            alt={actor.name}
            image={actor.image}
            isCircle
            fullInfo={{
              name: actor.name,
              role: actor.role,
            }}
          />
        ))}
      </div>
    </div>
  );
}
