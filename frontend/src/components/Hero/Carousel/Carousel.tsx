"use client";
import Button from "@/components/Button/Button";
import { Ellipsis, Play } from "lucide-react";
import { useState } from "react";

interface Props {
  className?: string;
}

const items = [
  {
    id: 1,
    image:
      "https://preview.redd.it/give-me-some-of-the-best-movies-wallpapers-for-my-pc-v0-4ru4cwd89apf1.png?width=1920&format=png&auto=webp&s=64868d0c355725a2f8bc5f44ff4883fdeace642b",
    title: "Fight Club",
  },
  {
    id: 2,
    image:
      "https://preview.redd.it/give-me-some-of-the-best-movies-wallpapers-for-my-pc-v0-tvu43voqibpf1.jpeg?width=1920&format=pjpg&auto=webp&s=383fc244006e2ffbf3977bdc4474ce7414910244",
    title: "John Wick 4",
  },
  {
    id: 3,
    image:
      "https://preview.redd.it/give-me-some-of-the-best-movies-wallpapers-for-my-pc-v0-5uycdl13papf1.jpeg?width=1920&format=pjpg&auto=webp&s=41781b08f01df41826d18b5d864db91f26103fe9",
    title: "Mr. Robot",
  },
  {
    id: 4,
    image:
      "https://preview.redd.it/give-me-some-of-the-best-movies-wallpapers-for-my-pc-v0-3mqgcvs44bpf1.jpeg?width=728&format=pjpg&auto=webp&s=d6de7c8b21f744c0e80be377edc9ad99a374b2b3",
    title: "The Joker",
  },
  {
    id: 5,
    image:
      "https://preview.redd.it/give-me-some-of-the-best-movies-wallpapers-for-my-pc-v0-iz3g1z4t4cpf1.png?width=1920&format=png&auto=webp&s=96797b1faf6a7ea53b8093d32ecf0095632195aa",
    title: "The List",
  },
];

export default function HeroCarousel({ className }: Props) {
  const [current, setCurrent] = useState(0);

  return (
    <div className={`${className} relative rounded-2xl overflow-hidden`}>
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-full h-full relative bg-center bg-cover overflow-hidden"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-0" />

            <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/30 backdrop-blur-md border-b border-white/10">
              <h2 className="text-white font-semibold">{item.title}</h2>
              <Button
                aria-label="Options"
                variant={"ghost"}
                className="p-0 size-fit"
              >
                <Ellipsis className="text-white" />
              </Button>
            </div>

            <Button
              variant={"glass"}
              aria-label="Play"
              className="size-fit absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 hover:scale-110 transition-transform"
            >
              <Play className="text-white" />
            </Button>
          </div>
        ))}
      </div>

      <div
        className="absolute z-20 bottom-2 left-1/2 -translate-x-1/2 flex gap-3 p-3 
bg-black/40 backdrop-blur-md border border-white/10 shadow-lg rounded-full"
      >
        {items.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`size-fit p-0 h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white w-6"
                : "bg-white/40 w-2.5 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
