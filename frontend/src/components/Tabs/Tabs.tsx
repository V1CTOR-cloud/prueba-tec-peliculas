import { cn } from "@/lib/utils";

export type TabItem = {
  label: string;
  id: string;
  tab: React.ReactNode;
};

interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export default function Tabs({
  items,
  activeTab,
  onTabChange,
  className,
}: TabsProps) {
  return (
    <div className={cn("flex justify-between lg:justify-start border-b border-neutral-500", className)}>
      {items.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "px-4 py-2 text-sm transition-colors -mb-px border-b-2 cursor-pointer",
              isActive
                ? "border-white text-white"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}