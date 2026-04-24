import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import NavbarItem from "./NavbarItem/NavbarItem";
import { House, Tv, Clapperboard, Bell, LayoutGrid } from "lucide-react";

const items = [
  { text: "Home", icon: House },
  { text: "Categorías", icon: LayoutGrid },
  { text: "Series", icon: Tv },
  { text: "Películas", icon: Clapperboard },
];

export default function Navbar() {
  return (
    <nav className="px-15 py-3 flex justify-between items-center ring">
      <div className="flex items-center justify-center gap-10">
        <img src="/favicon.svg" alt="WatchNova Logo" className="size-10" />
        <div className="flex gap-2.5">
          {items.map((item, index) => (
            <NavbarItem key={index} text={item?.text} icon={item?.icon} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3.5">
        <Button variant={"default"} icon={Bell} size={"sm"} />
        <Avatar
          fallbackName="Víctor Martínez"
          image="https://images.pexels.com/photos/36808916/pexels-photo-36808916.png"
        />
      </div>
    </nav>
  );
}
