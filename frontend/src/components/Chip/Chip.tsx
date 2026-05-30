import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

const chipVariants = cva("rounded-full inline-flex items-center gap-2.5", {
  variants: {
    variant: {
      default:
        "bg-primary text-white hover:bg-primary/90 font-medium",
      secondary:
        "bg-gray-100 text-black hover:bg-gray-200 font-medium",
      outline:
        "border border-neutral-500 hover:bg-neutral-900 font-medium",
      ghost: "!bg-transparent",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 font-medium",
      glass: "bg-black/60 backdrop-blur-md border border-white/10 shadow-lg",
    },
    size: {
      default: "px-5 py-1.5 text-sm",
      sm: "h-8 p-2.5 py-4.5 text-xs",
      lg: "h-12 px-6 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface Props extends VariantProps<typeof chipVariants> {
  text?: string;
  iconOrientation?: "left" | "right";
  icon?: LucideIcon;
  className?: string;
}

export default function Chip({
  text,
  variant,
  size,
  iconOrientation = "left",
  icon: Icon,
  className,
}: Props) {
  return (
    <div className={cn(chipVariants({ variant, size }), className)}>
      {Icon && iconOrientation === "left" && (
        <Icon size={16} strokeWidth={1.5} />
      )}
      {text && 
        <span>{text}</span>
      }
      {Icon && iconOrientation === "right" && (
        <Icon size={16} strokeWidth={1.5} />
      )}
    </div>
  );
}
