import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-primary-background">
      <Navbar />
      <Hero/>
    </div>
  );
}