import { getInitials } from "@/utils/utils";
import clsx from "clsx";

interface Props {
  name: string;
  image?: string;
  alt?: string;
  iconSize?: number;
  isCircle?: boolean;
  className?: string;
  fullInfo?: {
    name: string;
    role?: string;
  };
}

export default function Avatar({
  name,
  image,
  alt = name,
  iconSize = 40,
  fullInfo,
  isCircle
}: Props) {
  return (
    <div
      className={clsx(
        "flex items-center cursor-pointer overflow-hidden shrink-0 gap-3 hover:scale-95 transition-transform",
      )}
    >
      <div style={{ width: iconSize, height: iconSize }}>
        {image ? (
          <img
            src={image}
            alt={alt ?? "avatar"}
            className={`size-full object-cover ${isCircle ? "rounded-full" : "rounded-lg"}`}
          />
        ) : (
          <div className="size-10 rounded-full bg-neutral-700 border border-white/10 flex items-center justify-center text-sm font-medium tracking-wider text-neutral-300 shrink-0">
            {getInitials(name)}
          </div>
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm text-neutral-300 font-medium truncate">
          {fullInfo?.name}
        </span>
        <span className="text-xs text-neutral-400 truncate">
          {fullInfo?.role}
        </span>
      </div>
    </div>
  );
}
