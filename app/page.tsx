import Link from "next/link";
import About from "@/app/ui/about";
import LatestProjects from "./ui/latestProjects";
import Contact from "./ui/contact";
import NavBar from "./ui/navBar";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <div className="mt-20">
          <h2 className="text-base font-bold ">Now</h2>
          <p className="text-base mt-3 text-neutral-200">
            I&apos;m currently working on a new project. I&apos;m excited to
            share it with you soon.
          </p>
        </div>
        <LatestProjects />
        <Contact />
      </main>
      <NavBar />
    </>
  );
}
