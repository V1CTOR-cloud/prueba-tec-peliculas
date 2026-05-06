import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { type LucideIcon } from "lucide-react";

type MenuSeparator = { type: "separator" };

type MenuAction = {
  type?: "item";
  label: string;
  icon?: LucideIcon;
  destructive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

type MenuItem = MenuAction | MenuSeparator;

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
}

export default function DropdownMenu({ trigger, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | KeyboardEvent) => {
      if ("key" in e) {
        if (e.key === "Escape") setOpen(false);
        return;
      }
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      
      <div onClick={() => setOpen((v) => !v)} className="cursor-pointer">
        {trigger}
      </div>

      {open && (
        <div className="absolute z-50 mt-2.5 right-0 min-w-40 rounded-lg border border-white/10 bg-neutral-900/95 backdrop-blur-md p-1 shadow-2xl shadow-black/50">
          {items.map((item, i) => {
            if (item.type === "separator") {
              return <div key={i} className="my-1 h-px bg-white/10 mx-1" />;
            }

            const {
              label,
              icon: Icon,
              destructive,
              disabled,
              onClick,
            } = item as MenuAction;

            return (
              <div
                key={i}
                onClick={() => {
                  if (disabled) return;
                  onClick?.();
                  setOpen(false);
                }}
                className={clsx(
                  "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-default select-none",
                  disabled
                    ? "text-neutral-600 cursor-not-allowed"
                    : destructive
                      ? "text-red-400 hover:bg-red-500/20 hover:text-red-300 cursor-pointer"
                      : "text-neutral-200 hover:bg-white/10 hover:text-white cursor-pointer",
                )}
              >
                {Icon && (
                  <Icon
                    size={15}
                    strokeWidth={1.5}
                    className="shrink-0 opacity-70"
                  />
                )}
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
