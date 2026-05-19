// ─── Enums ───────────────────────────────────────────────────────────────────

export type MediaType = "movie" | "series" | "documentary" | "short";
export type AgeRating = "+7" | "+13" | "+16" | "+18";
export type Genre =
  | "Drama"
  | "Action"
  | "Comedy"
  | "Thriller"
  | "Sci-Fi"
  | "Horror"
  | "Animation"
  | "Fantasy";

// ─── Person ──────────────────────────────────────────────────────────────────

export interface CastMember {
  name: string;
  role: string;
  image?: string;
}

// ─── Episode ─────────────────────────────────────────────────────────────────

export interface Episode {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: number;
  season: number;
  episode: number;
}

// ─── Media ───────────────────────────────────────────────────────────────────

export interface Media {
  id: number;
  type: MediaType;

  title: string;
  description: string;
  year: number;
  director: string;
  ageRating: AgeRating;
  genres: Genre[];
  rating: number;

  // Images
  posterUrl: string;
  bannerUrl: string;

  // Relations
  cast: CastMember[];
  episodes?: Episode[];
}
