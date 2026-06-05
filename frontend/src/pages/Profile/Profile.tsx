import { useEffect, useRef, useState } from "react";
import Tabs, { type TabItem } from "@/components/Tabs/Tabs";
import ProfileTabGeneral from "./Tabs/General/ProfileTabGeneral";
import ProfileTabWatchList from "./Tabs/General/ProfileTabWatchList";
import ProfileTabAccount from "./Tabs/General/ProfileTabAccount";
import Separator from "@/components/Separator/Separator";
import Button from "@/components/Button/Button";
import { Save } from "lucide-react";

const tabItems: TabItem[] = [
  { label: "General", id: "general", tab: <ProfileTabGeneral /> },
  { label: "Watch List", id: "watchlist", tab: <ProfileTabWatchList /> },
  { label: "Account", id: "account", tab: <ProfileTabAccount /> },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState(tabItems[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    tabItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-full px-32 pt-2 flex flex-col gap-6">
      
      <div className="sticky bg-neutral-900 top-0 z-10 pt-2">
        <Tabs
          items={tabItems}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      <div className="flex flex-col gap-24">
        {tabItems.map((item) => (
            <>
              {item.tab}
            </>
        ))}
        <Separator />
        <div className="flex justify-end items-center">
          <Button
            variant={"secondary"}
            size={"lg"}
            icon={Save}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
