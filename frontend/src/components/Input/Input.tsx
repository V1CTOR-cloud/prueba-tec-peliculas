import { useId, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Button from "../Button/Button";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  showPasswordToggle?: boolean;
}

const inputVariants = cva(
  "w-full rounded py-1 px-2 ring ring-neutral-500 bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      hasError: {
        true: "ring-red-400 focus:ring-red-400",
        false: "",
      },
      hasLeftIcon: {
        true: "pl-8",
        false: "",
      },
      hasRightIcon: {
        true: "pr-8",
        false: "",
      },
    },
    defaultVariants: {
      hasError: false,
      hasLeftIcon: false,
      hasRightIcon: false,
    },
  }
);

export default function Input({
  label,
  error,
  hint,
  icon: Icon,
  iconPosition = "left",
  showPasswordToggle = false,
  className,
  id: externalId,
  type,
  required,
  ...props
}: InputProps) {
  const generatedId = useId();
  const id = externalId ?? generatedId;
  const descriptionId = `${id}-description`;

  const [showPassword, setShowPassword] = useState(false);

  const hasError = Boolean(error);
  const hasHint = Boolean(hint) && !hasError;

  const isPassword = type === "password";
  const resolvedType = isPassword && showPassword ? "text" : type;

  const hasLeftIcon = Boolean(Icon) && iconPosition === "left";
  const hasRightIcon =
    (Boolean(Icon) && iconPosition === "right") ||
    (isPassword && showPasswordToggle);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-neutral-400">
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </label>

      <div className="relative flex items-center">
        {hasLeftIcon && Icon && (
          <Icon
            size={16}
            strokeWidth={1.5}
            className="absolute left-2 text-neutral-400 pointer-events-none"
          />
        )}

        <input
          id={id}
          type={resolvedType}
          aria-describedby={error || hint ? descriptionId : undefined}
          aria-invalid={hasError || undefined}
          aria-required={required}
          className={cn(
            inputVariants({
              hasError,
              hasLeftIcon,
              hasRightIcon,
            }),
            className
          )}
          {...props}
        />

        {/* Icono derecha (no password) */}
        {Icon && iconPosition === "right" && !isPassword && (
          <Icon
            size={16}
            strokeWidth={1.5}
            className="absolute right-2 text-neutral-400 pointer-events-none"
          />
        )}

        {/* Toggle password */}
        {isPassword && showPasswordToggle && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            icon={showPassword ? EyeOff : Eye}
            className="absolute right-1 h-7 w-7 text-neutral-400 hover:text-neutral-200"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          />
        )}
      </div>

      {(hasError || hasHint) && (
        <p
          id={descriptionId}
          className={cn(
            "text-xs",
            hasError ? "text-red-400" : "text-neutral-400"
          )}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
}