import clsx from "clsx";

interface Props {
  fallbackName?: string;
  image?: string;
  size?: number;
  isCircle?: boolean;
}

function getInitials(name?: string): string {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function Avatar({ fallbackName, image, size = 40, isCircle }: Props) {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(
        "flex items-center justify-center cursor-pointer transition-colors overflow-hidden shrink-0",
        !image && "bg-black/60 text-muted",
        isCircle ? "rounded-full" : "rounded-lg"
      )}
    >
      {image ? (
        <img
          src={image}
          alt={fallbackName ?? "avatar"}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-sm font-medium">{getInitials(fallbackName)}</span>
      )}
    </div>
  );
}