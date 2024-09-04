import Header from "@/components/component/projects/header";
import data from "@/app/locales/data.json";
import { ProjectCard } from "../ui/block/projectCard";

export default function Page() {
  const projects = data;

  return (
    <>
      <div className="animate-fade-in-down">
        <Header />
        <ProjectCard projects={projects} />
      </div>
    </>
  );
}
