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
  id: string;
  name: string;
  role: string;
  image?: string;
}

// ─── Season ─────────────────────────────────────────────────────────────────

export interface Season {
  id: string,
  number: number;
  duration: number;
  episodes: Episode[];
}

// ─── Episode ─────────────────────────────────────────────────────────────────

export interface Episode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration?: number;
  season?: number;
  episode?: number;
  onClick?: React.MouseEventHandler
}

// ─── Media ───────────────────────────────────────────────────────────────────

export interface Media {
  id: string;
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
  season?: Season[];
}

// ─── User Media ──────────────────────────────────────────────────────────────

export interface WatchingMedia {
  media: Media;
  progress: number;       
  currentEpisode?: string;
  currentSeason?: string;
  lastWatched: Date;
}
