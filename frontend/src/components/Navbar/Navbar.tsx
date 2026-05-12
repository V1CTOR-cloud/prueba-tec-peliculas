import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import NavbarItem from "./NavbarItem/NavbarItem";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import { useNavigate } from "react-router-dom";
import {
  House,
  Tv,
  Clapperboard,
  Menu,
  LogOut,
  LayoutGrid,
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", icon: House, onClick: () => navigate("/") },
    {
      label: "Categories ",
      icon: LayoutGrid,
      onClick: () => navigate("/Categories"),
    },
    { label: "Series", icon: Tv, onClick: () => navigate("/Series") },
    { label: "Movies", icon: Clapperboard, onClick: () => navigate("/Movies") },
    { type: "separator" } as const,
    { label: "Log out", icon: LogOut, onClick: () => navigate("/") },
  ];

  const userActions = [
    { label: "Log out", icon: LogOut, onClick: () => navigate("/") },
  ];

  return (
    <nav className="px-5 py-3 flex justify-between items-center bg-black/60 border-b border-white/10 shadow-lg lg:px-15">
      <div className="flex items-center justify-center gap-10">
        <img
          src="/favicon.svg"
          alt="WatchNova Logo"
          className="cursor-pointer size-8 lg:size-10"
        />
        <div className="gap-2.5 hidden lg:flex">
          {navItems.slice(0, -2).map((item, index) => (
            <NavbarItem
              key={index}
              label={item?.label}
              icon={item?.icon}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3.5">
        <DropdownMenu
          trigger={
            <Avatar
              name="Víctor Martínez"
              image="https://images.pexels.com/photos/36808916/pexels-photo-36808916.png"
              fullInfo={{
                name: "Víctor Martínez",
                role: "SysAdmin"
              }}
            />
          }
          items={userActions}
          className={"hidden lg:block"}
        />

        <DropdownMenu
          trigger={
            <Button
              variant={"outline"}
              icon={Menu}
              size={"sm"}
              className="text-white flex lg:hidden"
            />
          }
          items={navItems}
        />
      </div>
    </nav>
  );
}
