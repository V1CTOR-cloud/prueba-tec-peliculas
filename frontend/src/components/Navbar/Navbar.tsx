import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import NavbarItem from "./NavbarItem/NavbarItem";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";

import {
  House,
  Tv,
  Clapperboard,
  Menu,
  LogOut,
  LayoutGrid,
  Settings,
} from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleProfile = () => {
    if (!user) return;

    navigate(`/user/${user.fullName}`, {
      state: user,
    });
  };

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
    { label: "Log out", icon: LogOut, onClick: () => handleLogout() },
  ];

  const userActions = [
    { label: "Log out", icon: LogOut, onClick: () => handleLogout() },
    { label: "Profile", icon: Settings, onClick: () => handleProfile() },
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
        <div className="hidden md:flex">
          <DropdownMenu
            trigger={
              <Avatar
                name={user!.fullName}
                image={user!.avatar}
                fullInfo={{
                  name: user!.fullName,
                  role: user!.email,
                }}
              />
            }
            items={userActions}
          />
        </div>

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
