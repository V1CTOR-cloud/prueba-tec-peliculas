import { useState } from "react";

interface Params {
  src: string | null;
  initialError?: boolean;
}

export function useImageLoader({ src, initialError }: Params) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(!!initialError);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  const shouldShowImage = !!src && !error;
  const shouldShowSkeleton = !!src && !loaded && !error;
  const shouldShowFallback = !src || error;

  return {
    loaded,
    error,
    shouldShowImage,
    shouldShowSkeleton,
    shouldShowFallback,
    handleLoad,
    handleError,
  };
}