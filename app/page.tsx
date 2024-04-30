import Link from "next/link";
import About from "@/app/ui/home/about";
import LatestProjects from "./ui/home/latestProjects";
import Contact from "./ui/home/contact";
import NavBar from "./ui/home/navBar";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <div className="mt-20">
          <h2 className="text-xl font-bold ">Now</h2>
          <p className="text-md mt-3 text-neutral-200">
            I'm currently working on a new project. I'm excited to share it with
            you soon.
          </p>
        </div>
        <LatestProjects />
        <Contact />

      </main>
      <Link href="/projects" className="">work</Link>
      <NavBar /> 
    </>
  );
}
