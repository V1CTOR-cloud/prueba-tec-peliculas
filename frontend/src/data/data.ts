import type { Media } from "@/types";

export const mediaList: Media[] = [
  {
    id: 1,
    type: "series",
    title: "Mr. Robot",
    description:
      "Un grupo de hackers recluta a un hombre que trabaja como ingeniero de ciberseguridad de día y como cibervigilante por la noche para acabar con una empresa global.",
    year: 2015,
    director: "Sam Esmail",
    ageRating: "+16",
    genres: ["Drama", "Thriller"],
    rating: 4.8,
    posterUrl: "https://...",
    bannerUrl: "https://preview.redd.it/...",
    cast: [
      { name: "Rami Malek", role: "Elliot Alderson" },
      { name: "Christian Slater", role: "Mr. Robot" },
      { name: "Portia Doubleday", role: "Angela Moss" },
    ],
    episodes: [
      {
        id: 1,
        title: "Hola, Elliot",
        description:
          "Elliot llega a Coney Island y la ilusión comienza a fallar. Mr. Robot destapa la verdad.",
        thumbnail: "https://...",
        duration: 45,
        season: 1,
        episode: 1,
      },
    ],
  },
];
