import { clsx } from "clsx";
import { type LucideIcon } from "lucide-react";

interface Props {
  label: string;
  icon?: LucideIcon;
  active?: boolean;
  onClick?: () => void;
}

export default function NavbarItem({
  label,
  icon: Icon,
  active,
  onClick,
}: Props) {
  return (
    <span
      className={clsx(
        `flex items-center justify-center gap-1.5 p-3.5 rounded-lg cursor-pointer`,
        active
          ? "bg-purple-400"
          : "text-muted hover:bg-neutral-900 transition-colors ",
      )}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          size={25}
          strokeWidth={1.5}
          fill={active ? "currentColor" : "none"}
        />
      )}
      <span>{label}</span>
    </span>
  );
}
