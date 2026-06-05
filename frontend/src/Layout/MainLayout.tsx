import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-primary text-[#FAFAFA]">
      <Navbar />
      <main  className="p-6">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
