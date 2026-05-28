import { type LucideIcon } from "lucide-react";

type Visual =
  | { icon: LucideIcon; img?: never }
  | { img: { src: string; className?: string }; icon?: never }
  | { icon?: never; img?: never };

interface Props {
  title?: string;
  titleClassName?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export default function EmptyState({
  icon: Icon,
  img,
  title,
  titleClassName,
  description,
  action,
  className,
}: Props & Visual) {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center gap-4 bg-neutral-700 rounded-2xl border border-white/10`}
    >
      {img && <img src={img.src} alt={title} className={img.className} />}
      {Icon && <Icon size={20} className="text-neutral-400" />}
      {title && <h1 className={titleClassName}>{title}</h1>}
      {description && (
        <p className="text-xs text-neutral-400 text-center">{description}</p>
      )}
      {action && action}
    </div>
  );
}
