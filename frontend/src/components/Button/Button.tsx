import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 rounded-md font-medium focus:ring-2 focus:ring-offset-2",
        secondary: "bg-gray-100 text-black hover:bg-gray-200 rounded-md font-medium focus:ring-2 focus:ring-offset-2",
        outline: "border border-gray-300 hover:bg-gray-100 rounded-md font-medium focus:ring-2 focus:ring-offset-2",
        ghost: "hover:bg-gray-100 rounded-md font-medium",
        destructive: "bg-red-500 text-white hover:bg-red-600 rounded-md font-medium focus:ring-2 focus:ring-offset-2",
        navbar: "gap-1.5 rounded-lg cursor-pointer text-muted hover:bg-black/60",
        "navbar-active": "gap-1.5 rounded-lg cursor-pointer bg-purple-400",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
        navbar: "p-3.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: LucideIcon
  active?: boolean
}

export default function Button({
  className,
  variant,
  size,
  asChild = false,
  icon: Icon,
  active,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? "span" : "button"

  const resolvedVariant = variant ?? (active !== undefined ? (active ? "navbar-active" : "navbar") : "default")
  const resolvedSize = size ?? (active !== undefined ? "navbar" : "default")

  return (
    <Comp
      className={cn(buttonVariants({ variant: resolvedVariant, size: resolvedSize }), className)}
      {...props}
    >
      {Icon && (
        <Icon
          size={20}
          strokeWidth={1.5}
          fill={active ? "currentColor" : "none"}
        />
      )}
      {children}
    </Comp>
  )
}