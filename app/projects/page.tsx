import LatestProjects from "@/app/ui/latestProjects";
import Link from "next/link";
import Projects from "@/app/ui/projects/projects";
import OtherProjects from "@/app/ui/projects/otherProjects";

export default function Page() {
  return (
    <>
      <article>
        <Projects />
        <LatestProjects />
        <OtherProjects />
      </article>
    </>
  );
}
