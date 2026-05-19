import { Ellipsis } from "lucide-react";
import Button from "@/components/Button/Button";

interface Props {
  className?: string;
}

export default function HeroEpisodes({ className }: Props) {
  return (
    <div className={`${className} flex flex-col gap-4 rounded-2xl overflow-auto no-scrollbar`}>
      <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/30 backdrop-blur-md border-b border-white/10 rounded-t-2xl">
        <h2 className="text-white font-semibold">Episodes</h2>
        <Button aria-label="Options" variant={"ghost"} className="p-0 size-fit">
          <Ellipsis className="text-white" />
        </Button>
      </div>

      <div className="flex gap-4 cursor-pointer hover:scale-95 transition-transform">
        <div
          className={`bg-[url('https://imgs.search.brave.com/MGESi0htvrt0GH4WqNzNPxLzoDR0a4o6VxcesA11JgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci83OTMv/MjIwL0hELXdhbGxw/YXBlci1mc29jaWV0/eS1tci1yb2JvdC1t/ci1yb2JvdC10di1z/aG93cy1oYWNrZXIt/dGh1bWJuYWlsLmpw/Zw')] h-36 w-64 rounded-2xl bg-center bg-cover shrink-0`}
        />
        <div className="flex flex-col gap-2 pt-4">
          <h1 className="text-xl text-white">Hola, Elliot</h1>
          <p className="text-neutral-300 text-sm">
            Elliot llega a Coney Island y la ilusión comienza a fallar. Mr.
            Robot destapa la verdad.
          </p>
        </div>
      </div>
    </div>
  );
}
