import { clsx } from "clsx";
import { type LucideIcon } from "lucide-react";

interface Props {
  text: string;
  icon?: LucideIcon;
  active?: boolean;
}

export default function NavbarItem({ text, icon: Icon, active }: Props) {
  return (
    <span className={clsx(
      `flex items-center justify-center gap-1.5 p-3.5 rounded-lg cursor-pointer`,
      active ? "bg-purple-400" : "text-muted hover:bg-black/60 transition-colors "
    )}>
      {Icon && <Icon size={25} strokeWidth={1.5} fill={active ? "currentColor" : "none"} />}
      <span>{text}</span>
    </span>
  );
}