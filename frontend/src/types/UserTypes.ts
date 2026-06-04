import type { WatchingMedia } from "@/types/mediaTypes";

export interface User {
  avatar?: string;
  username?: string;
  passw: string;
  fullName: string;
  email?: string;
  list?: WatchingMedia[] | null;
};
