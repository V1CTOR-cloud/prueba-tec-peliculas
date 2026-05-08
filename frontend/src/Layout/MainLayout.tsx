import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-primary">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
