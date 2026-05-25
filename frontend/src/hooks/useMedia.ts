
import { useContext } from "react";
import { MediaContext } from "@/context/MediaContext";

export function useMedia() {
  const ctx = useContext(MediaContext);
  if (!ctx) throw new Error("useMedia must be used within MediaProvider");
  return ctx;
}