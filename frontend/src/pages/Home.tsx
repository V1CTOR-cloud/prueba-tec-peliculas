import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero/>
    </div>
  );
}