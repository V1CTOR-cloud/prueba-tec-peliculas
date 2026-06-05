import { BriefcaseBusiness } from "lucide-react";
import Separator from "@/components/Separator/Separator";

export default function Footer() {
  return (
    <footer className="pt-20 flex flex-col gap-5 text-neutral-400">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <a href="/" className="flex items-center gap-3.5">
          <img src="/favicon.svg" className="size-10" />
          <h1 className="text-white text-2xl font-semibold">WatchNova</h1>
        </a>
        <div className="flex items-center w-full justify-between lg:w-fit lg:gap-6 font-medium *:hover:text-white *:transition-colors">
          <a href="/">Home</a>
          <a href="/Categories">Categories</a>
          <a href="/Series">Series</a>
          <a href="/Movies">Movies</a>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <a
          href="https://www.linkedin.com/in/v%C3%ADctor-mart%C3%ADnez-zapata/"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <BriefcaseBusiness size={16} />
          <small>LinkedIn</small>
        </a>
        <small>
          Made with ❤️ By{" "}
          <a href="https://www.linkedin.com/in/v%C3%ADctor-mart%C3%ADnez-zapata/" className="hover:text-white transition-colors">
            Víctor
          </a>
        </small>
      </div>
    </footer>
  );
}
