import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="bg-primary text-[#FAFAFA]">
      <Outlet />
    </main>
  );
}