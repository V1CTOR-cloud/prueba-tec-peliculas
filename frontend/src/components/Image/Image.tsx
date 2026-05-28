import { useState } from "react";
import type { ImgHTMLAttributes, ReactNode } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
  alt: string;
  loader: ReactNode;
}

export default function Image({
  src,
  fallbackSrc,
  alt,
  loader,
  ...props
}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoading(false);

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const displaySrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {isLoading && (
        <div
          className="skeleton-loader"
          style={{ width: "100%", height: "100%" }}
        >
          {loader}
        </div>
      )}

      <img
        {...props}
        src={displaySrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          display: isLoading ? "none" : "block",
          ...props.style,
        }}
      />
    </div>
  );
}